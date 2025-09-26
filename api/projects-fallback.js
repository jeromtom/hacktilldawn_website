import fs from 'fs';
import path from 'path';

// Fallback to file-based storage if database is not available
const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

// Load projects from JSON file (fallback)
function loadProjects() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading projects from file:', error);
    }
    return [];
}

// Get all projects with fallback
export async function getAllProjectsWithFallback() {
    try {
        // Try database first
        const { getAllProjects } = await import('../database/projects-db.js');
        return await getAllProjects();
    } catch (error) {
        console.warn('Database unavailable, falling back to file storage:', error.message);
        
        // Fallback to file storage
        const projects = loadProjects();
        
        // Calculate reaction counts and totals for each project
        return projects.map(project => {
            const reactionCounts = {};
            let totalReactions = 0;
            
            // Count reactions by emoji
            if (project.reactions && project.reactions.length > 0) {
                project.reactions.forEach(reaction => {
                    if (reaction.emoji) {
                        reactionCounts[reaction.emoji] = (reactionCounts[reaction.emoji] || 0) + 1;
                        totalReactions++;
                    }
                });
            }
            
            return {
                ...project,
                reactionCounts,
                totalReactions,
                totalReplies: project.replies ? project.replies.length : 0
            };
        });
    }
}

// Get projects count with fallback
export async function getProjectsCountWithFallback() {
    try {
        const { getProjectsCount } = await import('../database/projects-db.js');
        return await getProjectsCount();
    } catch (error) {
        console.warn('Database unavailable, falling back to file storage for count');
        const projects = loadProjects();
        return projects.length;
    }
}

// Get last updated with fallback
export async function getLastUpdatedWithFallback() {
    try {
        const { getLastUpdated } = await import('../database/projects-db.js');
        return await getLastUpdated();
    } catch (error) {
        console.warn('Database unavailable, falling back to file storage for last updated');
        const projects = loadProjects();
        return projects.length > 0 ? projects[0].timestamp : null;
    }
}
