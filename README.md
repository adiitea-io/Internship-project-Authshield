# AuthShield 🛡️

AuthShield is a full-stack web application for secure user authentication and employee management. Users can register, log in, change their password, delete their account, and reset a forgotten password. The employee module supports full CRUD with document uploads. It is built with a Node.js/Express REST API and an Angular front end, and it uses MongoDB with JWT-based authentication.

## Tech Stack

| Layer    | Technology                                   |
|----------|----------------------------------------------|
| Frontend | Angular 22, PrimeNG, RxJS, TypeScript        |
| Backend  | Node.js, Express 5                           |
| Database | MongoDB, Mongoose 9 (two connections)        |
| Security | bcrypt, jsonwebtoken, crypto, cors           |
| Uploads  | Multer                                       |

## Dependencies

**Backend**

| Package      | Version  |
|--------------|----------|
| express      | ^5.2.1   |
| mongoose     | ^9.7.4   | 
| mongodb      | ^7.4.0   | 
| bcrypt       | ^6.0.0   | 
| jsonwebtoken | ^9.0.3   | 
| cors         | ^2.8.6   | 
| helmet       | ^8.2.0   | 
| dotenv       | ^17.4.2  | 
| multer       | ^2.4.0   | 
| nodemon      | ^3.1.14  | 

**Frontend**

| Package                   | Version  | 
|---------------------------|----------|
| @angular/core             | ^22.0.0  |
| @angular/common           | ^22.0.0  | 
| @angular/compiler         | ^22.0.0  | 
| @angular/forms            | ^22.0.0  | 
| @angular/platform-browser | ^22.0.0  | 
| @angular/router           | ^22.0.0  | 
| @angular/cdk              | ^22.0.6  | 
| primeng                   | ^22.0.0  | 
| @primeng/themes           | ^21.0.4  | 
| primeicons                | ^8.0.0   | 
| rxjs                      | ~7.8.0   | 
| tslib                     | ^2.3.0   | 
| @angular/cli              | ^22.0.8  | 
| @angular/build            | ^22.0.8  | 
| @angular/compiler-cli     | ^22.0.0  | 
| typescript                | ~6.0.2   | 
| vitest                    | ^4.0.8   | 
| jsdom                     | ^28.0.0  | 
| prettier                  | ^3.8.1   | 

## Project Structure

```text
Internship-project-Authshield/
├── backend/
│   ├── .env.example
│   ├── package.json
│   ├── uploads/employees/      # uploaded employee documents
│   └── src/
│       ├── index.js            # entry point
│       ├── app.js
│       ├── config/             # database connections
│       ├── controllers/
│       ├── middleware/         # auth + file upload
│       ├── models/
│       ├── routes/
│       └── services/
└── frontend/
    ├── angular.json
    ├── package.json
    └── src/
        └── app/
            ├── pages/          # login, register, forgot-password, dashboard, add-employee
            ├── services/       # auth, employee
            ├── app.routes.ts
            └── app.config.ts
```

## Setup & Run

**Prerequisites:** Node.js 18+, npm, and a MongoDB instance (local or Atlas).

**1. Clone the repository**

```bash
git clone https://github.com/adiitea-io/Internship-project-Authshield.git
cd Internship-project-Authshield
```

**2. Backend**

```bash
cd backend
npm install
cp .env.example .env
```

Fill in `.env`:

```env
PORT=3000
MONGO_URI=<your user database URI>
EMPLOYEE_MONGO_URI=<your employee database URI>
JWT_SECRET=<a long random secret>
```

```bash
npm start
```

The API runs at `http://localhost:3000`.

**3. Frontend** (in a new terminal)

```bash
cd frontend
npm install
npm start
```

The app runs at `http://localhost:4200`.
