// Simple in-memory rate limiter
// In production, use Redis or a proper rate limiting service

const rateLimitMap = new Map();

/**
 * Simple rate limiter implementation
 * @param {number} windowMs - Time window in milliseconds
 * @param {number} maxRequests - Maximum requests per window
 * @returns {Function} - Rate limiting middleware
 */
export function createRateLimiter(windowMs = 15 * 60 * 1000, maxRequests = 100) {
    return (req, res, next) => {
        const clientId = req.ip || req.connection.remoteAddress || 'unknown';
        const now = Date.now();
        const windowStart = now - windowMs;

        // Clean up old entries
        for (const [key, data] of rateLimitMap.entries()) {
            if (data.timestamp < windowStart) {
                rateLimitMap.delete(key);
            }
        }

        // Get or create client data
        let clientData = rateLimitMap.get(clientId);
        if (!clientData) {
            clientData = { requests: [], timestamp: now };
            rateLimitMap.set(clientId, clientData);
        }

        // Remove old requests from the window
        clientData.requests = clientData.requests.filter(timestamp => timestamp > windowStart);

        // Check if limit exceeded
        if (clientData.requests.length >= maxRequests) {
            const resetTime = Math.ceil((clientData.requests[0] + windowMs - now) / 1000);
            return res.status(429).json({
                error: 'Too many requests',
                retryAfter: resetTime,
                limit: maxRequests,
                remaining: 0
            });
        }

        // Add current request
        clientData.requests.push(now);
        clientData.timestamp = now;

        // Set rate limit headers
        res.set({
            'X-RateLimit-Limit': maxRequests,
            'X-RateLimit-Remaining': maxRequests - clientData.requests.length,
            'X-RateLimit-Reset': new Date(now + windowMs).toISOString()
        });

        next();
    };
}

/**
 * Cleanup function to prevent memory leaks
 */
export function cleanupRateLimiter() {
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    
    for (const [key, data] of rateLimitMap.entries()) {
        if (now - data.timestamp > oneHour) {
            rateLimitMap.delete(key);
        }
    }
}

// Cleanup every hour
setInterval(cleanupRateLimiter, 60 * 60 * 1000);
