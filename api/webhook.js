const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// In-memory storage (use database in production)
let projects = [];

// Parse the structured message format
function parseProjectMessage(message) {
    // Clean the message and split into lines
    const lines = message.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
    
    let name = '';
    let description = '';
    let url = '';
    let currentField = '';
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check for field headers (case insensitive)
        if (line.toLowerCase().startsWith('name:')) {
            currentField = 'name';
            name = line.substring(5).trim();
        } else if (line.toLowerCase().startsWith('description:')) {
            currentField = 'description';
            description = line.substring(12).trim();
        } else if (line.toLowerCase().startsWith('url:')) {
            currentField = 'url';
            url = line.substring(4).trim();
        } else {
            // Continue reading content for the current field
            if (currentField === 'name' && !name) {
                name = line;
            } else if (currentField === 'description') {
                if (description) {
                    description += ' ' + line; // Append to existing description
                } else {
                    description = line;
                }
            } else if (currentField === 'url' && !url) {
                url = line;
            }
        }
    }
    
    // Clean up the fields
    name = name.trim();
    description = description.trim();
    url = url.trim();
    
    // Validate that we have all required fields and URL format
    if (name && description && url && isValidUrl(url)) {
        return { name, description, url };
    }
    
    return null;
}

// Helper function to validate URL format
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        // If it doesn't have protocol, try adding https://
        try {
            new URL('https://' + string);
            return true;
        } catch (_) {
            return false;
        }
    }
}

// Webhook endpoint to receive WhatsApp messages
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
    
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }
    
    const { body } = req;
    
    // Target group name
    const TARGET_GROUP = "HackTillDawn Final Participants";
    
    // Check if it's a message event from the specific group
    if (body.type === 'message' && 
        body.chat_id.includes('@g.us') && 
        body.chat_name === TARGET_GROUP) {
        
        const message = body.text?.body || '';
        
        // Parse message in format: Name:\nDescription:\nURL:
        const project = parseProjectMessage(message);
        
        if (project) {
            // Add timestamp and sender info
            project.timestamp = new Date().toISOString();
            project.sender = body.from_name || body.sender || 'Unknown';
            project.groupName = body.chat_name;
            
            // Store the project (in production, save to database)
            projects.push(project);
            console.log('New project added from', TARGET_GROUP, ':', project);
        } else {
            console.log('Message from', TARGET_GROUP, 'did not match project format:', message.substring(0, 100));
        }
    } else if (body.type === 'message' && body.chat_id.includes('@g.us')) {
        // Log messages from other groups (for debugging)
        console.log('Message from other group:', body.chat_name, '- ignoring');
    }
    
    res.status(200).send('OK');
}
