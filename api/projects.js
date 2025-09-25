// In-memory storage (use database in production)
// This should be moved to a shared database in production
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
    
    res.json({
        projects: projects.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)),
        totalCount: projects.length,
        lastUpdated: projects.length > 0 ? projects[0].timestamp : null
    });
}
