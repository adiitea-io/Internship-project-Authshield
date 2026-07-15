# Internship-project-Authshield 
## Introduction 
AuthShield is a secure backend authentication system developed using Node.js, Express.js, and MongoDB. It provides essential user authentication features such as user registration, login using JWT authentication, protected routes, and retrieval of authenticated user information.

## Why AuthShield?
Authentication is one of the most critical components of modern web applications. Every application that stores user information must verify user identity before granting access to protected resources.

AuthShield demonstrates industry-standard authentication practices by implementing:

- Secure password hashing using bcrypt
- JWT-based authentication
- Authentication middleware
- Protected API routes
- Modular backend architecture
- MongoDB integration for persistent user storage

The project serves as a reusable authentication foundation that can be integrated into larger applications.


##  Tech Stack
### Backend
- Node.js
- Express.js
- MongoDB/Mongoose
- JSON Web Token (JWT)
- bcrypt

### API Testing
- Postman

### Development Tools
- Visual Studio Code
- Git
- GitHub

## Project Structure
The project follows a layered architecture to separate routing, business logic, middleware, and database operations, making the code modular, maintainable, and scalable.

AuthShield/
│
├── src/
│   ├── config/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── user.controller.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── users.routes.js
│   │   └── routes.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   └── user.service.js
│   │
│   ├── utils/
│   ├── app.js
│   └── index.js
│
├── .env
├── .env.example
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

##  Prerequisites

Before running the application, ensure the following software and services are installed and configured on your system:

- **Node.js** (v18 or later recommended)
- **npm** (comes bundled with Node.js)
- **MongoDB Atlas** account or a local MongoDB instance
- **Git** (for cloning the repository)
- **Postman** (for testing API endpoints)
- **Visual Studio Code** (recommended IDE)


##  Dependencies

The project uses the following packages:
-----------------------------------------------------------------------------------------------------------------
| Package          | Version |                             Purpose                                              |
|------------------|:-------:|----------------------------------------------------------------------------------|
| **express**      | `^5.2.1`| Web framework used to build the REST API and handle routing.                     |
| **mongoose**     | `^9.7.4`| Object Data Modeling (ODM) library for interacting with MongoDB.                 |
| **mongodb**      | `^7.4.0`| Official MongoDB Node.js driver.                                                 |
| **bcrypt**       | `^6.0.0`| Securely hashes user passwords before storing them in the database.              |
| **jsonwebtoken** | `^9.0.3`| Generates and verifies JSON Web Tokens (JWT) for authentication.                 |
| **dotenv**       |`^17.4.2`| Loads environment variables from the `.env` file.                                |
| **cors**         | `^2.8.5`| Enables Cross-Origin Resource Sharing (CORS) for frontend-backend communication. |
| **helmet**       | `^8.2.0`| Adds security-related HTTP headers to help protect the application.              |


### Development Dependencies
---------------------------------------------------------------------------------------------------------------
| Package     | Version   |                                 Purpose                                            |
|-------------|:---------:|------------------------------------------------------------------------------------|
| **nodemon** | `^3.1.14` | Automatically restarts the server whenever source code changes during development. |



## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd AuthShield
```

### 2. Install project dependencies

```bash
npm install
```

##  Environment Variables

Create a `.env` file in the project root and configure the following variables:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

##  Running the Application

Start the development server using:

```bash
npm run dev
```

If configured successfully, the server will start on:

```text
http://localhost:3000
```

To verify the server is running, open the above URL in your browser or send a request using Postman.
  
