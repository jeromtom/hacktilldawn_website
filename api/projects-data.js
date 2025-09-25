import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '..', 'data', 'projects.json');

// Ensure data directory exists
const dataDir = path.dirname(DATA_FILE);
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Load projects from JSON file
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

// Save projects to JSON file
function saveProjects(projects) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2));
        console.log(`Projects saved to ${DATA_FILE}`);
    } catch (error) {
        console.error('Error saving projects to file:', error);
    }
}

// Initialize projects array
let projects = loadProjects();
let reactions = [];
let replies = [];

// Load reactions and replies from JSON files
function loadReactions() {
    const reactionsFile = path.join(__dirname, '..', 'data', 'reactions.json');
    try {
        if (fs.existsSync(reactionsFile)) {
            const data = fs.readFileSync(reactionsFile, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading reactions from file:', error);
    }
    return [];
}

function loadReplies() {
    const repliesFile = path.join(__dirname, '..', 'data', 'replies.json');
    try {
        if (fs.existsSync(repliesFile)) {
            const data = fs.readFileSync(repliesFile, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading replies from file:', error);
    }
    return [];
}

// Save reactions and replies to JSON files
function saveReactions() {
    const reactionsFile = path.join(__dirname, '..', 'data', 'reactions.json');
    try {
        fs.writeFileSync(reactionsFile, JSON.stringify(reactions, null, 2));
    } catch (error) {
        console.error('Error saving reactions to file:', error);
    }
}

function saveReplies() {
    const repliesFile = path.join(__dirname, '..', 'data', 'replies.json');
    try {
        fs.writeFileSync(repliesFile, JSON.stringify(replies, null, 2));
    } catch (error) {
        console.error('Error saving replies to file:', error);
    }
}

// Initialize reactions and replies
reactions = loadReactions();
replies = loadReplies();

// Export functions for managing projects
function getAllProjects() {
    return projects.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

function addProject(project) {
    // Add timestamp if not present
    if (!project.timestamp) {
        project.timestamp = new Date().toISOString();
    }
    
    // Initialize reactions and replies arrays
    project.reactions = [];
    project.replies = [];
    
    projects.push(project);
    saveProjects(projects);
    return project;
}

function addReaction(reactionData) {
    reactions.push(reactionData);
    saveReactions();
    
    // Find the project by messageId and add reaction
    const project = projects.find(p => p.messageId === reactionData.messageId);
    if (project) {
        if (!project.reactions) project.reactions = [];
        project.reactions.push(reactionData);
        saveProjects(projects);
    }
    
    return reactionData;
}

function addReply(replyData) {
    replies.push(replyData);
    saveReplies();
    
    // Find the project by quotedMessageId and add reply
    const project = projects.find(p => p.messageId === replyData.quotedMessageId);
    if (project) {
        if (!project.replies) project.replies = [];
        project.replies.push(replyData);
        saveProjects(projects);
    }
    
    return replyData;
}

function getProjectsCount() {
    return projects.length;
}

function getLastUpdated() {
    return projects.length > 0 ? projects[0].timestamp : null;
}

function getProjectReactions(projectId) {
    return reactions.filter(r => r.messageId === projectId);
}

function getProjectReplies(projectId) {
    return replies.filter(r => r.quotedMessageId === projectId);
}

export {
    getAllProjects,
    addProject,
    addReaction,
    addReply,
    getProjectsCount,
    getLastUpdated,
    getProjectReactions,
    getProjectReplies,
    projects
};
