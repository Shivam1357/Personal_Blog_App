# Personal Blog Platform  

A fully responsive personal blog platform built with React.js, Node.js, and MySQL, integrated using Nginx. The app is containerized with Docker for ease of deployment and hosted on a Google Cloud VM instance.  

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
- `docker compose` for seamless orchestration  

### Nginx Configuration  
- Serves both frontend and backend  
- Acts as a reverse proxy for API requests  

### Deployment  
- Hosted on a Google Cloud VM instance

## Getting Started  

### Prerequisites  
- Docker and Docker Compose installed  
- Access to a Google Cloud VM or any preferred hosting service  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/Shivam1357/Personal_Blog_App/tree/docker_code
   cd Personal_Blog_App
