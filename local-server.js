import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

// In-memory storage (same as production)
let projects = [];

// Parse the structured message format
function parseProjectMessage(message) {
    const lines = message.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
    
    let name = '';
    let description = '';
    let url = '';
    let currentField = '';
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
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
            if (currentField === 'name' && !name) {
                name = line;
            } else if (currentField === 'description') {
                if (description) {
                    description += ' ' + line;
                } else {
                    description = line;
                }
            } else if (currentField === 'url' && !url) {
                url = line;
            }
        }
    }
    
    name = name.trim();
    description = description.trim();
    url = url.trim();
    
    if (name && description && url && isValidUrl(url)) {
        return { name, description, url };
    }
    
    return null;
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        try {
            new URL('https://' + string);
            return true;
        } catch (_) {
            return false;
        }
    }
}

// API Routes
app.post('/api/webhook', (req, res) => {
    const { body } = req;
    const TARGET_GROUP = "HackTillDawn Final Participants";
    
    if (body.type === 'message' && 
        body.chat_id.includes('@g.us') && 
        body.chat_name === TARGET_GROUP) {
        
        const message = body.text?.body || '';
        const project = parseProjectMessage(message);
        
        if (project) {
            project.timestamp = new Date().toISOString();
            project.sender = body.from_name || body.sender || 'Unknown';
            project.groupName = body.chat_name;
            
            projects.push(project);
            console.log('✅ New project added from', TARGET_GROUP, ':', project.name);
        } else {
            console.log('❌ Message from', TARGET_GROUP, 'did not match project format:', message.substring(0, 100));
        }
    } else if (body.type === 'message' && body.chat_id.includes('@g.us')) {
        console.log('ℹ️ Message from other group:', body.chat_name, '- ignoring');
    }
    
    res.status(200).send('OK');
});

app.get('/api/projects', (req, res) => {
    res.json({
        projects: projects.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)),
        totalCount: projects.length,
        lastUpdated: projects.length > 0 ? projects[0].timestamp : null
    });
});

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        projectsCount: projects.length,
        message: 'Local HackTillDawn API is running'
    });
});

app.post('/api/test-project', (req, res) => {
    const { name, description, url } = req.body;
    
    if (name && description && url) {
        const project = {
            name,
            description,
            url,
            timestamp: new Date().toISOString(),
            sender: 'Test User',
            groupName: 'HackTillDawn Final Participants'
        };
        
        projects.push(project);
        res.json({ success: true, project });
    } else {
        res.status(400).json({ error: 'Missing required fields: name, description, url' });
    }
});

// Serve static files from dist directory
app.use(express.static('dist'));

// Fallback for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;

// Start the server
const server = createServer(app);

server.listen(PORT, () => {
    console.log('🚀 Local Development Server Started!');
    console.log(`📡 API Server: http://localhost:${PORT}`);
    console.log(`🌐 Frontend: http://localhost:${PORT}`);
    console.log(`📊 Projects API: http://localhost:${PORT}/api/projects`);
    console.log(`🔗 Webhook: http://localhost:${PORT}/api/webhook`);
    console.log(`❤️ Health: http://localhost:${PORT}/api/health`);
    console.log('\n📝 Test the webhook with:');
    console.log(`curl -X POST http://localhost:${PORT}/api/webhook \\`);
    console.log(`  -H "Content-Type: application/json" \\`);
    console.log(`  -d '{"type":"message","chat_id":"test@g.us","chat_name":"HackTillDawn Final Participants","from_name":"Test User","text":{"body":"Name: Test Project\\nDescription: Test description\\nURL: https://example.com"}}'`);
    console.log('\n🛑 Press Ctrl+C to stop the server');
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    server.close(() => {
        console.log('✅ Server stopped');
        process.exit(0);
    });
});
