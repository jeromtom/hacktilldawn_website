// Simple projects API that can work with sample data
import { sampleProjects, hackathonMetadata } from './sample-projects.js';

// In-memory storage for real projects (use database in production)
let projects = [];

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
    
    // Check if we should return sample data
    const useSampleData = req.query.sample === 'true' || projects.length === 0;
    
    const projectsToReturn = useSampleData ? sampleProjects : projects;
    
    res.json({
        projects: projectsToReturn.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)),
        totalCount: projectsToReturn.length,
        lastUpdated: projectsToReturn.length > 0 ? projectsToReturn[0].timestamp : null,
        metadata: hackathonMetadata,
        isSampleData: useSampleData
    });
}
