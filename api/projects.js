import { sampleProjects, hackathonMetadata } from '../data/sample/sample-projects.js';

// In-memory data storage for Vercel serverless functions
let projects = [
  {
    "name": "Test Project",
    "description": "This is a test project to verify persistence",
    "url": "https://example.com",
    "teamName": "Test Team",
    "teamMembers": "Test User, Test Member",
    "sender": "Test User",
    "groupName": "Test Group",
    "timestamp": "2025-09-25T17:51:20.348Z",
    "reactions": [],
    "replies": []
  },
  {
    "name": "Hacked",
    "description": "Hackathon project description",
    "url": "https://hacked.com",
    "teamName": "Hackerz",
    "teamMembers": "Jerom Tom, John Doe",
    "sender": "Jerom Tom",
    "groupName": "HackTillDawn Final Participants",
    "timestamp": "2025-01-27T10:00:00.000Z",
    "reactions": [],
    "replies": []
  },
  {
    "name": "Project Gallery",
    "description": "View and vote on all projects built at HackTillDawn.",
    "url": "https://hacktilldawn-website.vercel.app/projects",
    "teamName": "HackTillDawn",
    "teamMembers": "Joann, Jerom",
    "sender": "Jerom Palimattom Tom",
    "groupName": "HackTillDawn Final Participants",
    "messageId": "pe.VGVcxmWLREHCNvj7a4Q-wpgBq53lJfJECQ",
    "timestamp": "2025-09-25T21:21:04.000Z",
    "reactions": [],
    "replies": []
  }
];

let reactions = [];
let replies = [];

// Helper functions
function getAllProjects() {
    return projects.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

function getProjectReactions(messageId) {
    return reactions.filter(r => r.messageId === messageId);
}

function getProjectReplies(messageId) {
    return replies.filter(r => r.quotedMessageId === messageId);
}

export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }
    
    try {
        const realProjects = getAllProjects();
        const useSampleData = req.query.sample === 'true' || (realProjects.length === 0 && process.env.NODE_ENV === 'development');
        
        let projectsToReturn;
        let metadata = {};
        
        if (useSampleData) {
            // Use sample data with proper structure
            projectsToReturn = sampleProjects.map(project => {
                const reactions = project.reactions || [];
                const replies = project.replies || [];
                
                // Count reactions by emoji
                const reactionCounts = reactions.reduce((acc, reaction) => {
                    const emoji = reaction.emoji;
                    acc[emoji] = (acc[emoji] || 0) + 1;
                    return acc;
                }, {});
                
                return {
                    ...project,
                    reactionCounts: reactionCounts,
                    totalReactions: reactions.length,
                    totalReplies: replies.length
                };
            });
            metadata = hackathonMetadata;
        } else {
            // Use real data
            projectsToReturn = realProjects.map(project => {
                const reactions = getProjectReactions(project.messageId);
                const replies = getProjectReplies(project.messageId);
                
                // Count reactions by emoji
                const reactionCounts = reactions.reduce((acc, reaction) => {
                    const emoji = reaction.emoji;
                    acc[emoji] = (acc[emoji] || 0) + 1;
                    return acc;
                }, {});
                
                return {
                    ...project,
                    reactions: reactions,
                    replies: replies,
                    reactionCounts: reactionCounts,
                    totalReactions: reactions.length,
                    totalReplies: replies.length
                };
            });
        }
        
        res.json({
            projects: projectsToReturn.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)),
            totalCount: projectsToReturn.length,
            lastUpdated: projectsToReturn.length > 0 ? projectsToReturn[0].timestamp : null,
            metadata: metadata,
            isSampleData: useSampleData,
            dataSource: useSampleData ? 'sample' : 'real'
        });
    } catch (error) {
        console.error('Error retrieving projects:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
