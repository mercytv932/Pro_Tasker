
# Pro-Tasker

Pro-Tasker is a project management app I built to help me stay organized and keep track of my projects and tasks in one place.

## Live Demo :  https://pro-tasker-frontend-2tg4.onrender.com/login
## Features

- create an account and log in
- Create, view, edit, and delete projects
- Create, view, edit, and delete tasks inside projects
- Protect pages with login
- Only let users manage their own projects and tasks(Authorization)

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

1. A user signs up or logs in.
2. The backend checks the login details and gives a token.
3. The frontend uses that token to open protected pages.
4. The user makes a project.
5. The user adds and manages tasks in that project.
6. The backend checks if the user owns the project before letting them do anything.


### Requirements

### 1. Clone the repository : git clone https://github.com/mercytv932/Pro_Tasker.gitcd Pro_Tasker

### 2. Set up the backend

cd backend
npm install

Create a .env file in the backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3001

Replace the sample values with your own info. Don’t upload your real secret to GitHub.

Start the backend:   node server.js

### 3. Set up the frontend

Open a second terminal from the project folder:

cd frontend
npm install

Create a .env file in the frontend folder:

VITE_API_URL=http://localhost:3001

Start the frontend:

npm run dev

Then open the local URL in your browser. Usually it is http://localhost:5173.

## API Overview

### Authentication

- POST /api/users/register - Make an account
- POST /api/users/login - Log in

### Projects

- GET /api/projects - Get the projects for the logged-in user
- POST /api/projects - Create a project
- GET /api/projects/:id - Get one project
- PUT /api/projects/:id - Update a project
- DELETE /api/projects/:id - Delete a project

### Tasks

- GET /api/tasks/:projectId/tasks - Get tasks in a project
- POST /api/tasks/:projectId/tasks - Create a task
- PUT /api/tasks/:taskId - Update a task
- DELETE /api/tasks/:taskId - Delete a task


## What I Learned

This project helped me learn how to connect a React and Express backend, work with MongoDB, build authentication and permissions, create CRUD features, and deploy a fully functioning full-stack application.

## Future Improvements

1. Project Search and Filtering. Allow users to search for projects by name and filter results.

2. Task Due Dates and Priority Levels. Let users assign due dates and priorities to tasks so they can organize their work and focus on important tasks.

3. User Profile Management. Allow users to view and update their profile information, such as username, email, and password.

4. Improved Form Validation and Error Messages. Add stronger input validation and clear messages to help users understand and correct errors.

5. Delete Confirmation Dialogs. Ask users to confirm before deleting a project or task to prevent accidental deletion.

6. Team Collaboration. Allow users to create teams and invite other users to join. Team members can share projects, manage tasks together, and collaborate instead of each user working only on their own projects.
