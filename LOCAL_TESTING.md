# Local Testing Guide

## Quick Start

### 1. Start Local Development Server
```bash
npm run dev:local
```

This will:
- Build the React frontend
- Start the local server with API endpoints
- Serve both frontend and backend on `http://localhost:3000`

### 2. Test the Webhook
```bash
npm run test:local
```

## Manual Testing

### Test Webhook with curl
```bash
curl -X POST http://localhost:3000/api/webhook \
  -H "Content-Type: application/json" \
  -d '{
    "type": "message",
    "chat_id": "test@g.us",
    "chat_name": "HackTillDawn Final Participants",
    "from_name": "Test User",
    "text": {
      "body": "Name: My Test Project\nDescription: This is a test project\nURL: https://github.com/test/project"
    }
  }'
```

### Check Projects
```bash
curl http://localhost:3000/api/projects
```

### Health Check
```bash
curl http://localhost:3000/api/health
```

## Available Endpoints

- **Frontend**: `http://localhost:3000`
- **Webhook**: `http://localhost:3000/api/webhook`
- **Projects**: `http://localhost:3000/api/projects`
- **Health**: `http://localhost:3000/api/health`
- **Test Project**: `http://localhost:3000/api/test-project`

## Testing Different Scenarios

### 1. Valid Project Message
```json
{
  "type": "message",
  "chat_id": "test@g.us",
  "chat_name": "HackTillDawn Final Participants",
  "from_name": "John Doe",
  "text": {
    "body": "Name: Awesome Project\nDescription: This project is amazing\nURL: https://github.com/john/awesome"
  }
}
```

### 2. Invalid Format
```json
{
  "type": "message",
  "chat_id": "test@g.us",
  "chat_name": "HackTillDawn Final Participants",
  "from_name": "Jane Doe",
  "text": {
    "body": "This is just a regular message"
  }
}
```

### 3. Other Group (Should be ignored)
```json
{
  "type": "message",
  "chat_id": "other@g.us",
  "chat_name": "Some Other Group",
  "from_name": "Bob Smith",
  "text": {
    "body": "Name: Other Project\nDescription: This should be ignored\nURL: https://example.com"
  }
}
```

## Development Workflow

1. **Start local server**: `npm run dev:local`
2. **Test webhook**: `npm run test:local`
3. **Make changes** to API files in `/api/` directory
4. **Restart server** to see changes
5. **Test again** to verify changes work

## Troubleshooting

- **Port 3000 in use**: Change PORT in `local-server.js`
- **Build errors**: Run `npm run build` first
- **API not responding**: Check server console for errors
- **CORS issues**: CORS is enabled for all origins locally
