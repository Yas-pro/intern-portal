# Intern Portal – Full Stack Project

A simple intern dashboard built with Node.js, Express, MongoDB, and HTML/CSS/JS.

## 📁 Folder Structure

```
intern-portal/
├── backend/
│   ├── server.js
│   ├── .env
│   ├── models/
│   └── routes/
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

## 🚀 Setup Instructions

### 1. Unzip and open the project

```bash
cd intern-portal
```

---

## 🔙 Backend Setup

### Step 1: Install dependencies

```bash
cd backend
npm install
```

### Step 2: Configure environment

Edit `.env` file:
```
MONGO_URI=mongodb://127.0.0.1:27017/intern_portal
PORT=5000
```

Make sure MongoDB is running locally:
```bash
mongod
```

### Step 3: Start the server

```bash
node server.js
```

---

## 🎨 Frontend Setup

Just open the file:

```bash
cd frontend
open index.html   # Or double-click to open in browser
```

---

## ✅ Features

- View intern tasks
- Admin can assign new tasks
- Update task status (Pending/Completed)

---