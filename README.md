fetansystems-taskmanager
=======================

A robust task management backend built with Node.js, Express, and TypeORM, designed to work with a Vue.js frontend. This project provides RESTful APIs for user authentication, user management, and task handling, powered by a MySQL database hosted on Aiven.

Features
--------
- User authentication (signup, login, password reset)
- User profile management
- Task creation, retrieval, and updates
- Secure API endpoints with JWT
- MySQL database integration via Aiven

Prerequisites
-------------
- Node.js (v14.x or later)
- npm or yarn
- Aiven MySQL instance (or local MySQL for development)
- Git

Installation
------------

1. Clone the Repository
git clone https://github.com/adams1864/fetansystems-taskmanager.git
cd fetansystems-taskmanager/taskmanager

2. Install Dependencies

3. Configure Environment Variables
Create a .env file in the taskmanager/ directory with the following:
DB_HOST=task-manager-mysql-adamsvillage326-99ee.c.aivencloud.com
DB_PORT=11600
DB_USER=avnadmin
DB_PASSWORD=AVNS_7eQCsBVYOCgOPT_ExLX
DB_NAME=defaultdb
JWT_SECRET=your-secure-secret-key
PORT=300

- Replace your-secure-secret-key with a strong, unique value.
- Get DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, and DB_NAME from your Aiven MySQL dashboard.

4. Set Up the Database
- Ensure your Aiven MySQL instance is running.
- Test the connection locally:

The server will start on http://localhost:3000 (or the port in .env).

Usage
-----

- API Endpoints:
  - POST /auth/signup: Create a new user
  - POST /auth/login: Login and get a JWT token
  - POST /auth/forgot-password: Send password reset email
  - POST /auth/reset-password: Reset password
  - GET /user: Get user profile (requires JWT)
  - POST /tasks: Create a task (requires JWT)
  - GET /tasks: List tasks (requires JWT)

- Use tools like Postman or curl to test endpoints. Include the JWT token in the Authorization header (e.g., Bearer <token>).

Deployment
----------

### Deploying to Vercel
1. Sign up at vercel.com with your GitHub account.
2. Import this repository.
3. Set the root directory to taskmanager/.
4. Add environment variables in Vercel settings (same as .env).
5. Deploy and access the app at the provided Vercel URL (e.g., https://fetansystems-taskmanager.vercel.app).

### Notes
- Ensure Aiven MySQL firewall allows Vercel's outbound IP (contact Vercel support for the range).
- The free tier on Vercel supports this app, but monitor usage.

Development
-----------
- Run Locally: Use npm start after setup.
- Add Features: Extend routes in routes/ and entities in config/database.
- Testing: Add tests with Jest or similar (not included yet).

Contributing
------------
Feel free to fork this repo, make improvements, and submit pull requests. Issues and suggestions are welcome!

License
-------
This project is licensed under the MIT License - see the LICENSE file for details (add a LICENSE file if needed).

Acknowledgments
---------------
- Built with love by adams1864!
- Thanks to Aiven for the MySQL service and Vercel for deployment.
