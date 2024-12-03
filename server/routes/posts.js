const express = require('express');
const db = require('../config/db');
const router = express.Router();

db.query(
    `CREATE TABLE IF NOT EXISTS posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    (err) => {
        if (err) {
            console.error('Error creating posts table:', err);
        } else {
            //console.log('Posts table is ready.');
        }
    }
);

// Get all posts
router.get('/', (req, res) => {
	db.query('SELECT * FROM posts', (err, results) => {
		if (err) return res.status(500).json({ error: err.message });
		res.json(results);
	});
});

// Get a single post
router.get('/:id', (req, res) => {
	const { id } = req.params;
	db.query('SELECT * FROM posts WHERE id = ?', [id], (err, results) => {
		if (err) return res.status(500).json({ error: err.message });
		if (results.length === 0) return res.status(404).json({ error: 'Post not found' });
		res.json(results[0]);
	});
});

// Create a new post
router.post('/', (req, res) => {
  	const { title, content } = req.body;
    // Validate input
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    const query = 'INSERT INTO posts (title, content) VALUES (?, ?)';
    db.query(query, [title, content], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Post created successfully', postId: results.insertId });
    });
});

module.exports = router;