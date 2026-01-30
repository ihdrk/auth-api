# 🔐 Auth API

A secure RESTful User Authentication API built with Node.js and Express.  
Implements user registration, login, password hashing, and JWT-based authentication.

This project demonstrates real-world backend authentication concepts and best practices.

---

## 🚀 Features

- User registration
- User login
- Secure password hashing using bcrypt
- JWT-based authentication
- Protected routes using middleware
- Persistent storage using JSON files
- Clean and modular project structure

---

## 🛠 Tech Stack

- Node.js
- Express
- bcrypt
- JSON Web Tokens (JWT)

---

## 📂 Project Structure

```
auth-api/
├── data/
│   └── users.json
├── routes/
│   └── auth.js
├── middleware/
│   └── authMiddleware.js
├── utils/
│   └── fileHelper.js
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

```bash
npm install
```

---

## ▶️ Run the Server

```bash
node server.js
```

Server runs at:
```
http://localhost:3000
```

---

## 🔐 API Endpoints

### Register a User

```http
POST /register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

---

### Login

```http
POST /login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "token": "JWT_TOKEN"
}
```

---

### Protected Route

```http
GET /profile
Authorization: Bearer <JWT_TOKEN>
```

---

## 🧠 What This Project Demonstrates

- Understanding of authentication workflows
- Secure password handling
- Token-based authentication using JWT
- Middleware usage in Express
- Backend API design best practices

---

## 📌 Notes

- Passwords are never stored in plain text
- JWT is required to access protected routes
- Easily extendable to a database (MongoDB, PostgreSQL)
