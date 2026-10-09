# Pro-Tasker

Pro-Tasker is a simple project management app for organizing projects and tasks in one place.

## Live Demo

[Open Pro-Tasker](https://pro-tasker-frontend-2tg4.onrender.com)

## Features

- Create an account and log in
- Create, view, edit, and delete projects
- Create, view, edit, and delete tasks
- Protect routes with authentication
- Restrict users to managing only their own projects and tasks
- Responsive user interface

## Tech Stack

### Frontend

- React
- TypeScript
- CSS

### Backend

- Node.js
- Express.js
- MongoDB

### Deployment

- Render
- MongoDB Atlas

## How It Works

1. A user registers or logs in.
2. The backend verifies the user's credentials and returns a token.
3. The frontend sends that token to protected API routes.
4. The user creates a project.
5. The user adds and manages tasks within the project.
6. The backend checks ownership before allowing protected operations.

## Run Locally

### Requirements

- Node.js and npm
- MongoDB
- Git

### 1. Clone the repository

git clone https://github.com/mercytv932/Pro_Tasker.git
cd Pro_Tasker

### 2. Set up the backend

cd backend
npm install

Create a .env file in the backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3001

Replace the sample values with your own credentials. Never commit real secrets to GitHub.

Start the backend:

npm start

If the project does not include a start script, use:

node server.js

### 3. Set up the frontend

Open a second terminal from the repository root:

cd frontend
npm install

Create a .env file in the frontend folder:

VITE_API_URL=http://localhost:3001

Start the frontend:

npm run dev

Open the local URL shown in the terminal, usually http://localhost:5173.

## API Overview

### Authentication

- POST /api/users/register - Create an account
- POST /api/users/login - Log in

### Projects

- GET /api/projects - Get the logged-in user's projects
- POST /api/projects - Create a project
- GET /api/projects/:id - Get one project
- PUT /api/projects/:id - Update a project
- DELETE /api/projects/:id - Delete a project

### Tasks

- GET /api/tasks/:projectId/tasks - Get tasks in a project
- POST /api/tasks/:projectId/tasks - Create a task
- PUT /api/tasks/:taskId - Update a task
- DELETE /api/tasks/:taskId - Delete a task

Protected routes require a valid JWT in the Authorization header.

## What I Learned

Building Pro-Tasker helped me learn how to connect a React frontend to an Express backend, work with MongoDB, implement authentication and authorization, create CRUD functionality, and deploy a full-stack application.

## Future Improvements

- Add a professional header and footer for a more polished app experience
- Add a light and dark mode toggle for better usability
- Add task due dates and priorities to improve planning and organization
- Add project search and filtering for easier navigation
- Add team members and collaboration features for shared project management
- Add invitations and role-based access for teams
- Add more advanced task filtering, sorting, and reporting options
