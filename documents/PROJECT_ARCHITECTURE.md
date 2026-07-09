# Project Architecture

DarshanEase follows a standard MERN (MongoDB, Express, React, Node.js) architecture.

## 1. System Overview

```
[ Client (React + Vite) ]  <--->  [ REST API (Node + Express) ]  <--->  [ Database (MongoDB) ]
```

## 2. Backend Architecture (MVC Pattern)
The backend is structured using the Model-View-Controller (MVC) pattern.

### Directory Structure
```
server/
 ├── config/       # Database connection & env variables loading
 ├── controllers/  # Business logic for each endpoint
 ├── middleware/   # Custom Express middlewares (Auth, Errors)
 ├── models/       # Mongoose Schemas (Data Layer)
 ├── routes/       # Express router definitions
 ├── services/     # Third-party integrations (Mock Email/SMS, Payments)
 ├── utils/        # Helper functions (JWT generation, formatters)
 └── server.js     # Entry point
```

### Security implementation
- **Helmet:** Sets various HTTP headers to secure the Express app.
- **XSS-Clean:** Sanitizes user input to prevent Cross-Site Scripting.
- **Express-Mongo-Sanitize:** Prevents MongoDB Operator Injection.
- **Express-Rate-Limit:** Prevents DDoS and Brute Force attacks.
- **JWT:** Stateless authentication mechanism.

## 3. Frontend Architecture
The frontend is a Single Page Application (SPA) built with React and Vite.

### Directory Structure
```
client/src/
 ├── api/          # Axios instance & interceptors
 ├── components/   # Reusable UI components (Navbar, Chatbot, Forms)
 ├── context/      # React Context API (Auth Context)
 ├── hooks/        # Custom React Hooks (useDebounce)
 ├── layouts/      # Layout wrappers (AdminLayout, MainLayout)
 ├── pages/        # Route components (Home, TempleDetails, Admin/*)
 ├── index.css     # Tailwind imports and global variables
 └── App.jsx       # Routing definition with React.lazy and Suspense
```

### State Management & Data Fetching
- **TanStack Query (React Query):** Handles all asynchronous state, caching, pagination, and invalidations.
- **React Context API:** Handles synchronous global state (User Auth context).
- **Local State:** `useState` for component-level UI state.
