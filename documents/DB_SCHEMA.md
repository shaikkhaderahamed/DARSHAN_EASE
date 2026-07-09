# Database Schema

DarshanEase uses MongoDB and Mongoose. Below is a high-level representation of the Collections and their relationships.

## User
Stores all platform users (devotees, organizers, admins).
- `name` (String, required)
- `email` (String, required, unique)
- `password` (String, required)
- `role` (Enum: `USER`, `ORGANIZER`, `ADMIN`, default: `USER`)
- `phone` (String)
- `address` (String)

## Temple
Stores detailed temple profiles.
- `name`, `description`, `city`, `state`, `address` (String)
- `deity`, `category`, `openingTime`, `closingTime`, `dressCode` (String)
- `facilities` (Array of Strings)
- `featuredImage` (String, URL)
- `history` (String)
- `ratings` (Number, avg rating from reviews)
- `reviewsCount` (Number)

## DarshanSlot
Manages daily darshan availability per temple.
- `templeId` (ObjectId, ref: Temple)
- `date` (Date)
- `startTime`, `endTime` (String, HH:MM format)
- `darshanType` (String, e.g., VIP, General)
- `totalCapacity` (Number)
- `availableSeats` (Number)
- `ticketPrice` (Number, 0 for free)
- `status` (Enum: `AVAILABLE`, `FULL`, `CANCELLED`)

## Booking
Manages user bookings and tickets.
- `userId` (ObjectId, ref: User)
- `templeId` (ObjectId, ref: Temple)
- `slotId` (ObjectId, ref: DarshanSlot)
- `noOfPersons` (Number)
- `devoteeDetails` (Array of Objects containing `name`, `age`, `gender`, `idProofType`, `idProofNumber`)
- `totalAmount` (Number)
- `bookingStatus` (Enum: `PENDING`, `CONFIRMED`, `CANCELLED`, `COMPLETED`)
- `ticketNumber` (String, auto-generated unique ID)
- `qrCodeUrl` (String, URL for the generated QR code)

## Review
- `userId` (ObjectId, ref: User)
- `templeId` (ObjectId, ref: Temple)
- `rating` (Number, 1-5)
- `review` (String)

## Donation
- `userId` (ObjectId, ref: User)
- `templeId` (ObjectId, ref: Temple, nullable for general funds)
- `amount` (Number)
- `purpose` (String)
- `transactionId` (String, mock transaction ID)
- `status` (String, e.g., `SUCCESS`)

## Payment
- `bookingId` (ObjectId, ref: Booking)
- `razorpay_order_id`
- `razorpay_payment_id`
- `razorpay_signature`
- `amount` (Number)
- `status` (String)
