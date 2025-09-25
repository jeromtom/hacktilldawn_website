import { getAllProjects, getProjectsCount, getLastUpdated, getProjectReactions, getProjectReplies } from './projects-data.js';

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
        const projects = getAllProjects();
        
        // Enhance projects with reactions and replies data
        const enhancedProjects = projects.map(project => {
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
        
        res.json({
            projects: enhancedProjects,
            totalCount: getProjectsCount(),
            lastUpdated: getLastUpdated()
        });
    } catch (error) {
        console.error('Error retrieving projects:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
