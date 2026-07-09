# API Documentation

Base URL: `/api`

All endpoints requiring authentication must include a `Bearer <token>` in the Authorization header.

## Auth (`/api/auth`)
- `POST /register`: Register a new user
- `POST /login`: Authenticate and receive JWT
- `GET /profile`: Get logged-in user's profile (Auth required)

## Temples (`/api/temples`)
- `GET /`: Get all temples (supports `?search=X&page=Y&limit=Z`)
- `GET /:id`: Get single temple by ID
- `POST /`: Create a new temple (Admin required)
- `PUT /:id`: Update a temple (Admin required)
- `DELETE /:id`: Delete a temple (Admin required)

## Slots (`/api/slots`)
- `GET /`: Get all slots (Admin required)
- `GET /temple/:templeId`: Get slots for a specific temple
- `POST /`: Create a slot (Admin required)
- `PUT /:id`: Update a slot (Admin required)
- `DELETE /:id`: Delete a slot (Admin required)

## Bookings (`/api/bookings`)
- `POST /`: Create a new booking. (Returns an orderId for payment verification)
- `POST /verify`: Verify a mock payment and confirm the booking
- `GET /mybookings`: Get bookings for the logged-in user
- `GET /`: Get all bookings (Admin required)
- `PUT /:id/cancel`: Cancel a booking (Restores slot capacity)

## Reviews (`/api/reviews`)
- `GET /`: Get all reviews (Admin required)
- `GET /temple/:templeId`: Get reviews for a temple
- `POST /`: Add a review (User must have a completed/confirmed booking)
- `DELETE /:id`: Delete a review

## Admin (`/api/admin`)
- `GET /stats`: Get dashboard metrics (Revenue, Users, Bookings count)
- `GET /users`: Get all users
- `PUT /users/:id/role`: Update user role
- `DELETE /users/:id`: Delete a user
- `GET /donations`: Get all donations
