import { getAllProjects, getProjectsCount, getLastUpdated, getProjectReactions, getProjectReplies } from './projects-data.js';
import { sampleProjects, hackathonMetadata } from '../data/sample/sample-projects.js';

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
