# Deployment Guide

This guide covers deploying the DarshanEase backend on **Render** and the frontend on **Vercel**.

## 1. Backend Deployment (Render)
Render provides free and affordable hosting for Node.js apps.

1. Create an account on [Render](https://render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository.
4. Set the following configuration:
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add the following Environment Variables (`.env`):
   - `PORT=5000`
   - `MONGODB_URI=<Your MongoDB Atlas Connection String>`
   - `JWT_SECRET=<Your Secure Secret>`
   - `NODE_ENV=production`
6. Click **Create Web Service**.
7. Once deployed, copy the backend URL (e.g., `https://darshanease-api.onrender.com`).

## 2. Frontend Deployment (Vercel)
Vercel is the best platform for Vite React apps.

1. Create an account on [Vercel](https://vercel.com/).
2. Click **Add New** -> **Project**.
3. Import your GitHub repository.
4. Ensure the **Framework Preset** is set to `Vite`.
5. Under **Environment Variables**, add:
   - `VITE_API_URL=<Your Backend Render URL>/api` (e.g., `https://darshanease-api.onrender.com/api`)
6. Click **Deploy**.

## 3. Post-Deployment Steps
1. Test Authentication flows (Register, Login).
2. Test Darshan Booking flow (Ensure mock payment works).
3. Access the Admin Panel and verify Dashboard Stats.
4. Ensure MongoDB Atlas Network Access is set to `0.0.0.0/0` (Allow access from anywhere) so Render can connect to it.
