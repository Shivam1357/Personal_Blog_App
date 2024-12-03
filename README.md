# Personal Blog Platform

This is a simple personal blog platform created with Node.js (backend) and React.js (frontend), connected via Nginx, and hosted on a Google Cloud VM instance. The database used is MySQL.

---

## Features

### Frontend
- **Homepage:** Displays all blog posts.
- **Create Post Form:** A simple form to create a new blog post.
- **Responsive Design:** Optimized for different screen sizes.
- **Navigation Menu:** Easy navigation across pages.

### Backend
- RESTful API with the following endpoints:
  - `GET /api/posts`: Fetch all blog posts.
  - `POST /api/posts`: Create a new blog post.
  - `GET /api/posts/{id}`: Fetch a single post by ID.
- **Node.js and Express:** Backend services built using Express.js.
- **MySQL Database:** Used for storing blog posts.

### Deployment
- **Google Cloud VM Instance:** Application hosted on a virtual machine.
- **Nginx:** Acts as a reverse proxy to connect the frontend and backend.
- **MySQL Local Server:** Stores blog data.

---

## Technologies Used

### Frontend
- React.js
- HTML5, CSS3, JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Deployment Tools
- Google Cloud VM Instance
- Nginx

---

## Installation and Setup Instructions

### Prerequisites
- Node.js (v14+)
- MySQL
- Nginx
- Google Cloud account

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Shivam1357/Personal_Blog_App