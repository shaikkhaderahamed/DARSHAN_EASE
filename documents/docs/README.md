# DarshanEase – Temple Darshan Ticket Booking Platform

## Overview
DarshanEase is a complete web application that enables devotees to book darshan tickets online, view available darshan slots, make donations, and manage their profile. It supports three roles: USER, ORGANIZER, and ADMIN.

## Features
- **Authentication**: JWT, Roles, Password Recovery
- **Temple Module**: Listings, Filters, History, Timings
- **Darshan Slots**: Availability, Pricing, Booking Wizard
- **Payment**: Razorpay (Test Mode) Integration
- **Dashboards**: Admin analytics, Organizer controls, User history
- **Design**: Premium glassmorphism UI with Tailwind & Framer Motion

## Tech Stack
- Frontend: React + Vite, TailwindCSS, Bootstrap, Framer Motion
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- File Upload: Cloudinary + Multer
- Payment Gateway: Razorpay
- Deployment: Vercel (Frontend), Render (Backend)

## Installation Guide
1. Clone the repository
2. Install Server dependencies: `cd server && npm install`
3. Install Client dependencies: `cd client && npm install`
4. Copy `.env.example` to `.env` in `server` and update values.
5. Run server: `cd server && npm run dev`
6. Run client: `cd client && npm run dev`
