# Installation Guide

Follow these steps to set up DarshanEase locally.

## Prerequisites
- Node.js (v18+ recommended)
- MongoDB (running locally or MongoDB Atlas)

## 1. Clone & Setup Directory
```bash
git clone <repository_url>
cd DarshanEase
```

## 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/darshanease
   JWT_SECRET=super_secret_jwt_key_change_in_production
   NODE_ENV=development
   ```
4. Run the seed script to populate the database:
   ```bash
   npm run data:import
   ```
5. Start the backend development server:
   ```bash
   npm run dev
   ```

## 3. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 4. Admin Access
The seed script creates a default Admin user:
- **Email:** admin@darshanease.com
- **Password:** 123456

Log in with these credentials to access the CMS Dashboard.
