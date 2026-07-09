# DarshanEase - Premium Temple Darshan Booking Platform

DarshanEase is a premium, enterprise-grade, full-stack MERN application that provides a seamless digital experience for devotees to discover temples, book darshan slots, leave reviews, make donations, and download QR-code enabled tickets.

## Features

### For Devotees:
- **Discover Temples:** View temples with detailed historical information, timings, and high-quality images.
- **Darshan Booking:** Book general or VIP darshan slots.
- **Mock Payment Gateway:** Fully simulated checkout flow.
- **PDF Tickets:** Download booking confirmation tickets with embedded QR codes.
- **Reviews & Ratings:** Leave reviews for visited temples.
- **Donations:** Securely donate to temple funds.
- **AI Chatbot:** An integrated spiritual assistant for queries.

### For Administrators:
- **Dashboard:** View overall metrics, total revenue, and booking trends (via Recharts).
- **Temple Management:** Complete CMS to add, edit, or delete temples and their facilities.
- **Slot Management:** Define and manage daily darshan slots and capacities.
- **Booking & Review Moderation:** View user bookings, handle cancellations, and moderate reviews.
- **User Management:** Change user roles (User, Organizer, Admin) or ban malicious users.
- **Data Export:** Export bookings and donations to PDF.

## Tech Stack

**Frontend:**
- React (Vite) with React Router DOM
- Tailwind CSS & Framer Motion for animations
- TanStack Query (React Query) for state & cache management
- Axios for API requests
- Recharts for data visualization
- jsPDF for ticket generation

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication
- Security: Helmet, Express-Rate-Limit, Mongo-Sanitize, XSS-Clean

## Quick Start

See [INSTALLATION.md](./INSTALLATION.md) for detailed setup instructions.

## Documentation Reference
- [Architecture Overview](./PROJECT_ARCHITECTURE.md)
- [Database Schema](./DB_SCHEMA.md)
- [API Documentation](./API_DOCS.md)
- [User Guide](./USER_GUIDE.md)
- [Admin Guide](./ADMIN_GUIDE.md)
- [Deployment Guide](./DEPLOYMENT_GUIDE.md)
