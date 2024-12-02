require('dotenv').config({ path: '/home/shivamjaiswal9628/blog-app/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRoutes = require('./routes/posts');
const morgan = require('morgan');
// Use morgan to log requests

const app = express();
app.use(morgan('combined'));
const PORT = 8000;


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/posts', postsRoutes);

// Start Server
app.listen(PORT, '0.0.0.0', () => {});