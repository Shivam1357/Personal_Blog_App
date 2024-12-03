require('dotenv').config({ path: '/home/shivamjaiswal9628/blog-app/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRoutes = require('./routes/posts');
const morgan = require('morgan');

const app = express();
const PORT = 8080;

// Middleware
app.use(morgan('combined')); // Logging middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/posts', postsRoutes); // Matches Nginx configuration for `/api/`

// Fallback route for unmatched API routes
app.use('/api/*', (req, res) => {
    res.status(404).json({ error: 'API route not found' });
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});