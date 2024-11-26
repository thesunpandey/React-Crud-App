
---

# Role-Based Access Control (RBAC) CRUD Application

This is a web application implementing **Role-Based Access Control (RBAC)**. It allows creating, reading, updating, and deleting user data through a structured API. The application enforces RBAC rules, where:  

- A user can have specific roles (e.g., `user` or `guest` or `admin`).
- **Only one admin can exist at a time**.
- API endpoints are secured to ensure appropriate access based on roles.

The frontend is built with React and Vite, while the backend uses Node.js, Express, and Mongoose with MongoDB.

---

## Features

- **Role-Based Access Control (RBAC)**:
  - CRUD operations for users.
  - Role enforcement ensuring only one admin exists at a time.
  - Secure access to endpoints based on user roles.

- **Frontend**:
  - Built with React and Vite for a fast and interactive user interface.
  - Role-based functionalities dynamically controlled based on API data.
  - Notifications using `react-hot-toast`.

- **Backend**:
  - RESTful API with Express.js.
  - Role management and enforcement with Mongoose.
  - Middleware to verify roles and enforce RBAC policies.
  - Single admin enforcement in the database layer.

- **Database**:
  - MongoDB database with schemas managed by Mongoose.
  - MongoDB Compass for database management.

---

## Prerequisites

- **Node.js** installed on your machine.
- **MongoDB** installed locally or access to a MongoDB cloud instance.
- **MongoDB Compass** for database visualization.
- **npm** or **yarn** for package management.

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the backend (`server`) directory and install dependencies:

   ```bash
   cd server
   npm install
   ```

3. Navigate to the frontend (`client`) directory and install dependencies:

   ```bash
   cd ../client
   npm install
   ```

4. Configure the environment variables:
   - In the `server` directory, create a `.env` file with the following:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     PORT=<backend-port>
     ```
   - Replace `<your-mongodb-connection-string>` with your MongoDB URI (local or cloud).
   - Replace `<backend-port>` with the desired port for the backend server (default: `5000`).

5. **Setup MongoDB Compass**:
   - Open **MongoDB Compass** and connect to your MongoDB instance.
   - Create a `users` collection with the required schema.

---

## Usage

### Run the Backend Server

Navigate to the `server` folder and start the backend:

```bash
cd server
npm start
```

### Run the Frontend Development Server

Navigate to the `client` folder and start the frontend:

```bash
cd ../client
npm run dev
```

### Access the Application

- Frontend: Open your browser and navigate to `http://localhost:5173`.
- Backend: The backend server runs at `http://localhost:<backend-port>` (default: `5000`).

---

## API Endpoints

Here are the available API endpoints:

- **User Management**:
  - `POST /create` - Create a user.
  - `GET /getall` - Get a list of all users.
  - `GET /getone/:id` - Get details of a specific user by their ID.
  - `PUT /update/:id` - Update a user's details by their ID.
  - `DELETE /delete/:id` - Delete a user by their ID.

---

### Role Enforcement

- A new admin cannot be created if an admin already exists.
---

### View the Database in MongoDB Compass

1. Open **MongoDB Compass**.
2. Connect to the MongoDB instance using the connection string configured in `MONGO_URI`.
3. Browse and manage the `users` collection to verify user data and roles.



## Scripts

- **Backend** (`server` folder):
  - `npm start`: Starts the backend server with live reload using `nodemon`.

- **Frontend** (`client` folder):
  - `npm run dev`: Starts the frontend development server.
  - `npm run build`: Builds the frontend for production.
  - `npm run preview`: Previews the production build.

---


