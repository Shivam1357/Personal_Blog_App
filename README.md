# Personal Blog Platform

A fully responsive personal blog platform built with React.js, Node.js, and MySQL. The app is containerized with Docker for ease of deployment and hosted on a Google Cloud VM instance.

## Features

### Frontend
- Developed with React.js
- Displays all blog posts on the homepage
- Includes a post creation form
- Responsive design with a simple navigation menu

### Backend
- Built with Node.js and Express.js
- REST API for blog operations:
  - `GET /api/posts`: Retrieve all posts
  - `POST /api/posts`: Create a new post
  - `GET /api/posts/{id}`: Retrieve a specific post
- Connected to MySQL for persistent data storage

### Docker Integration
- Frontend, backend, and MySQL services are containerized using Docker
- `docker-compose` is used for orchestration to simplify multi-container setups

### Deployment
- Hosted on a Google Cloud VM instance
- Automated using Crontab for scheduled tasks

## Getting Started

### Prerequisites
- Docker and Docker Compose installed
- Access to a Google Cloud VM or any preferred hosting service

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
# Personal Blog Platform

A fully responsive personal blog platform built with React.js, Node.js, and MySQL. The app is containerized with Docker for ease of deployment and hosted on a Google Cloud VM instance.

## Features

### Frontend
- Developed with React.js
- Displays all blog posts on the homepage
- Includes a post creation form
- Responsive design with a simple navigation menu

### Backend
- Built with Node.js and Express.js
- REST API for blog operations:
  - `GET /api/posts`: Retrieve all posts
  - `POST /api/posts`: Create a new post
  - `GET /api/posts/{id}`: Retrieve a specific post
- Connected to MySQL for persistent data storage

### Docker Integration
- Frontend, backend, and MySQL services are containerized using Docker
- `docker-compose` is used for orchestration to simplify multi-container setups

### Deployment
- Hosted on a Google Cloud VM instance
- Automated using Crontab for scheduled tasks

## Getting Started

### Prerequisites
- Docker and Docker Compose installed
- Access to a Google Cloud VM or any preferred hosting service

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
