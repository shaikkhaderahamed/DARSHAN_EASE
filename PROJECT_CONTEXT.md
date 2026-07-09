# DarshanEase Project Context

## 1. Project Structure

`	ext
├── ADMIN_GUIDE.md
├── API_DOCS.md
├── client
│   ├── dist
│   │   ├── assets
│   │   │   ├── AdminBookings-3_y6Gb43.js
│   │   │   ├── AdminDashboard-CMgVSIQC.js
│   │   │   ├── AdminDonations-B_JZJLuY.js
│   │   │   ├── AdminLayout-BzruldyL.js
│   │   │   ├── AdminReviews-Dn0BIcV3.js
│   │   │   ├── AdminSettings-BhiTfjEI.js
│   │   │   ├── AdminSlots-PR_TqDVT.js
│   │   │   ├── AdminTemples-BHSxLdXn.js
│   │   │   ├── AdminUsers-BdZo6roO.js
│   │   │   ├── AuthCard-z4iRDZOQ.js
│   │   │   ├── Badge-DO0GmGAl.js
│   │   │   ├── bookingService-t-B28S1p.js
│   │   │   ├── building-2-BUWPhF54.js
│   │   │   ├── calendar-B1zYzuys.js
│   │   │   ├── CartesianChart-CYgEFcT0.js
│   │   │   ├── clock-D_Ffxya0.js
│   │   │   ├── Dashboard-CljNcgj3.js
│   │   │   ├── download-CMFbUN9C.js
│   │   │   ├── EmptyState-ChdviGDY.js
│   │   │   ├── file-text-CfsW3X-L.js
│   │   │   ├── heart-BWohcbU-.js
│   │   │   ├── Home-BQ8tP4oU.js
│   │   │   ├── html2canvas-CNjex5NH.js
│   │   │   ├── index-DR9Gem1L.js
│   │   │   ├── index-qzB45J_9.css
│   │   │   ├── index.es-B_AQqUHt.js
│   │   │   ├── Input-BJFJ2-9Z.js
│   │   │   ├── jspdf.plugin.autotable-IR4TAdRe.js
│   │   │   ├── jsx-runtime-CaR_m4Xc.js
│   │   │   ├── Loader-BDzIWiyT.js
│   │   │   ├── Login-CzZJC_Qq.js
│   │   │   ├── map-pin-BnHw6KxW.js
│   │   │   ├── Page-TIxO0MUq.js
│   │   │   ├── PageHeader-JqA-AJgm.js
│   │   │   ├── plus-DtxwRoLw.js
│   │   │   ├── purify.es-ZPrpXrUc.js
│   │   │   ├── Register-lQ36E_xR.js
│   │   │   ├── rolldown-runtime-CNC7AqOf.js
│   │   │   ├── save-De4LwEHz.js
│   │   │   ├── search-CwfaJKgA.js
│   │   │   ├── settings-_4lHgPuN.js
│   │   │   ├── shield-DnVE8SzF.js
│   │   │   ├── star-BePrT7CK.js
│   │   │   ├── Table-DJEqegVV.js
│   │   │   ├── temple-GZgKKvRu.js
│   │   │   ├── TempleDetails-8i5wbZVt.js
│   │   │   ├── TempleList-DuAq0NDl.js
│   │   │   ├── ticket-Om4BXWwR.js
│   │   │   ├── trash-2-DgF7J-Gi.js
│   │   │   ├── useAdmin-tOChr48U.js
│   │   │   ├── useBookings-a7PytA3Q.js
│   │   │   ├── users-CliuCUv6.js
│   │   │   └── useSlots-1cLX1QH8.js
│   │   ├── favicon.svg
│   │   ├── icons.svg
│   │   └── index.html
│   ├── fix.cjs
│   ├── fix_ui.cjs
│   ├── index.html
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── README.md
│   ├── src
│   │   ├── api
│   │   │   └── axiosInstance.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── hero.png
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   ├── components
│   │   │   ├── admin
│   │   │   │   ├── AdminChart.jsx
│   │   │   │   └── AdminStatCard.jsx
│   │   │   ├── Chatbot.jsx
│   │   │   ├── dashboard
│   │   │   │   ├── BookingCard.jsx
│   │   │   │   └── DashboardHeader.jsx
│   │   │   ├── home
│   │   │   │   ├── FeaturedTemples.jsx
│   │   │   │   ├── HomeHero.jsx
│   │   │   │   ├── TempleCard.jsx
│   │   │   │   └── WhyChooseUs.jsx
│   │   │   ├── layout
│   │   │   │   ├── AuthCard.jsx
│   │   │   │   ├── AuthLayout.jsx
│   │   │   │   ├── ContentLayout.jsx
│   │   │   │   ├── MainContent.jsx
│   │   │   │   ├── Page.jsx
│   │   │   │   ├── Section.jsx
│   │   │   │   ├── SectionHeader.jsx
│   │   │   │   └── Sidebar.jsx
│   │   │   ├── MockPaymentGateway.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── temple
│   │   │   │   ├── SearchBar.jsx
│   │   │   │   ├── TempleCard.jsx
│   │   │   │   ├── TempleHero.jsx
│   │   │   │   └── TempleInfo.jsx
│   │   │   └── ui
│   │   │       ├── Badge.jsx
│   │   │       ├── Button.jsx
│   │   │       ├── Card.jsx
│   │   │       ├── DataState.jsx
│   │   │       ├── EmptyState.jsx
│   │   │       ├── Input.jsx
│   │   │       ├── Loader.jsx
│   │   │       ├── PageHeader.jsx
│   │   │       └── Table.jsx
│   │   ├── config
│   │   ├── constants
│   │   ├── context
│   │   │   └── AuthContext.jsx
│   │   ├── features
│   │   │   ├── auth
│   │   │   │   └── components
│   │   │   │       ├── LoginForm.jsx
│   │   │   │       └── RegisterForm.jsx
│   │   │   ├── booking
│   │   │   │   ├── api
│   │   │   │   ├── components
│   │   │   │   │   ├── BookingWizard.jsx
│   │   │   │   │   ├── DevoteeCard.jsx
│   │   │   │   │   ├── SlotCard.jsx
│   │   │   │   │   ├── StepDevotees.jsx
│   │   │   │   │   ├── StepHeader.jsx
│   │   │   │   │   ├── StepReview.jsx
│   │   │   │   │   ├── StepSlots.jsx
│   │   │   │   │   └── StepSuccess.jsx
│   │   │   │   ├── hooks
│   │   │   │   │   ├── useBooking.js
│   │   │   │   │   ├── useBookingWizard.js
│   │   │   │   │   └── useDevotees.js
│   │   │   │   ├── index.js
│   │   │   │   └── utils
│   │   │   └── temple
│   │   │       ├── api
│   │   │       │   └── templeApi.js
│   │   │       ├── components
│   │   │       │   └── TempleResults.jsx
│   │   │       ├── hooks
│   │   │       │   └── useTemple.js
│   │   │       └── index.js
│   │   ├── hooks
│   │   │   ├── useAdmin.js
│   │   │   ├── useBookings.js
│   │   │   ├── useDebounce.js
│   │   │   ├── useDonations.js
│   │   │   ├── useReviews.js
│   │   │   └── useSlots.js
│   │   ├── icons.js
│   │   ├── index.css
│   │   ├── layouts
│   │   │   └── AdminLayout.jsx
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── admin
│   │   │   │   ├── AdminBookings.jsx
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── AdminDonations.jsx
│   │   │   │   ├── AdminReviews.jsx
│   │   │   │   ├── AdminSettings.jsx
│   │   │   │   ├── AdminSlots.jsx
│   │   │   │   ├── AdminTempleForm.jsx
│   │   │   │   ├── AdminTemples.jsx
│   │   │   │   └── AdminUsers.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── TempleDetails.jsx
│   │   │   └── TempleList.jsx
│   │   ├── services
│   │   │   ├── adminService.js
│   │   │   ├── bookingService.js
│   │   │   ├── donationService.js
│   │   │   ├── reviewService.js
│   │   │   └── slotService.js
│   │   └── utils
│   │       └── generatePDF.js
│   ├── vercel.json
│   └── vite.config.js
├── DB_SCHEMA.md
├── DEPLOYMENT_GUIDE.md
├── DEPLOYMENT_READINESS_REPORT.md
├── docs
│   ├── Architecture.md
│   ├── ER_Diagram.md
│   └── README.md
├── INSTALLATION.md
├── PROJECT_ARCHITECTURE.md
├── README.md
├── render.yaml
├── server
│   ├── config
│   │   ├── cloudinary.js
│   │   └── db.js
│   ├── controllers
│   │   ├── adminController.js
│   │   ├── authController.js
│   │   ├── bookingController.js
│   │   ├── chatController.js
│   │   ├── reviewController.js
│   │   ├── slotController.js
│   │   └── templeController.js
│   ├── data
│   │   └── temples.json
│   ├── dropDb.js
│   ├── generateTemples.js
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models
│   │   ├── Booking.js
│   │   ├── ChatHistory.js
│   │   ├── DarshanSlot.js
│   │   ├── Donation.js
│   │   ├── Notification.js
│   │   ├── Payment.js
│   │   ├── Review.js
│   │   ├── Temple.js
│   │   └── User.js
│   ├── package-lock.json
│   ├── package.json
│   ├── routes
│   │   ├── adminRoutes.js
│   │   ├── authRoutes.js
│   │   ├── bookingRoutes.js
│   │   ├── chatRoutes.js
│   │   ├── reviewRoutes.js
│   │   ├── slotRoutes.js
│   │   ├── templeRoutes.js
│   │   └── uploadRoutes.js
│   ├── seeder.js
│   ├── server.js
│   ├── services
│   │   └── NotificationService.js
│   ├── utils
│   │   └── generateToken.js
│   └── validators
│       └── authValidators.js
└── USER_GUIDE.md
`

### client/package.json
`json
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.4.0",
    "@tailwindcss/postcss": "^4.3.2",
    "@tanstack/react-query": "^5.101.2",
    "autoprefixer": "^10.5.2",
    "axios": "^1.18.1",
    "bootstrap": "^5.3.8",
    "date-fns": "^4.4.0",
    "framer-motion": "^12.42.2",
    "jspdf": "^4.2.1",
    "jspdf-autotable": "^5.0.8",
    "lucide-react": "^1.23.0",
    "postcss": "^8.5.16",
    "qrcode.react": "^4.2.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-hook-form": "^7.81.0",
    "react-icons": "^5.7.0",
    "react-markdown": "^10.1.0",
    "react-router-dom": "^7.18.1",
    "react-toastify": "^11.1.0",
    "recharts": "^3.9.2",
    "remark-gfm": "^4.0.1",
    "tailwindcss": "^4.3.2",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.3",
    "oxlint": "^1.71.0",
    "vite": "^8.1.1"
  }
}

`

### server/package.json
`json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "@google/genai": "^2.10.0",
    "bcryptjs": "^3.0.3",
    "cloudinary": "^2.10.0",
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "express-mongo-sanitize": "^2.2.0",
    "express-rate-limit": "^8.5.2",
    "express-validator": "^7.3.2",
    "helmet": "^8.2.0",
    "jsonwebtoken": "^9.0.3",
    "mongodb-memory-server": "^11.2.0",
    "mongoose": "^9.7.4",
    "morgan": "^1.11.0",
    "multer": "^2.2.0",
    "multer-storage-cloudinary": "^4.0.0",
    "qrcode": "^1.5.4",
    "razorpay": "^2.9.6",
    "xss-clean": "^0.1.4"
  }
}

`

## 3. Backend Code

### server\config\cloudinary.js
`js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'mock_cloud',
  api_key: process.env.CLOUDINARY_API_KEY || 'mock_api_key',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'mock_api_secret',
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'darshanease',
    allowedFormats: ['jpeg', 'png', 'jpg'],
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };

`

### server\config\db.js
`js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;
    
    if (!uri || uri.includes('your_mongodb_atlas_connection_string')) {
      console.log('Using in-memory MongoDB for local testing...');
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongoServer = await MongoMemoryServer.create();
      uri = mongoServer.getUri();
      process.env.MONGO_URI = uri; // Set it so seeder logic could use it if needed
    }

    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Automatically seed data if using local db and no users exist
    if (uri.includes('127.0.0.1') || uri.includes('localhost')) {
       const User = require('../models/User');
       const count = await User.countDocuments();
       if (count === 0) {
         console.log('Seeding in-memory database with initial data...');
         require('../seeder'); // This will trigger the seeder since it runs immediately when required
       }
    }

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;


`

### server\controllers\adminController.js
`js
const Temple = require('../models/Temple');
const DarshanSlot = require('../models/DarshanSlot');
const Booking = require('../models/Booking');
const User = require('../models/User');
const Payment = require('../models/Payment');

// @desc    Get Admin Dashboard Stats
// @route   GET /api/admin/stats
// @access  Private/Admin
const getDashboardStats = async (req, res, next) => {
  try {
    const totalTemples = await Temple.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalBookings = await Booking.countDocuments();
    
    // Calculate total revenue from SUCCESS payments
    const payments = await Payment.aggregate([
      { $match: { status: 'SUCCESS' } },
      { $group: { _id: null, totalRevenue: { $sum: '$amount' } } }
    ]);
    
    const totalRevenue = payments.length > 0 ? payments[0].totalRevenue : 0;

    // Recent Bookings
    const recentBookings = await Booking.find()
      .populate('templeId', 'name')
      .populate('userId', 'name email')
      .sort('-createdAt')
      .limit(5);

    // Bookings trend over last 7 days
    const last7Days = new Date();
    last7Days.setDate(last7Days.getDate() - 7);
    
    const bookingsTrend = await Booking.aggregate([
      { $match: { createdAt: { $gte: last7Days } } },
      { 
        $group: { 
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, 
          count: { $sum: 1 } 
        } 
      },
      { $sort: { _id: 1 } }
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalTemples,
        totalUsers,
        totalBookings,
        totalRevenue,
        recentBookings,
        bookingsTrend
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password').sort('-createdAt');
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    next(error);
  }
};

// @desc    Update user role
// @route   PUT /api/admin/users/:id/role
// @access  Private/Admin
const updateUserRole = async (req, res, next) => {
  try {
    const { role } = req.body;
    const user = await User.findById(req.params.id);
    
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }
    
    user.role = role;
    await user.save();
    
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }
    
    await user.deleteOne();
    
    res.status(200).json({ success: true, message: 'User deleted' });
  } catch (error) {
    next(error);
  }
};

const Donation = require('../models/Donation');

// @desc    Get all donations
// @route   GET /api/admin/donations
// @access  Private/Admin
const getAllDonations = async (req, res, next) => {
  try {
    const donations = await Donation.find()
      .populate('userId', 'name email')
      .populate('templeId', 'name')
      .sort('-createdAt');
      
    res.status(200).json({ success: true, count: donations.length, data: donations });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDashboardStats,
  getAllUsers,
  updateUserRole,
  deleteUser,
  getAllDonations
};

`

### server\controllers\authController.js
`js
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role, phone, address } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      const error = new Error('User already exists');
      error.statusCode = 400;
      return next(error);
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
      phone,
      address
    });

    res.status(201).json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      }
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.matchPassword(password))) {
      const error = new Error('Invalid email or password');
      error.statusCode = 401;
      return next(error);
    }

    res.json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      }
    });
  } catch (error) {
    next(error);
  }
};

const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate('wishlist bookingHistory donationHistory');
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }
    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile
};

`

### server\controllers\bookingController.js
`js
const Booking = require('../models/Booking');
const DarshanSlot = require('../models/DarshanSlot');
const Payment = require('../models/Payment');
const Razorpay = require('razorpay');
const QRCode = require('qrcode');
const crypto = require('crypto');
const NotificationService = require('../services/NotificationService');

const createBooking = async (req, res, next) => {
  try {
    const { templeId, slotId, noOfPersons, devoteeDetails, totalAmount } = req.body;

    const slot = await DarshanSlot.findById(slotId);
    if (!slot || slot.availableSeats < noOfPersons) {
      const error = new Error('Not enough seats available');
      error.statusCode = 400;
      return next(error);
    }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_mock',
      key_secret: process.env.RAZORPAY_KEY_SECRET || 'mock_secret',
    });

    const options = {
      amount: totalAmount * 100,
      currency: "INR",
      receipt: `receipt_order_${Math.random() * 1000}`
    };

    let order;
    try {
       order = await instance.orders.create(options);
    } catch(err) {
       order = { id: 'order_mock_' + Date.now(), amount: options.amount };
    }

    const payment = await Payment.create({
      userId: req.user.id,
      razorpayOrderId: order.id,
      amount: totalAmount,
      type: 'BOOKING'
    });

    const booking = await Booking.create({
      userId: req.user.id,
      templeId,
      slotId,
      noOfPersons,
      devoteeDetails,
      totalAmount,
      paymentId: payment._id
    });

    res.status(201).json({
      success: true,
      data: booking,
      orderId: order.id,
      amount: order.amount
    });
  } catch (error) {
    next(error);
  }
};

const verifyPayment = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

    const booking = await Booking.findById(bookingId).populate('templeId');
    if (!booking) {
      const error = new Error('Booking not found');
      error.statusCode = 404;
      return next(error);
    }

    const payment = await Payment.findById(booking.paymentId);
    payment.razorpayPaymentId = razorpay_payment_id || 'mock_pay_id';
    payment.razorpaySignature = razorpay_signature || 'mock_sig';
    payment.status = 'SUCCESS';
    await payment.save();

    const ticketNumber = 'TKT-' + crypto.randomBytes(4).toString('hex').toUpperCase();
    
    // Generate QR Code containing ticket number
    const qrCodeDataUrl = await QRCode.toDataURL(ticketNumber);

    booking.bookingStatus = 'CONFIRMED';
    booking.paymentStatus = 'PAID';
    booking.ticketNumber = ticketNumber;
    booking.qrCodeUrl = qrCodeDataUrl;
    await booking.save();

    const slot = await DarshanSlot.findById(booking.slotId);
    slot.availableSeats -= booking.noOfPersons;
    slot.bookedSeats += booking.noOfPersons;
    if (slot.availableSeats <= 0) slot.status = 'FULL';
    await slot.save();

    // Send Notification
    await NotificationService.sendBookingConfirmation(req.user, booking, booking.templeId);

    res.status(200).json({ success: true, message: 'Booking confirmed', data: booking });
  } catch (error) {
    next(error);
  }
};

const getMyBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).populate('templeId', 'name city featuredImage').populate('slotId');
    res.status(200).json({ success: true, count: bookings.length, data: bookings });
  } catch (error) {
    next(error);
  }
};

const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find().populate('templeId', 'name city').populate('userId', 'name email').populate('slotId');
    res.status(200).json({ success: true, count: bookings.length, data: bookings });
  } catch (error) {
    next(error);
  }
};

const cancelBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('templeId');
    if (!booking) {
      const error = new Error('Booking not found');
      error.statusCode = 404;
      return next(error);
    }

    if (booking.userId.toString() !== req.user.id && req.user.role !== 'ADMIN') {
      const error = new Error('Not authorized to cancel this booking');
      error.statusCode = 403;
      return next(error);
    }

    if (booking.bookingStatus === 'CANCELLED') {
      const error = new Error('Booking is already cancelled');
      error.statusCode = 400;
      return next(error);
    }

    // Restore seats
    const slot = await DarshanSlot.findById(booking.slotId);
    if (slot) {
      slot.availableSeats += booking.noOfPersons;
      slot.bookedSeats -= booking.noOfPersons;
      if (slot.availableSeats > 0) slot.status = 'AVAILABLE';
      await slot.save();
    }

    booking.bookingStatus = 'CANCELLED';
    await booking.save();

    await NotificationService.sendBookingCancellation(req.user, booking, booking.templeId);

    res.status(200).json({ success: true, message: 'Booking cancelled successfully', data: booking });
  } catch (error) {
    next(error);
  }
};

module.exports = { createBooking, verifyPayment, getMyBookings, getAllBookings, cancelBooking };

`

### server\controllers\chatController.js
`js
const { GoogleGenAI } = require('@google/genai');
const ChatHistory = require('../models/ChatHistory');
const Temple = require('../models/Temple');
const DarshanSlot = require('../models/DarshanSlot');
const Booking = require('../models/Booking');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const getChatResponse = async (req, res, next) => {
  try {
    const { message } = req.body;
    const userId = req.user ? req.user._id : null;

    if (!message) {
      const error = new Error('Message is required');
      error.statusCode = 400;
      return next(error);
    }

    // Context Injection Strategy
    let contextData = '';
    const msgLower = message.toLowerCase();

    // 1. Context: Specific Temple details (regex match)
    // Extract potential temple names or search generally
    const temples = await Temple.find({
      $or: [
        { name: { $regex: msgLower, $options: 'i' } },
        { city: { $regex: msgLower, $options: 'i' } }
      ]
    }).select('name city state openingTime closingTime dressCode history facilities faqs').limit(3);

    if (temples.length > 0) {
      contextData += `\nMatching Temple Info: ${JSON.stringify(temples)}`;
    } else if (msgLower.includes('temple') || msgLower.includes('list')) {
      // General temple query
      const allTemples = await Temple.find().select('name city state').limit(10);
      contextData += `\nGeneral Temples Context (Top 10): ${JSON.stringify(allTemples)}`;
    }

    // 2. Context: Live Slots Availability
    if (msgLower.includes('slot') || msgLower.includes('book') || msgLower.includes('available') || msgLower.includes('darshan')) {
      let slotQuery = { status: 'AVAILABLE', date: { $gte: new Date() } };
      if (temples.length > 0) {
        slotQuery.templeId = temples[0]._id; // Prioritize slots for the matched temple
      }
      const slots = await DarshanSlot.find(slotQuery).populate('templeId', 'name').sort('date startTime').limit(10);
      contextData += `\nLive Available Darshan Slots: ${JSON.stringify(slots)}`;
    }

    // 3. Context: Booking History
    if (msgLower.includes('my booking') || msgLower.includes('my ticket') || msgLower.includes('status') || msgLower.includes('cancel')) {
      if (userId) {
        const bookings = await Booking.find({ userId }).populate('templeId', 'name').populate('slotId');
        contextData += `\nUser's Actual Bookings: ${JSON.stringify(bookings)}`;
      } else {
        contextData += `\nNote: User is not logged in, so booking history is unavailable. Inform them to log in to view or cancel bookings.`;
      }
    }

    const systemInstruction = `You are Darshan AI Assistant, the official virtual assistant for DarshanEase, an online temple darshan booking platform. You answer questions about temples, darshan bookings, donations, festivals, pilgrim guidance, and the DarshanEase application. Respond respectfully, accurately, and concisely. Never fabricate booking data. When application data is available, use it. If information is unavailable, state that clearly instead of guessing. Context Data from DarshanEase database: ${contextData}`;

    // Initialize the model
    // Using gemini-2.5-flash as the default standard model for conversational tasks
    let aiResponseText = '';
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
            config: {
                systemInstruction: systemInstruction,
            }
        });
        aiResponseText = response.text;
    } catch (apiErr) {
        console.error('Gemini API Error:', apiErr);
        aiResponseText = "🙏 Sorry, I am currently unable to reach the AI servers. Please try checking the FAQs or contact support.";
    }

    // Save Chat History if user is logged in
    if (userId) {
      await ChatHistory.create({
        userId,
        message,
        response: aiResponseText
      });
    }

    res.status(200).json({
      success: true,
      data: { reply: aiResponseText }
    });

  } catch (error) {
    next(error);
  }
};

module.exports = { getChatResponse };

`

### server\controllers\reviewController.js
`js
const Review = require('../models/Review');
const Temple = require('../models/Temple');
const Booking = require('../models/Booking');

// @desc    Add a review
// @route   POST /api/reviews
// @access  Private
const addReview = async (req, res, next) => {
  try {
    const { templeId, rating, review: reviewText } = req.body;
    
    // Check if user has a confirmed/completed booking for this temple
    const hasBooked = await Booking.findOne({
      userId: req.user.id,
      templeId,
      bookingStatus: { $in: ['CONFIRMED', 'COMPLETED'] }
    });

    if (!hasBooked) {
      const error = new Error('Only users with a confirmed booking can review this temple.');
      error.statusCode = 403;
      return next(error);
    }

    // Check if user already reviewed
    const existingReview = await Review.findOne({ templeId, userId: req.user.id });
    if (existingReview) {
      const error = new Error('You have already reviewed this temple.');
      error.statusCode = 400;
      return next(error);
    }

    const reviewObj = await Review.create({
      templeId,
      userId: req.user.id,
      rating: Number(rating),
      review: reviewText
    });

    // Update temple averages
    await updateTempleAverageRating(templeId);

    res.status(201).json({ success: true, data: reviewObj });
  } catch (error) {
    next(error);
  }
};

// @desc    Get temple reviews
// @route   GET /api/reviews/temple/:templeId
// @access  Public
const getTempleReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ templeId: req.params.templeId })
      .populate('userId', 'name')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, count: reviews.length, data: reviews });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
// @access  Private (User/Admin)
const deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      const error = new Error('Review not found');
      error.statusCode = 404;
      return next(error);
    }

    // Ensure user owns the review or is admin
    if (review.userId.toString() !== req.user.id && req.user.role !== 'ADMIN') {
      const error = new Error('Not authorized to delete this review');
      error.statusCode = 403;
      return next(error);
    }

    await review.deleteOne();
    await updateTempleAverageRating(review.templeId);

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

// Helper function
const updateTempleAverageRating = async (templeId) => {
  const obj = await Review.aggregate([
    { $match: { templeId: templeId } },
    { $group: { _id: '$templeId', averageRating: { $avg: '$rating' }, count: { $sum: 1 } } }
  ]);

  if (obj.length > 0) {
    await Temple.findByIdAndUpdate(templeId, {
      ratings: Math.round(obj[0].averageRating * 10) / 10,
      reviewsCount: obj[0].count
    });
  } else {
    await Temple.findByIdAndUpdate(templeId, { ratings: 0, reviewsCount: 0 });
  }
};

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Private/Admin
const getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find()
      .populate('userId', 'name email')
      .populate('templeId', 'name')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, count: reviews.length, data: reviews });
  } catch (error) {
    next(error);
  }
};

module.exports = { addReview, getTempleReviews, deleteReview, getAllReviews };

`

### server\controllers\slotController.js
`js
const DarshanSlot = require('../models/DarshanSlot');

const getSlots = async (req, res, next) => {
  try {
    let query;
    const reqQuery = { ...req.query, templeId: req.params.templeId };
    
    if (req.query.startDate && req.query.endDate) {
      reqQuery.date = {
        $gte: new Date(req.query.startDate),
        $lte: new Date(req.query.endDate)
      };
      delete reqQuery.startDate;
      delete reqQuery.endDate;
    } else if (req.query.date) {
      reqQuery.date = new Date(req.query.date);
    }

    query = DarshanSlot.find(reqQuery).sort({ date: 1, startTime: 1 });

    const slots = await query;
    res.status(200).json({ success: true, count: slots.length, data: slots });
  } catch (error) {
    next(error);
  }
};

const getAllSlots = async (req, res, next) => {
  try {
    const slots = await DarshanSlot.find().populate('templeId', 'name city').sort({ date: 1, startTime: 1 });
    res.status(200).json({ success: true, count: slots.length, data: slots });
  } catch (error) {
    next(error);
  }
};

const createSlot = async (req, res, next) => {
  try {
    const slot = await DarshanSlot.create(req.body);
    res.status(201).json({ success: true, data: slot });
  } catch (error) {
    next(error);
  }
};

const updateSlot = async (req, res, next) => {
  try {
    const slot = await DarshanSlot.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!slot) {
      const error = new Error('Slot not found');
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json({ success: true, data: slot });
  } catch (error) {
    next(error);
  }
};

const deleteSlot = async (req, res, next) => {
  try {
    const slot = await DarshanSlot.findByIdAndDelete(req.params.id);
    if (!slot) {
      const error = new Error('Slot not found');
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json({ success: true, message: 'Slot deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getSlots, getAllSlots, createSlot, updateSlot, deleteSlot };

`

### server\controllers\templeController.js
`js
const Temple = require('../models/Temple');

const getTemples = async (req, res, next) => {
  try {
    let query;

    const reqQuery = { ...req.query };
    const removeFields = ['select', 'sort', 'page', 'limit', 'search'];
    removeFields.forEach(param => delete reqQuery[param]);

    let queryStr = JSON.stringify(reqQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

    query = Temple.find(JSON.parse(queryStr));

    if (req.query.search) {
      const searchRegex = new RegExp(req.query.search, 'i');
      query = query.find({
        $or: [{ name: searchRegex }, { city: searchRegex }, { state: searchRegex }]
      });
    }

    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ');
      query = query.select(fields);
    }

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const total = await Temple.countDocuments(query);

    query = query.skip(startIndex).limit(limit);

    const temples = await query;

    const pagination = {};
    if (startIndex + limit < total) {
      pagination.next = { page: page + 1, limit };
    }
    if (startIndex > 0) {
      pagination.prev = { page: page - 1, limit };
    }

    res.status(200).json({ success: true, count: temples.length, pagination, total, data: temples });
  } catch (error) {
    next(error);
  }
};

const getTemple = async (req, res, next) => {
  try {
    const temple = await Temple.findById(req.params.id).populate('organizerId', 'name email');
    if (!temple) {
      const error = new Error('Temple not found');
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json({ success: true, data: temple });
  } catch (error) {
    next(error);
  }
};

const createTemple = async (req, res, next) => {
  try {
    req.body.organizerId = req.user.id;
    const temple = await Temple.create(req.body);
    res.status(201).json({ success: true, data: temple });
  } catch (error) {
    next(error);
  }
};

const updateTemple = async (req, res, next) => {
  try {
    let temple = await Temple.findById(req.params.id);
    if (!temple) {
      const error = new Error('Temple not found');
      error.statusCode = 404;
      return next(error);
    }
    
    // Only ADMIN or the ORGANIZER who created it can update
    if (temple.organizerId.toString() !== req.user.id && req.user.role !== 'ADMIN') {
      const error = new Error('Not authorized to update this temple');
      error.statusCode = 403;
      return next(error);
    }

    temple = await Temple.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({ success: true, data: temple });
  } catch (error) {
    next(error);
  }
};

const deleteTemple = async (req, res, next) => {
  try {
    const temple = await Temple.findById(req.params.id);
    if (!temple) {
      const error = new Error('Temple not found');
      error.statusCode = 404;
      return next(error);
    }

    if (req.user.role !== 'ADMIN') {
      const error = new Error('Not authorized to delete this temple');
      error.statusCode = 403;
      return next(error);
    }

    await temple.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

const toggleTempleStatus = async (req, res, next) => {
  try {
    const temple = await Temple.findById(req.params.id);
    if (!temple) {
      const error = new Error('Temple not found');
      error.statusCode = 404;
      return next(error);
    }
    
    if (req.user.role !== 'ADMIN') {
      const error = new Error('Not authorized to toggle temple status');
      error.statusCode = 403;
      return next(error);
    }

    temple.isActive = !temple.isActive;
    await temple.save();
    res.status(200).json({ success: true, data: temple });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTemples, getTemple, createTemple, updateTemple, deleteTemple, toggleTempleStatus };

`

### server\dropDb.js
`js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/darshanease')
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => {
    console.log('Database dropped.');
    process.exit(0);
  });

`

### server\generateTemples.js
`js
const fs = require('fs');

const templeNames = [
  "Tirumala Venkateswara Temple", "Kashi Vishwanath Temple", "Meenakshi Amman Temple", "Vaishno Devi Temple",
  "Badrinath Temple", "Kedarnath Temple", "Golden Temple", "Jagannath Temple", "Somnath Temple",
  "Brihadisvara Temple", "Ramanathaswamy Temple", "Dwarkadhish Temple", "Konark Sun Temple", "Mahakaleshwar Jyotirlinga",
  "Siddhivinayak Temple", "Lingaraja Temple", "Shree Padmanabhaswamy Temple", "Kamakhya Temple", "Yamunotri Temple",
  "Gangotri Temple", "Amarnath Cave Temple", "Akshardham Temple", "Prem Mandir", "Banke Bihari Temple",
  "Sri Ranganathaswamy Temple", "Chidambaram Nataraja Temple", "Shirdi Sai Baba Temple", "Lotus Temple", "Dakshineswar Kali Temple",
  "Belur Math"
];

const cities = [
  "Tirupati", "Varanasi", "Madurai", "Katra", "Badrinath", "Kedarnath", "Amritsar", "Puri", "Veraval",
  "Thanjavur", "Rameswaram", "Dwarka", "Konark", "Ujjain", "Mumbai", "Bhubaneswar", "Thiruvananthapuram", "Guwahati",
  "Uttarkashi", "Uttarkashi", "Pahalgam", "Delhi", "Vrindavan", "Vrindavan", "Srirangam", "Chidambaram", "Shirdi",
  "Delhi", "Kolkata", "Howrah"
];

const states = [
  "Andhra Pradesh", "Uttar Pradesh", "Tamil Nadu", "Jammu and Kashmir", "Uttarakhand", "Uttarakhand", "Punjab", "Odisha", "Gujarat",
  "Tamil Nadu", "Tamil Nadu", "Gujarat", "Odisha", "Madhya Pradesh", "Maharashtra", "Odisha", "Kerala", "Assam", "Uttarakhand",
  "Uttarakhand", "Jammu and Kashmir", "Delhi", "Uttar Pradesh", "Uttar Pradesh", "Tamil Nadu", "Tamil Nadu", "Maharashtra",
  "Delhi", "West Bengal", "West Bengal"
];

const images = [
  "https://images.unsplash.com/photo-1596422846543-74c6fc1e0f2f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600080808386-35dbf45d81b4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1570168007204-dfb528c6858f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80&w=800"
];

const temples = templeNames.map((name, i) => {
  return {
    name: name,
    description: `The ${name} is one of the most revered and sacred pilgrimage sites in ${states[i]}. It attracts millions of devotees every year seeking blessings. The temple architecture and history reflect centuries of deep-rooted Indian tradition.`,
    history: `Established centuries ago, the ${name} has withstood the test of time. It has been patronized by numerous kings and empires who contributed to its magnificent architecture and vast wealth. The temple continues to be a central pillar of spiritual life in ${cities[i]}.`,
    architecture: `Built using traditional ancient techniques, the temple features intricate carvings, massive stone pillars, and awe-inspiring spires (vimanas). The layout is designed according to Vastu Shastra, creating a profoundly spiritual and calm atmosphere.`,
    deity: name.split(' ')[0],
    city: cities[i],
    state: states[i],
    address: `Temple Road, ${cities[i]}, ${states[i]}, India`,
    coordinates: {
      lat: 20.0 + (Math.random() * 5),
      lng: 78.0 + (Math.random() * 5)
    },
    featuredImage: images[i % images.length],
    galleryImages: [
      images[(i + 1) % images.length],
      images[(i + 2) % images.length],
      images[(i + 3) % images.length]
    ],
    categories: ["Hindu", "Pilgrimage", "Ancient"],
    openingTime: "04:00 AM",
    closingTime: "09:00 PM",
    facilities: ["Free Meals (Annadanam)", "Drinking Water", "Restrooms", "Shoe Keeping", "Cloak Room"],
    dressCode: "Traditional Wear (Dhoti, Saree, Kurta Pyjama). No shorts or sleeveless tops.",
    nearbyAttractions: ["Local Museum", "Sacred River Ghat", "Hill Viewpoint"],
    faqs: [
      { question: "What is the best time to visit?", answer: "Early morning or during the major festivals." },
      { question: "Is photography allowed?", answer: "Photography is strictly prohibited inside the main sanctum." }
    ],
    isFeatured: i < 5,
    isActive: true,
    ratings: 4 + (Math.random() * 1), // 4.0 to 5.0
    reviewsCount: Math.floor(Math.random() * 500) + 100
  };
});

// Ensure directory exists
if (!fs.existsSync('./data')){
    fs.mkdirSync('./data');
}

fs.writeFileSync('./data/temples.json', JSON.stringify(temples, null, 2));
console.log('data/temples.json generated with 30 temples!');

`

### server\middleware\authMiddleware.js
`js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      const err = new Error('Not authorized, token failed');
      err.statusCode = 401;
      return next(err);
    }
  }

  if (!token) {
    const err = new Error('Not authorized, no token');
    err.statusCode = 401;
    return next(err);
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      const err = new Error(`User role ${req.user.role} is not authorized to access this route`);
      err.statusCode = 403;
      return next(err);
    }
    next();
  };
};

module.exports = { protect, authorize };

`

### server\middleware\errorMiddleware.js
`js
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log to console for dev
  if (process.env.NODE_ENV === 'development') {
    console.log(err.stack);
  }

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found`;
    error = { message, statusCode: 404 };
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = { message, statusCode: 400 };
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = { message, statusCode: 400 };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;

`

### server\models\Booking.js
`js
const mongoose = require('mongoose');

const devoteeDetailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  idProofType: { type: String, required: true },
  idProofNumber: { type: String, required: true }
});

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  templeId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Temple',
    required: true
  },
  slotId: {
    type: mongoose.Schema.ObjectId,
    ref: 'DarshanSlot',
    required: true
  },
  noOfPersons: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  devoteeDetails: [devoteeDetailSchema],
  totalAmount: {
    type: Number,
    required: true
  },
  bookingDate: {
    type: Date,
    default: Date.now
  },
  bookingStatus: {
    type: String,
    enum: ['PENDING', 'CONFIRMED', 'CANCELLED'],
    default: 'PENDING'
  },
  paymentStatus: {
    type: String,
    enum: ['PENDING', 'PAID', 'FAILED', 'REFUNDED'],
    default: 'PENDING'
  },
  qrCodeUrl: {
    type: String
  },
  ticketNumber: {
    type: String,
    unique: true,
    sparse: true
  },
  paymentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Payment'
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);

`

### server\models\ChatHistory.js
`js
const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  }
}, { timestamps: true }); // timestamps adds createdAt (timestamp) automatically

module.exports = mongoose.model('ChatHistory', chatHistorySchema);

`

### server\models\DarshanSlot.js
`js
const mongoose = require('mongoose');

const darshanSlotSchema = new mongoose.Schema({
  templeId: { type: mongoose.Schema.ObjectId, ref: 'Temple', required: true },
  darshanType: { type: String, default: 'General' },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  totalCapacity: { type: Number, required: true },
  bookedSeats: { type: Number, default: 0 },
  availableSeats: { type: Number, required: true },
  ticketPrice: { type: Number, default: 0 },
  status: { type: String, enum: ['AVAILABLE', 'FULL', 'CANCELLED'], default: 'AVAILABLE' }
}, { timestamps: true });

// Prevent duplicate slots
darshanSlotSchema.index({ templeId: 1, date: 1, startTime: 1, darshanType: 1 }, { unique: true });

module.exports = mongoose.model('DarshanSlot', darshanSlotSchema);

`

### server\models\Donation.js
`js
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  templeId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Temple',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  transactionId: {
    type: String,
    required: true,
    unique: true
  },
  paymentStatus: {
    type: String,
    enum: ['PENDING', 'SUCCESS', 'FAILED'],
    default: 'PENDING'
  },
  donationDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);

`

### server\models\Notification.js
`js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['BOOKING', 'DONATION', 'FESTIVAL', 'SYSTEM'],
    default: 'SYSTEM'
  },
  isRead: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);

`

### server\models\Payment.js
`js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  razorpayOrderId: {
    type: String,
    required: true
  },
  razorpayPaymentId: {
    type: String
  },
  razorpaySignature: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['CREATED', 'SUCCESS', 'FAILED'],
    default: 'CREATED'
  },
  type: {
    type: String,
    enum: ['BOOKING', 'DONATION'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);

`

### server\models\Review.js
`js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  templeId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Temple',
    required: true
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, 'Please add a rating between 1 and 5']
  },
  review: {
    type: String,
    required: [true, 'Please add a review text']
  }
}, { timestamps: true });

// Prevent user from submitting more than one review per temple
reviewSchema.index({ templeId: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model('Review', reviewSchema);

`

### server\models\Temple.js
`js
const mongoose = require('mongoose');

const templeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  state: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
  history: { type: String, default: '' },
  deity: { type: String, required: true },
  category: { type: String, default: 'General' },
  latitude: { type: Number },
  longitude: { type: Number },
  openingTime: { type: String, required: true },
  closingTime: { type: String, required: true },
  dressCode: { type: String, default: 'Traditional Wear' },
  facilities: { type: [String], default: [] },
  galleryImages: { type: [String], default: [] },
  featuredImage: { type: String, default: '' },
  ratings: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  organizerId: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Temple', templeSchema);

`

### server\models\User.js
`js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    enum: ['USER', 'ORGANIZER', 'ADMIN'],
    default: 'USER'
  },
  phone: {
    type: String,
    default: ''
  },
  profilePhoto: {
    type: String,
    default: ''
  },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    pincode: String
  },
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Temple'
  }],
  bookingHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking'
  }],
  donationHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donation'
  }],
  resetPasswordToken: String,
  resetPasswordExpire: Date
}, { timestamps: true });

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

`

### server\routes\adminRoutes.js
`js
const express = require('express');
const { getDashboardStats, getAllUsers, updateUserRole, deleteUser, getAllDonations } = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Require Admin Role for all routes in this file
router.use(protect);
router.use(authorize('ADMIN'));

router.route('/stats').get(getDashboardStats);

router.route('/users')
  .get(getAllUsers);

router.route('/users/:id/role')
  .put(updateUserRole);

router.route('/users/:id')
  .delete(deleteUser);

router.route('/donations')
  .get(getAllDonations);

module.exports = router;

`

### server\routes\authRoutes.js
`js
const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { registerValidator, loginValidator } = require('../validators/authValidators');

const router = express.Router();

router.post('/register', registerValidator, registerUser);
router.post('/login', loginValidator, loginUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;

`

### server\routes\bookingRoutes.js
`js
const express = require('express');
const { createBooking, verifyPayment, getMyBookings, getAllBookings, cancelBooking } = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, createBooking)
  .get(protect, authorize('ADMIN', 'ORGANIZER'), getAllBookings);

router.route('/mybookings')
  .get(protect, getMyBookings);

router.route('/verify')
  .post(protect, verifyPayment);

router.route('/:id/cancel')
  .put(protect, cancelBooking);

module.exports = router;

`

### server\routes\chatRoutes.js
`js
const express = require('express');
const { getChatResponse } = require('../controllers/chatController');

const router = express.Router();

router.post('/', getChatResponse);

module.exports = router;

`

### server\routes\reviewRoutes.js
`js
const express = require('express');
const { addReview, getTempleReviews, deleteReview, getAllReviews } = require('../controllers/reviewController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, addReview)
  .get(protect, authorize('ADMIN'), getAllReviews);

router.route('/:id')
  .delete(protect, deleteReview);

router.route('/temple/:templeId')
  .get(getTempleReviews);

module.exports = router;

`

### server\routes\slotRoutes.js
`js
const express = require('express');
const { getSlots, getAllSlots, createSlot, updateSlot, deleteSlot } = require('../controllers/slotController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, authorize('ADMIN', 'ORGANIZER'), getAllSlots)
  .post(protect, authorize('ADMIN', 'ORGANIZER'), createSlot);

router.route('/:id')
  .put(protect, authorize('ADMIN', 'ORGANIZER'), updateSlot)
  .delete(protect, authorize('ADMIN', 'ORGANIZER'), deleteSlot);

// This route gets slots for a specific temple (public)
router.route('/temple/:templeId')
  .get(getSlots);

module.exports = router;

`

### server\routes\templeRoutes.js
`js
const express = require('express');
const { getTemples, getTemple, createTemple, updateTemple, deleteTemple, toggleTempleStatus } = require('../controllers/templeController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getTemples)
  .post(protect, authorize('ADMIN', 'ORGANIZER'), createTemple);

router.route('/:id')
  .get(getTemple)
  .put(protect, authorize('ADMIN', 'ORGANIZER'), updateTemple)
  .delete(protect, authorize('ADMIN'), deleteTemple);

router.route('/:id/toggle')
  .put(protect, authorize('ADMIN'), toggleTempleStatus);

module.exports = router;

`

### server\routes\uploadRoutes.js
`js
const express = require('express');
const { upload } = require('../config/cloudinary');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// @desc    Upload an image
// @route   POST /api/upload
// @access  Private/Admin or Organizer
router.post('/', protect, authorize('ADMIN', 'ORGANIZER'), upload.single('image'), (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error('No image uploaded');
      error.statusCode = 400;
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: req.file.path // Cloudinary URL
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Upload multiple images (gallery)
// @route   POST /api/upload/multiple
// @access  Private/Admin or Organizer
router.post('/multiple', protect, authorize('ADMIN', 'ORGANIZER'), upload.array('images', 5), (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      const error = new Error('No images uploaded');
      error.statusCode = 400;
      return next(error);
    }

    const urls = req.files.map(file => file.path);

    res.status(200).json({
      success: true,
      data: urls
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

`

### server\seeder.js
`js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/User');
const Temple = require('./models/Temple');
const DarshanSlot = require('./models/DarshanSlot');
const Review = require('./models/Review');
const Booking = require('./models/Booking');
const Payment = require('./models/Payment');
const ChatHistory = require('./models/ChatHistory');
const Donation = require('./models/Donation');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

// Read JSON files
const templesData = require('./data/temples.json');

const importData = async () => {
  try {
    await User.deleteMany();
    await Temple.deleteMany();
    await DarshanSlot.deleteMany();
    await Review.deleteMany();
    await Booking.deleteMany();
    await Payment.deleteMany();
    await ChatHistory.deleteMany();
    await Donation.deleteMany();

    console.log('Data Cleared...');

    // 1. Create Admin & Organizer
    const users = await User.create([
      {
        name: 'Admin User',
        email: 'admin@darshanease.com',
        password: 'password123',
        role: 'ADMIN',
        phoneNumber: '9876543210'
      },
      {
        name: 'Temple Organizer',
        email: 'organizer@darshanease.com',
        password: 'password123',
        role: 'ORGANIZER',
        phoneNumber: '9876543211'
      },
      {
        name: 'Normal User',
        email: 'user@darshanease.com',
        password: 'password123',
        role: 'USER',
        phoneNumber: '9876543212'
      }
    ]);

    const adminId = users[0]._id;
    const organizerId = users[1]._id;
    const userId = users[2]._id;

    // 2. Create Temples
    const templesWithOrganizer = templesData.map(temple => {
      return { ...temple, organizerId };
    });

    const createdTemples = await Temple.insertMany(templesWithOrganizer);
    console.log(`Added ${createdTemples.length} Temples...`);

    // 3. Create Darshan Slots for each temple (Next 30 days)
    const slotTypes = ['VIP Darshan', 'General Darshan', 'Special Entry', 'Senior Citizen', 'Suprabhata Seva'];
    const timeSlots = ['06:00 AM - 08:00 AM', '09:00 AM - 11:00 AM', '12:00 PM - 02:00 PM', '04:00 PM - 06:00 PM', '07:00 PM - 09:00 PM'];
    
    let slotsToInsert = [];
    let reviewsToInsert = [];

    for (let i = 0; i < createdTemples.length; i++) {
      const temple = createdTemples[i];

      // Add Reviews
      reviewsToInsert.push({
        templeId: temple._id,
        userId: userId,
        rating: 5,
        review: 'An absolutely divine experience. Highly recommend booking through this platform!'
      });

      // Add Slots
      for (let day = 0; day < 30; day++) {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + day);

        for (const type of slotTypes) {
          for (const time of timeSlots) {
            slotsToInsert.push({
              templeId: temple._id,
              date: currentDate.toISOString().split('T')[0],
              startTime: time.split(' - ')[0],
              endTime: time.split(' - ')[1],
              darshanType: type,
              totalCapacity: Math.floor(Math.random() * 50) + 20, // 20 to 70
              availableSeats: Math.floor(Math.random() * 50) + 20,
              bookedSeats: 0,
              ticketPrice: type.includes('General') ? 0 : (type.includes('VIP') ? 1000 : 300)
            });
          }
        }
      }
    }

    await DarshanSlot.insertMany(slotsToInsert);
    console.log(`Added ${slotsToInsert.length} Darshan Slots...`);

    await Review.insertMany(reviewsToInsert);
    console.log(`Added ${reviewsToInsert.length} Reviews...`);

    console.log('Data Imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Temple.deleteMany();
    await DarshanSlot.deleteMany();
    await Review.deleteMany();
    await Booking.deleteMany();
    await Payment.deleteMany();
    await ChatHistory.deleteMany();
    await Donation.deleteMany();
    
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

`

### server\server.js
`js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Connect to database
connectDB();

const app = express();

// Middlewares
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Security Middlewares
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100 // limit each IP to 100 requests per window
});
app.use('/api/', limiter);

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
const authRoutes = require('./routes/authRoutes');
const templeRoutes = require('./routes/templeRoutes');
const slotRoutes = require('./routes/slotRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const chatRoutes = require('./routes/chatRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/temples', templeRoutes);
app.use('/api/slots', slotRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/admin', adminRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const errorHandler = require('./middleware/errorMiddleware');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

`

### server\services\NotificationService.js
`js
/**
 * Mock Notification Service
 * Simulates sending emails and SMS messages for development and testing.
 * Ready to be swapped with Nodemailer/SendGrid/Twilio in production.
 */
class NotificationService {
  /**
   * Send a booking confirmation email
   * @param {Object} user - User object containing email and name
   * @param {Object} booking - Booking details
   * @param {Object} temple - Temple details
   */
  static async sendBookingConfirmation(user, booking, temple) {
    try {
      console.log('\n======================================================');
      console.log(`✉️  MOCK EMAIL SENT TO: ${user.email}`);
      console.log(`Subject: Booking Confirmed - ${temple.name}`);
      console.log('------------------------------------------------------');
      console.log(`Dear ${user.name},\n`);
      console.log(`Your darshan booking at ${temple.name} is confirmed.`);
      console.log(`Ticket Number: ${booking.ticketNumber}`);
      console.log(`Total Persons: ${booking.noOfPersons}`);
      console.log(`Amount Paid: ₹${booking.totalAmount}`);
      console.log(`\nPlease download your PDF ticket from your dashboard.`);
      console.log('======================================================\n');
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return true;
    } catch (error) {
      console.error('NotificationService Error:', error);
      return false;
    }
  }

  /**
   * Send a booking cancellation email
   */
  static async sendBookingCancellation(user, booking, temple) {
    try {
      console.log('\n======================================================');
      console.log(`✉️  MOCK EMAIL SENT TO: ${user.email}`);
      console.log(`Subject: Booking Cancelled - ${temple.name}`);
      console.log('------------------------------------------------------');
      console.log(`Dear ${user.name},\n`);
      console.log(`Your booking (Ticket: ${booking.ticketNumber}) has been cancelled successfully.`);
      console.log(`A refund of ₹${booking.totalAmount} will be initiated shortly.`);
      console.log('======================================================\n');
      return true;
    } catch (error) {
      console.error('NotificationService Error:', error);
      return false;
    }
  }
}

module.exports = NotificationService;

`

### server\utils\generateToken.js
`js
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = generateToken;

`

### server\validators\authValidators.js
`js
const { check, validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error(errors.array().map(e => e.msg).join(', '));
    error.statusCode = 400;
    return next(error);
  }
  next();
};

const registerValidator = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  validateRequest
];

const loginValidator = [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
  validateRequest
];

module.exports = {
  registerValidator,
  loginValidator
};

`

## 4. Frontend Code

### client\src\api\axiosInstance.js
`js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
});

// Interceptor to add auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const parsedUser = JSON.parse(userInfo);
      if (parsedUser && parsedUser.token) {
        config.headers.Authorization = `Bearer ${parsedUser.token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

`

### client\src\App.css
`css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}

`

### client\src\App.jsx
`jsx
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import { Loader2 } from 'lucide-react';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const TempleList = lazy(() => import('./pages/TempleList'));
const TempleDetails = lazy(() => import('./pages/TempleDetails'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const AdminTemples = lazy(() => import('./pages/admin/AdminTemples'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminSlots = lazy(() => import('./pages/admin/AdminSlots'));
const AdminBookings = lazy(() => import('./pages/admin/AdminBookings'));
const AdminUsers = lazy(() => import('./pages/admin/AdminUsers'));
const AdminReviews = lazy(() => import('./pages/admin/AdminReviews'));
const AdminDonations = lazy(() => import('./pages/admin/AdminDonations'));
const AdminSettings = lazy(() => import('./pages/admin/AdminSettings'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-ivory-100">
    <Loader2 className="w-12 h-12 animate-spin text-saffron-500" />
  </div>
);

const MainLayout = () => (
  <div className="min-h-screen bg-ivory-100 text-darkbrown-900 font-sans relative flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </main>
    <Chatbot />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* Main User Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/temples" element={<TempleList />} />
            <Route path="/temples/:id" element={<TempleDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={
            <Suspense fallback={<PageLoader />}>
              <AdminLayout />
            </Suspense>
          }>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="temples" element={<AdminTemples />} />
            <Route path="slots" element={<AdminSlots />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="donations" element={<AdminDonations />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="reviews" element={<AdminReviews />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

`

### client\src\components\admin\AdminChart.jsx
`jsx
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const AdminChart = ({ data }) => {
  return (
    <div className="card h-full flex flex-col">
      <h2 className="text-lg font-bold text-darkbrown-900 mb-6">Booking Trends (Last 7 Days)</h2>
      <div className="flex-1 min-h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F97316" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="_id" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} dx={-10} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Area type="monotone" dataKey="count" stroke="#F97316" strokeWidth={3} fillOpacity={1} fill="url(#colorCount)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

`

### client\src\components\admin\AdminStatCard.jsx
`jsx
import { TrendingUp } from '../../icons';

export const AdminStatCard = ({ title, value, icon: Icon, trend }) => (
  <div className="card">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-saffron-50 rounded-xl">
        <Icon className="w-6 h-6 text-saffron-600" />
      </div>
      {trend && (
        <span className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
          <TrendingUp className="w-3 h-3 mr-1" /> {trend}
        </span>
      )}
    </div>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-3xl font-bold text-darkbrown-900 mt-1">{value}</p>
  </div>
);

`

### client\src\components\Chatbot.jsx
`jsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, User, Bot } from '../icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import axiosInstance from '../api/axiosInstance';
import { useMutation } from '@tanstack/react-query';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, role: 'bot', text: 'Namaste! 🙏 I am Darshan, your virtual temple assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const chatMutation = useMutation({
    mutationFn: async (message) => {
      const { data } = await axiosInstance.post('/chat', { message });
      return data;
    },
    onSuccess: (data) => {
      setMessages((prev) => [...prev, { id: Date.now(), role: 'bot', text: data.data.reply }]);
    },
    onError: (error) => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: 'bot', text: 'I am sorry, but I am having trouble connecting to my spiritual servers right now. Please try again later.' }
      ]);
    }
  });

  const handleSend = (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: userMessage }]);
    
    chatMutation.mutate(userMessage);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-full shadow-2xl hover:shadow-saffron-500/50 flex items-center justify-center transition-shadow"
          >
            <MessageCircle size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] max-h-[80vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-saffron-500 to-saffron-600 p-5 text-white flex justify-between items-center shrink-0 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={20} className="text-ivory-100" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg leading-tight">Darshan AI</h3>
                  <p className="text-xs text-saffron-100 font-medium">Temple Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 bg-ivory-100/50 space-y-4">
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
                >
                  {msg.role === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center shrink-0 mb-1 border border-saffron-200">
                      <Bot size={16} className="text-saffron-600" />
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-darkbrown-800 text-white rounded-br-none' 
                        : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      msg.text
                    ) : (
                      <div className="prose prose-sm prose-p:leading-snug prose-a:text-saffron-600 max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {chatMutation.isPending && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start items-end gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center shrink-0 mb-1 border border-saffron-200">
                    <Bot size={16} className="text-saffron-600" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                    <div className="flex space-x-1.5">
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-saffron-400 rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-saffron-400 rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-saffron-400 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              {messages.length < 3 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {['Tirumala slots?', 'Donate to Kedarnath', 'Dress code?'].map((suggestion) => (
                    <button 
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:bg-saffron-50 hover:text-saffron-700 hover:border-saffron-200 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-full pl-5 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-saffron-500/50 focus:border-saffron-500 transition-all"
                  disabled={chatMutation.isPending}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || chatMutation.isPending}
                  className="absolute right-2 w-10 h-10 bg-saffron-500 text-white rounded-full flex items-center justify-center hover:bg-saffron-600 disabled:opacity-50 disabled:hover:bg-saffron-500 transition-colors shadow-sm"
                >
                  <Send size={18} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

`

### client\src\components\dashboard\BookingCard.jsx
`jsx
import { MapPin, Clock, Ticket, Download, XCircle } from '../../icons';
import { generateTicketPDF } from '../../utils/generatePDF';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const BookingCard = ({ booking, isPrivileged, onCancel }) => {
  const isCancelled = booking.bookingStatus === 'CANCELLED';
  const isConfirmed = booking.bookingStatus === 'CONFIRMED';
  const dateObj = new Date(booking.slotId?.date);

  const getStatusVariant = () => {
    if (isConfirmed) return 'success';
    if (isCancelled) return 'danger';
    return 'warning';
  };

  return (
    <div className="p-6 md:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 hover:bg-ivory-50 transition-colors">
      <div className="flex items-start gap-5 flex-1">
        <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center shrink-0 border ${
          isCancelled ? 'bg-gray-100 text-gray-400 border-gray-200' : 'bg-saffron-100 text-saffron-600 border-saffron-200'
        }`}>
          <span className="text-xs font-semibold uppercase">
            {dateObj.toLocaleDateString('en-US', { month: 'short' })}
          </span>
          <span className="text-xl font-bold leading-tight">{dateObj.getDate()}</span>
        </div>
        
        <div>
          <h4 className="text-xl font-serif font-bold text-darkbrown-900 mb-1">
            {booking.templeId?.name}
          </h4>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-gray-400" /> {booking.templeId?.city}</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1 text-gray-400" /> {booking.slotId?.startTime}</span>
            <span className="flex items-center"><Ticket className="w-4 h-4 mr-1 text-gray-400" /> {booking.noOfPersons} Persons</span>
          </div>
          
          {isPrivileged && (
            <div className="mt-3 text-xs text-gray-500 flex items-center gap-2">
              <span className="bg-gray-100 px-2 py-1 rounded">User: {booking.userId?.name}</span>
              <span className="bg-gray-100 px-2 py-1 rounded">Ticket: {booking.ticketNumber}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-col lg:items-end gap-3 w-full lg:w-auto border-t lg:border-t-0 pt-4 lg:pt-0 border-gray-100">
        <div className="flex items-center justify-between lg:justify-end w-full gap-4">
          <div className="text-left lg:text-right">
            <p className="text-xs text-gray-500 uppercase font-semibold">Amount Paid</p>
            <p className={`text-lg font-bold ${isCancelled ? 'text-gray-400 line-through' : 'text-darkbrown-900'}`}>
              ₹{booking.totalAmount}
            </p>
          </div>
          <Badge variant={getStatusVariant()}>
            {booking.bookingStatus}
          </Badge>
        </div>
        
        {!isPrivileged && (
          <div className="flex gap-2 w-full lg:w-auto">
            {isConfirmed && (
              <Button variant="outline" onClick={() => generateTicketPDF(booking, booking.templeId)} className="flex-1 lg:flex-none">
                <Download className="w-4 h-4 mr-2 text-saffron-500" /> Ticket
              </Button>
            )}
            {!isCancelled && (
              <Button 
                variant="danger" 
                onClick={() => { if(window.confirm('Are you sure you want to cancel this booking?')) onCancel(booking._id) }} 
                className="flex-1 lg:flex-none"
              >
                <XCircle className="w-4 h-4 mr-2" /> Cancel
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

`

### client\src\components\dashboard\DashboardHeader.jsx
`jsx
import { IndianRupee } from '../../icons';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

export const DashboardHeader = ({ user, isPrivileged }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
      <div>
        <h1 className="title">
          {isPrivileged ? 'Admin Dashboard' : 'My Spiritual Journey'}
        </h1>
        <p className="subtitle mt-2">
          {isPrivileged ? 'Manage bookings and analyze revenue.' : 'View and manage your upcoming darshans.'}
        </p>
      </div>
      <div className="bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 flex items-center">
        <div className="w-10 h-10 bg-saffron-100 text-saffron-600 rounded-full flex items-center justify-center font-bold mr-3">
          {user?.name?.charAt(0) ?? '?'}
        </div>
        <div>
          <p className="text-sm font-semibold text-darkbrown-900">{user.name}</p>
          <p className="text-xs text-gray-500">{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export const DashboardStats = ({ allBookings, chartData }) => {
  const totalRevenue = allBookings?.reduce((sum, b) => sum + (b.bookingStatus !== 'CANCELLED' ? b.totalAmount : 0), 0) || 0;
  const totalBookings = allBookings?.length || 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
      <div className="lg:col-span-2 card">
        <h3 className="text-lg font-serif font-semibold text-darkbrown-900 mb-6">Revenue Overview (Last 7 Days)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} tickFormatter={(value) => `₹${value}`} />
              <Tooltip cursor={{fill: '#fff0d6'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
              <Bar dataKey="revenue" fill="#ff9933" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="stats-card flex flex-col justify-center">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <IndianRupee size={120} />
        </div>
        <h3 className="text-saffron-100 font-medium mb-2 relative z-10">Total Revenue</h3>
        <p className="text-5xl font-bold font-serif relative z-10">
          ₹{totalRevenue.toLocaleString('en-IN')}
        </p>
        <div className="mt-8 relative z-10">
          <h3 className="text-saffron-100 font-medium mb-2">Total Bookings</h3>
          <p className="text-3xl font-bold font-serif">{totalBookings}</p>
        </div>
      </div>
    </div>
  );
};

`

### client\src\components\home\FeaturedTemples.jsx
`jsx
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../../icons';
import { TempleCard } from './TempleCard';
import { Loader } from '../ui/Loader';
import { EmptyState } from '../ui/EmptyState';
import axiosInstance from '../../api/axiosInstance';
import { Button } from '../ui/Button';

const fetchFeaturedTemples = async () => {
  const { data } = await axiosInstance.get('/temples?limit=6');
  return data.data ?? [];
};

export const FeaturedTemples = () => {
  const { data: temples, isLoading, error } = useQuery({
    queryKey: ['temples', 'featured'],
    queryFn: fetchFeaturedTemples
  });

  return (
    <section className="featured-section">
      <div className="header">
        <h2 className="title">Sacred Destinations</h2>
        <div className="divider"></div>
        <p className="subtitle">
          Discover India's most revered temples and book your spiritual journey today.
        </p>
      </div>

      {isLoading ? (
        <div className="loading"><Loader size={16} /></div>
      ) : error ? (
        <EmptyState 
          title="Failed to load temples" 
          description="Please try again later." 
          icon={ArrowRight} 
        />
      ) : temples?.length === 0 ? (
        <EmptyState 
          title="No temples found" 
          description="We couldn't find any temples to display." 
        />
      ) : (
        <div className="grid">
          {temples.map((temple, index) => (
            <TempleCard key={temple._id} temple={temple} idx={index} />
          ))}
        </div>
      )}
      
      <div className="footer">
        <Link to="/temples" className="btn-secondary inline-flex items-center">
          View All Temples <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
};

`

### client\src\components\home\HomeHero.jsx
`jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search } from '../../icons';
import { Button } from '../ui/Button';

export const HomeHero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/temples?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <section className="home-hero">
      <div className="image-container">
        <img 
          src="https://images.unsplash.com/photo-1582510003544-4d00b7f7415e?q=80&w=2000&auto=format&fit=crop" 
          alt="Temple architecture" 
          className="image"
        />
        <div className="overlay" />
      </div>

      <div className="content">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Divine Darshan, <br />
          <span className="title-highlight">Simplified.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="subtitle"
        >
          Experience the spiritual heritage of India. Book priority darshan, manage donations, and explore ancient temples with unmatched ease.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onSubmit={handleSearch}
          className="home-search"
        >
          <div className="input-wrapper">
            <Search className="icon" />
            <input 
              type="text" 
              placeholder="Search temples by name or city..." 
              className="input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button type="submit" className="btn">
            Find Temples
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

`

### client\src\components\home\TempleCard.jsx
`jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, MapPin, Calendar, ArrowRight } from '../../icons';

export const TempleCard = ({ temple, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="temple-card group"
    >
      <div className="image-wrapper">
        <img 
          src={temple.featuredImage || temple.galleryImages?.[0] || 'https://via.placeholder.com/400x300'} 
          alt={temple.name} 
          className="image"
        />
        <div className="rating">
          <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500 mr-1" />
          {temple.ratings || '4.5'}
        </div>
        <div className="category">
          {temple.category || 'Pilgrimage'}
        </div>
      </div>
      
      <div className="body">
        <h3 className="name">{temple.name}</h3>
        <div className="city">
          <MapPin className="w-4 h-4 mr-1 text-saffron-500 shrink-0" />
          <span className="truncate">{temple.city}, {temple.state}</span>
        </div>
        <p className="desc">
          {temple.description}
        </p>
        
        <div className="footer">
          <div className="time">
            <Calendar className="w-4 h-4 mr-1 text-gray-400" />
            {temple.openingTime} - {temple.closingTime}
          </div>
          <Link to={`/temples/${temple._id}`} className="btn">
            Book Now <ArrowRight className="w-4 h-4 inline-block ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

`

### client\src\components\home\WhyChooseUs.jsx
`jsx
import { motion } from 'framer-motion';

export const WhyChooseUs = () => {
  const features = [
    { title: "Guaranteed Slots", desc: "Real-time sync with temple authorities for assured darshan." },
    { title: "Secure Donations", desc: "Transparent, blockchain-verified donation tracking." },
    { title: "AI Temple Assistant", desc: "Get instant answers about history, timings, and dress codes." }
  ];

  return (
    <section className="features">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="title">Elevating your spiritual journey.</h2>
          <p className="subtitle">
            DarshanEase brings centuries-old traditions into the digital age. We ensure your focus remains on devotion, not logistics.
          </p>
          
          <ul className="list">
            {features.map((feature, idx) => (
              <li key={idx} className="item">
                <div className="icon-box">
                  <div className="icon" />
                </div>
                <div className="text-content">
                  <h4 className="item-title">{feature.title}</h4>
                  <p className="item-desc">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="image-wrapper"
        >
          <img 
            src="https://images.unsplash.com/photo-1600100397608-f010f41cb8ea?q=80&w=1000&auto=format&fit=crop" 
            alt="Devotion" 
            className="image"
          />
          <div className="image-overlay" />
          <div className="testimonial">
            <p className="testimonial-quote">"DarshanEase transformed our Tirupati visit. Zero queues, complete peace of mind."</p>
            <p className="testimonial-author">— Rajesh & Family</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

`

### client\src\components\layout\AuthCard.jsx
`jsx
export const AuthCard = ({ children, title, subtitle }) => {
  return (
    <div className="card w-full max-w-md p-8 md:p-10 shadow-xl border-none">
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl font-serif font-bold text-darkbrown-900 mb-2">{title}</h2>}
          {subtitle && <p className="text-gray-500">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

`

### client\src\components\layout\AuthLayout.jsx
`jsx
export const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-ivory-100 p-4">
      {children}
    </div>
  );
};

`

### client\src\components\layout\ContentLayout.jsx
`jsx
export const ContentLayout = ({ children }) => {
  return (
    <div className="section grid grid-cols-1 lg:grid-cols-3 gap-12">
      {children}
    </div>
  );
};

`

### client\src\components\layout\MainContent.jsx
`jsx
export const MainContent = ({ children }) => {
  return (
    <div className="lg:col-span-2">
      {children}
    </div>
  );
};

`

### client\src\components\layout\Page.jsx
`jsx
export const Page = ({ children }) => {
  return (
    <div className="min-h-screen bg-ivory-100 font-sans text-darkbrown-900 pb-20">
      {children}
    </div>
  );
};

`

### client\src\components\layout\Section.jsx
`jsx
export const Section = ({ children, className = '' }) => {
  return (
    <div className={`section mt-12 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

`

### client\src\components\layout\SectionHeader.jsx
`jsx
export const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="section-head">
      <h2 className="title mb-4">{title}</h2>
      <div className="section-divider"></div>
      {subtitle && (
        <p className="subtitle mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

`

### client\src\components\layout\Sidebar.jsx
`jsx
export const Sidebar = ({ children }) => {
  return (
    <div className="lg:col-span-1">
      {children}
    </div>
  );
};

`

### client\src\components\MockPaymentGateway.jsx
`jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, CreditCard, Shield } from '../icons';
import { Button } from './ui/Button';

const MockPaymentGateway = ({ amount, onPaymentSuccess, onPaymentCancel }) => {
  const [status, setStatus] = useState('IDLE'); // IDLE, PROCESSING, SUCCESS, FAILED
  const [progress, setProgress] = useState(0);

  const handlePay = () => setStatus('PROCESSING');

  useEffect(() => {
    if (status === 'PROCESSING') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setStatus('SUCCESS');
            setTimeout(() => {
              onPaymentSuccess({
                razorpay_payment_id: 'pay_mock_' + Math.random().toString(36).substr(2, 9),
                razorpay_signature: 'sig_mock_' + Math.random().toString(36).substr(2, 9)
              });
            }, 1000);
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [status, onPaymentSuccess]);

  return (
    <div className="payment-modal-overlay">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="payment-modal"
      >
        <div className="payment-modal-header">
          <Shield className="payment-modal-icon" />
          <h2 className="payment-modal-title">DarshanEase Secure Pay</h2>
          <p className="payment-modal-subtitle">Test Environment</p>
        </div>

        <div className="payment-modal-body">
          <div className="payment-modal-amount-row">
            <span className="payment-modal-amount-label">Amount to Pay</span>
            <span className="payment-modal-amount-value">₹{amount}</span>
          </div>

          <AnimatePresence mode="wait">
            {status === 'IDLE' && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="payment-modal-idle">
                <div className="payment-modal-card">
                  <div className="payment-modal-card-icon-wrapper">
                    <CreditCard className="payment-modal-card-icon" />
                  </div>
                  <div className="payment-modal-card-info">
                    <p className="payment-modal-card-number">•••• •••• •••• 4242</p>
                    <p className="payment-modal-card-type">Mock Card</p>
                  </div>
                </div>

                <div className="payment-modal-actions">
                  <Button variant="outline" onClick={onPaymentCancel} className="payment-modal-btn-cancel">
                    Cancel
                  </Button>
                  <Button onClick={handlePay} className="payment-modal-btn-pay">
                    Pay ₹{amount}
                  </Button>
                </div>
              </motion.div>
            )}

            {status === 'PROCESSING' && (
              <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="payment-modal-processing">
                <div className="payment-modal-progress-wrapper">
                  <svg className="payment-modal-progress-svg" viewBox="0 0 100 100">
                    <circle className="payment-modal-progress-bg" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent"></circle>
                    <circle className="payment-modal-progress-fg progress-ring__circle" strokeWidth="8" strokeLinecap="round" cx="50" cy="50" r="40" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * progress) / 100} style={{ transition: 'stroke-dashoffset 0.3s' }}></circle>
                  </svg>
                  <div className="payment-modal-progress-text">
                    {progress}%
                  </div>
                </div>
                <h3 className="payment-modal-processing-title">Processing Payment...</h3>
                <p className="payment-modal-processing-desc">Please do not close this window.</p>
              </motion.div>
            )}

            {status === 'SUCCESS' && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="payment-modal-success">
                <div className="payment-modal-success-icon-wrapper">
                  <CheckCircle className="payment-modal-success-icon" />
                </div>
                <h3 className="payment-modal-success-title">Payment Successful!</h3>
                <p className="payment-modal-success-desc">Redirecting to confirmation...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default MockPaymentGateway;

`

### client\src\components\Navbar.jsx
`jsx
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Button } from './ui/Button';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isAdmin = user?.role === 'ADMIN';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <Link to="/" className="navbar-logo">
              Darshan<span className="navbar-logo-highlight">Ease</span>
            </Link>
          </div>
          <div className="navbar-links">
            <Link to="/temples" className="navbar-link">
              Temples
            </Link>
            {user ? (
              <>
                <Link to={isAdmin ? "/admin/dashboard" : "/dashboard"} className="navbar-link">
                  Dashboard
                </Link>
                <Button variant="outline" onClick={handleLogout} className="navbar-btn-logout">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="navbar-link">
                  Sign In
                </Link>
                <Link to="/register">
                  <Button className="navbar-btn-signup">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

`

### client\src\components\temple\SearchBar.jsx
`jsx
import { Search } from '../../icons';
import { Input } from '../ui/Input';

export const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="max-w-3xl mx-auto mb-12 flex gap-2">
      <div className="relative flex-1">
        <Input 
          icon={Search}
          type="text" 
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="rounded-full py-3"
        />
      </div>
    </form>
  );
};

`

### client\src\components\temple\TempleCard.jsx
`jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star, Clock } from '../../icons';

export const TempleCard = ({ temple, idx = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      className="temple-card group"
    >
      <div className="image-wrapper">
        <img 
          src={temple.featuredImage || 'https://via.placeholder.com/400x300'} 
          alt={temple.name} 
          className="image"
        />
        <div className="rating">
          <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500 mr-1" />
          {temple.ratings || '4.5'}
        </div>
        <div className="category">
          {temple.category || 'Pilgrimage'}
        </div>
      </div>
      <div className="body">
        <h3 className="name">{temple.name}</h3>
        <div className="city">
          <MapPin className="w-4 h-4 mr-1 text-saffron-500 shrink-0" />
          <span className="truncate">{temple.city}, {temple.state}</span>
        </div>
        <p className="desc">
          {temple.description}
        </p>
        <div className="footer">
          <div className="time">
            <Clock className="w-4 h-4 mr-1 text-gray-400" />
            {temple.openingTime} - {temple.closingTime}
          </div>
          <Link to={`/temples/${temple._id}`} className="btn">
            View Details &rarr;
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

`

### client\src\components\temple\TempleHero.jsx
`jsx
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin } from '@/icons';

export const TempleHero = ({ temple }) => {
  return (
    <div className="hero">
      <img 
        src={temple.featuredImage || 'https://via.placeholder.com/1920x1080'} 
        alt={temple.name}
        className="image"
      />
      <div className="overlay"></div>
      <div className="content">
        <Link to="/temples" className="back-link">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Temples
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <span className="category">
            {temple.category || 'Pilgrimage'}
          </span>
          <div className="flex items-center text-gold-400 text-sm font-medium">
            <Star className="w-4 h-4 mr-1 fill-gold-400" /> {temple.ratings} ({temple.reviewsCount} reviews)
          </div>
        </div>
        <h1 className="title">{temple.name}</h1>
        <p className="location">
          <MapPin className="w-5 h-5 mr-2 text-saffron-500" />
          {temple.address}, {temple.city}, {temple.state}
        </p>
      </div>
    </div>
  );
};

`

### client\src\components\temple\TempleInfo.jsx
`jsx
import { Clock, Users, Building2, Ticket } from '@/icons';

export const TempleInfo = ({ temple }) => {
  return (
    <div className="info">
      
      <div className="card">
        <h2 className="title">
          <Building2 className="w-6 h-6 mr-3 text-saffron-500" />
          About {temple.name}
        </h2>
        <p className="text">
          {temple.description}
        </p>
      </div>

      <div className="stats">
        <div>
          <span className="label">Opening Time</span>
          <div className="value">
            <Clock className="w-5 h-5 mr-2 text-saffron-500" />
            {temple.openingTime}
          </div>
        </div>
        <div>
          <span className="label">Closing Time</span>
          <div className="value">
            <Clock className="w-5 h-5 mr-2 text-saffron-500" />
            {temple.closingTime}
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="title">
          <Ticket className="w-6 h-6 mr-3 text-saffron-500" />
          Darshan Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {temple.darshanTypes?.map((darshan, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div>
                <h4 className="font-semibold text-darkbrown-800">{darshan.name}</h4>
                <p className="text-sm text-gray-500">{darshan.duration} minutes</p>
              </div>
              <div className="text-lg font-bold text-saffron-600">
                ₹{darshan.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="title">
          <Users className="w-6 h-6 mr-3 text-saffron-500" />
          Facilities
        </h2>
        <div className="flex flex-wrap gap-2">
          {temple.facilities?.map((facility, index) => (
            <span key={index} className="tag">
              {facility}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

`

### client\src\components\ui\Badge.jsx
`jsx
export const Badge = ({ children, variant = 'primary', className = '', icon: Icon }) => {
  const baseClass = `badge badge-${variant}`;
  
  return (
    <span className={`${baseClass} ${className}`}>
      {Icon && <Icon className="w-3 h-3 mr-1" />}
      {children}
    </span>
  );
};

`

### client\src\components\ui\Button.jsx
`jsx
export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon: Icon,
  isLoading,
  ...props 
}) => {
  const baseClass = `btn-${variant}`;
  
  return (
    <button className={`${baseClass} ${className}`} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? (
        <div className="w-4 h-4 mr-2 rounded-full border-2 border-current border-t-transparent animate-spin" />
      ) : Icon ? (
        <Icon className="w-4 h-4 mr-2" />
      ) : null}
      {children}
    </button>
  );
};

`

### client\src\components\ui\Card.jsx
`jsx
export const Card = ({ children, className = '', hover = false, ...props }) => {
  const hoverClass = hover ? 'card-hover' : '';
  
  return (
    <div className={`card ${hoverClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const StatsCard = ({ children, className = '', ...props }) => {
  return (
    <div className={`stats-card ${className}`} {...props}>
      {children}
    </div>
  );
};

export const GlassCard = ({ children, className = '', ...props }) => {
  return (
    <div className={`glass-card ${className}`} {...props}>
      {children}
    </div>
  );
};

`

### client\src\components\ui\DataState.jsx
`jsx
import { EmptyState } from '@/components/ui/EmptyState';
import { PageLoader } from '@/components/ui/Loader';

export const DataState = ({ 
  loading, 
  error, 
  empty, 
  loadingComponent,
  errorTitle = "Failed to load data",
  errorDescription = "Please try again later.",
  emptyTitle = "No data found",
  emptyDescription = "",
  emptyIcon,
  children 
}) => {
  if (loading) {
    return loadingComponent || <PageLoader />;
  }

  if (error) {
    return (
      <EmptyState 
        title={errorTitle} 
        description={errorDescription}
        className="border-red-100 bg-red-50 text-red-600"
      />
    );
  }

  if (empty) {
    return (
      <EmptyState 
        icon={emptyIcon}
        title={emptyTitle}
        description={emptyDescription}
      />
    );
  }

  return children;
};

`

### client\src\components\ui\EmptyState.jsx
`jsx
export const EmptyState = ({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  className = '' 
}) => {
  return (
    <div className={`text-center bg-white p-12 rounded-2xl border border-gray-100 shadow-sm ${className}`}>
      {Icon && <Icon className="w-12 h-12 mx-auto text-gray-300 mb-4" />}
      <h3 className="text-xl font-medium text-gray-700">{title}</h3>
      {description && <p className="mt-2 text-gray-500">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};

`

### client\src\components\ui\Input.jsx
`jsx
export const Input = ({ 
  label, 
  id, 
  error, 
  icon: Icon,
  className = '', 
  containerClassName = '',
  ...props 
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input 
          id={id}
          className={`input ${Icon ? 'pl-10' : ''} ${error ? 'border-red-300 focus:ring-red-500' : ''} ${className}`}
          {...props} 
        />
      </div>
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};

`

### client\src\components\ui\Loader.jsx
`jsx
import { Loader2 } from 'lucide-react';

export const Loader = ({ className = '', size = 8 }) => (
  <div className={`flex justify-center items-center py-20 ${className}`}>
    <Loader2 className={`w-${size} h-${size} animate-spin text-saffron-500`} />
  </div>
);

export const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-ivory-100">
    <Loader2 className="w-12 h-12 animate-spin text-saffron-500" />
  </div>
);

`

### client\src\components\ui\PageHeader.jsx
`jsx
export const PageHeader = ({ title, subtitle, action }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-2xl font-bold text-darkbrown-900">{title}</h1>
        {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

`

### client\src\components\ui\Table.jsx
`jsx
export const Table = ({ children }) => (
  <div className="table-container w-full overflow-x-auto">
    <table className="w-full text-left border-collapse">
      {children}
    </table>
  </div>
);

export const Thead = ({ children }) => (
  <thead className="bg-gray-50 border-b border-gray-100">
    {children}
  </thead>
);

export const Tbody = ({ children }) => (
  <tbody className="divide-y divide-gray-50 bg-white">
    {children}
  </tbody>
);

export const Tr = ({ children, className = '' }) => (
  <tr className={`table-row ${className}`}>
    {children}
  </tr>
);

export const Th = ({ children, className = '' }) => (
  <th className={`px-6 py-4 text-xs text-gray-500 uppercase font-semibold tracking-wider ${className}`}>
    {children}
  </th>
);

export const Td = ({ children, className = '' }) => (
  <td className={`table-cell whitespace-nowrap ${className}`}>
    {children}
  </td>
);

`

### client\src\context\AuthContext.jsx
`jsx
import { createContext, useState, useEffect } from 'react';
import axiosInstance from '@/api/axiosInstance';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo) {
        try {
          const { data } = await axiosInstance.get('/auth/profile');
          setUser(data.data);
          localStorage.setItem('userInfo', JSON.stringify(data.data));
        } catch (error) {
          console.error(error);
          localStorage.removeItem('userInfo');
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axiosInstance.post('/auth/login', { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data.data));
      setUser(data.data);
      toast.success('Logged in successfully!');
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
      return false;
    }
  };

  const register = async (name, email, password) => {
    try {
      const { data } = await axiosInstance.post('/auth/register', { name, email, password });
      localStorage.setItem('userInfo', JSON.stringify(data.data));
      setUser(data.data);
      toast.success('Registered successfully!');
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    toast.info('Logged out');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

`

### client\src\features\auth\components\LoginForm.jsx
`jsx
import { useState, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const success = await login(email, password);
    setLoading(false);
    if (success) {
      navigate('/');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input 
          label="Email Address" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          placeholder="devotee@example.com"
        />
        <Input 
          label="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          placeholder="••••••••"
        />
        
        <Button type="submit" className="w-full shadow-lg shadow-saffron-500/30" isLoading={loading}>
          Sign In
        </Button>
      </form>
      
      <p className="mt-8 text-center text-sm text-gray-600">
        Don't have an account? <Link to="/register" className="text-saffron-600 font-semibold hover:underline">Sign up</Link>
      </p>
    </>
  );
};

`

### client\src\features\auth\components\RegisterForm.jsx
`jsx
import { useState, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const success = await register(name, email, password);
    setLoading(false);
    if (success) {
      navigate('/login');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input 
          label="Full Name" 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          placeholder="John Doe"
        />
        <Input 
          label="Email Address" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          placeholder="devotee@example.com"
        />
        <Input 
          label="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          placeholder="••••••••"
        />
        
        <Button type="submit" className="w-full shadow-lg shadow-saffron-500/30" isLoading={loading}>
          Create Account
        </Button>
      </form>
      
      <p className="mt-8 text-center text-sm text-gray-600">
        Already have an account? <Link to="/login" className="text-saffron-600 font-semibold hover:underline">Log in</Link>
      </p>
    </>
  );
};

`

### client\src\features\booking\components\BookingWizard.jsx
`jsx
import { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AuthContext } from '@/context/AuthContext';
import { toast } from 'react-toastify';
import { useBookingWizard } from '../hooks/useBookingWizard';
import { useDevotees } from '../hooks/useDevotees';
import { useBooking } from '../hooks/useBooking';

import { StepSlots } from './StepSlots';
import { StepDevotees } from './StepDevotees';
import { StepReview } from './StepReview';
import { StepSuccess } from './StepSuccess';

export const BookingWizard = ({ templeId, slots, isSlotsLoading }) => {
  const { user } = useContext(AuthContext);
  const wizard = useBookingWizard(templeId);
  const devoteeState = useDevotees();
  const { bookTemple, isBooking, bookingResult } = useBooking(templeId);

  const [showPayment, setShowPayment] = useState(false);
  const [pendingPayload, setPendingPayload] = useState(null);

  const handleBook = () => {
    if (!user) return toast.error('Please login to book Darshan');
    if (!wizard.selectedSlot) return toast.error('Please select a slot');
    if (!devoteeState.isValid) return toast.error('Please fill all details');

    const totalAmount = wizard.selectedSlot.ticketPrice * devoteeState.noOfPersons || 0;
    const payload = {
      templeId,
      slotId: wizard.selectedSlot._id,
      noOfPersons: devoteeState.noOfPersons,
      devoteeDetails: devoteeState.devotees,
      totalAmount
    };

    if (totalAmount > 0) {
      setPendingPayload(payload);
      setShowPayment(true);
    } else {
      bookTemple(payload);
    }
  };

  const handlePaymentSuccess = (paymentDetails) => {
    setShowPayment(false);
    bookTemple({ ...pendingPayload, ...paymentDetails });
  };

  const steps = {
    1: <StepSlots slots={slots} isSlotsLoading={isSlotsLoading} {...wizard} />,
    2: <StepDevotees {...devoteeState} {...wizard} />,
    3: <StepReview 
          {...wizard} 
          {...devoteeState} 
          handleBook={handleBook}
          isBooking={isBooking}
          showPayment={showPayment}
          setShowPayment={setShowPayment}
          handlePaymentSuccess={handlePaymentSuccess}
        />,
    4: <StepSuccess bookingResult={bookingResult} />
  };

  return (
    <div className="booking">
      <div className="strip" />
      <h3 className="title mb-6">Book Darshan</h3>
      
      <AnimatePresence mode="wait">
        {steps[wizard.step]}
      </AnimatePresence>
    </div>
  );
};

`

### client\src\features\booking\components\DevoteeCard.jsx
`jsx
import { Input } from '@/components/ui/Input';

export const DevoteeCard = ({ devotee, index, onChange }) => {
  return (
    <div className="devotee">
      <span className="badge">
        Devotee {index + 1}
      </span>
      <div className="body">
        <Input 
          placeholder="Full Name" 
          value={devotee.name}
          onChange={(e) => onChange(index, 'name', e.target.value)}
        />
        <div className="row-2">
          <Input 
            type="number" 
            placeholder="Age" 
            value={devotee.age}
            onChange={(e) => onChange(index, 'age', e.target.value)}
          />
          <select 
            value={devotee.gender}
            onChange={(e) => onChange(index, 'gender', e.target.value)}
            className="input"
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="row-3">
          <select 
            value={devotee.idProofType}
            onChange={(e) => onChange(index, 'idProofType', e.target.value)}
            className="input col-span-1"
          >
            <option>Aadhar</option>
            <option>PAN</option>
            <option>Passport</option>
          </select>
          <Input 
            placeholder="ID Number" 
            value={devotee.idProofNumber}
            onChange={(e) => onChange(index, 'idProofNumber', e.target.value)}
            containerClassName="col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

`

### client\src\features\booking\components\SlotCard.jsx
`jsx
export const SlotCard = ({ slot, selectedSlot, onSelect }) => {
  const dateObj = new Date(slot.date);
  const isSelected = selectedSlot?._id === slot._id;
  const isSoldOut = slot.availableSeats === 0;

  const stateClass = isSelected 
    ? 'active' 
    : isSoldOut 
      ? 'disabled' 
      : '';

  return (
    <button
      onClick={() => onSelect(slot)}
      disabled={isSoldOut}
      className={`slot ${stateClass}`}
    >
      <div className="header">
        <div className="info">
          <p className="date">
            {dateObj.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}
          </p>
          <p className="time">{slot.startTime} - {slot.endTime}</p>
        </div>
        <span className={`tag ${slot.darshanType === 'VIP' ? 'vip' : 'general'}`}>
          {slot.darshanType}
        </span>
      </div>
      <div className="footer">
        <span className={`seats ${slot.availableSeats < 10 ? 'low' : 'high'}`}>
          {slot.availableSeats} slots left
        </span>
        <span className="price">
          {slot.ticketPrice === 0 ? 'Free' : `₹${slot.ticketPrice}`}
        </span>
      </div>
    </button>
  );
};

`

### client\src\features\booking\components\StepDevotees.jsx
`jsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { DevoteeCard } from './DevoteeCard';
import { StepHeader } from './StepHeader';

export const StepDevotees = ({ 
  selectedSlot, 
  noOfPersons, 
  devotees, 
  updateDevoteeCount, 
  handleDevoteeChange, 
  isValid,
  nextStep, 
  prevStep 
}) => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="devotees-form">
      <StepHeader step={2} onBack={prevStep} />

      <div className="field-group">
        <label className="label">Number of Devotees (Max 5)</label>
        <select 
          value={noOfPersons}
          onChange={(e) => updateDevoteeCount(Number(e.target.value), selectedSlot?.availableSeats)}
          className="input"
        >
          {[1, 2, 3, 4, 5].map(n => (
            <option key={n} value={n} disabled={n > selectedSlot?.availableSeats}>{n}</option>
          ))}
        </select>
      </div>

      <div className="list">
        {devotees.map((devotee, index) => (
          <DevoteeCard 
            key={index} 
            devotee={devotee} 
            index={index} 
            onChange={handleDevoteeChange} 
          />
        ))}
      </div>

      <Button disabled={!isValid} onClick={nextStep} className="w-full mt-6">
        Review Booking
      </Button>
    </motion.div>
  );
};

`

### client\src\features\booking\components\StepHeader.jsx
`jsx
import { ArrowLeft } from '@/icons';

export const StepHeader = ({ step, onBack, title, stepCount = 3 }) => {
  return (
    <div className="step-header">
      <button onClick={onBack} className="back-btn">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back
      </button>
      <span className="badge">
        Step {step} of {stepCount}
      </span>
    </div>
  );
};

`

### client\src\features\booking\components\StepReview.jsx
`jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { StepHeader } from './StepHeader';
import MockPaymentGateway from '@/components/MockPaymentGateway';

export const StepReview = ({ 
  selectedSlot, 
  noOfPersons, 
  prevStep, 
  handleBook, 
  isBooking, 
  showPayment, 
  setShowPayment,
  handlePaymentSuccess 
}) => {
  const totalAmount = selectedSlot.ticketPrice * noOfPersons;

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <StepHeader step={3} onBack={prevStep} />

      <div className="summary">
        <h4 className="title">Booking Summary</h4>
        <div className="list">
          <div className="row">
            <span className="label">Date</span>
            <span className="value">{new Date(selectedSlot.date).toLocaleDateString()}</span>
          </div>
          <div className="row">
            <span className="label">Time</span>
            <span className="value">{selectedSlot.startTime}</span>
          </div>
          <div className="row">
            <span className="label">Type</span>
            <span className="value">{selectedSlot.darshanType}</span>
          </div>
          <div className="row">
            <span className="label">Devotees</span>
            <span className="value">{noOfPersons} Persons</span>
          </div>
          <div className="total-row">
            <span className="total-label">Total Amount</span>
            <span className="total-value">
              ₹{totalAmount}
            </span>
          </div>
        </div>
      </div>

      {showPayment && (
        <MockPaymentGateway 
          amount={totalAmount}
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentCancel={() => setShowPayment(false)}
        />
      )}

      <Button 
        onClick={handleBook}
        isLoading={isBooking}
        disabled={showPayment}
        className="w-full"
      >
        Confirm & Pay
      </Button>
    </motion.div>
  );
};

`

### client\src\features\booking\components\StepSlots.jsx
`jsx
import { motion } from 'framer-motion';
import { Calendar } from '@/icons';
import { Loader } from '@/components/ui/Loader';
import { Button } from '@/components/ui/Button';
import { SlotCard } from './SlotCard';

export const StepSlots = ({ slots, isSlotsLoading, selectedSlot, setSelectedSlot, nextStep }) => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="slots-step">
      <p className="title">
        <Calendar className="slots-step-icon" /> Select Date & Time
      </p>
      
      {isSlotsLoading ? (
        <Loader size={8} />
      ) : slots?.length > 0 ? (
        <div className="slots-step-list">
          {slots.map(slot => (
            <SlotCard 
              key={slot._id} 
              slot={slot} 
              selectedSlot={selectedSlot} 
              onSelect={setSelectedSlot} 
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          No slots available currently.
        </div>
      )}

      <Button disabled={!selectedSlot} onClick={nextStep} className="slots-step-btn">
        Continue
      </Button>
    </motion.div>
  );
};

`

### client\src\features\booking\components\StepSuccess.jsx
`jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Download } from '@/icons';
import { Button } from '@/components/ui/Button';

export const StepSuccess = ({ bookingResult }) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="success">
      <div className="icon-wrapper">
        <CheckCircle className="icon" />
      </div>
      <h3 className="title-spaced">Booking Confirmed!</h3>
      <p className="subtitle">Your darshan slot has been successfully booked.</p>
      
      {bookingResult?.qrCodeUrl && (
        <div className="qr">
          <img src={bookingResult.qrCodeUrl} alt="QR Code" className="image" />
          <p className="text">{bookingResult.ticketNumber}</p>
        </div>
      )}

      <div className="actions">
        <Button className="btn-dark">
          <Download className="btn-icon" /> Download Ticket (PDF)
        </Button>
        <Link to="/dashboard" className="btn-outline-full">
          View My Bookings
        </Link>
      </div>
    </motion.div>
  );
};

`

### client\src\features\booking\hooks\useBooking.js
`js
import { useState } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { bookingService } from '@/services/bookingService';
import { toast } from 'react-toastify';

export const useBooking = (templeId) => {
  const queryClient = useQueryClient();
  const [bookingResult, setBookingResult] = useState(null);

  const bookTempleMutation = useMutation({
    mutationFn: async (payload) => {
      const data = await bookingService.create(payload);
      
      const verifyData = {
        razorpay_order_id: data.orderId,
        razorpay_payment_id: payload.paymentId || 'pay_free_123',
        razorpay_signature: payload.signature || 'sig_free_123',
        bookingId: data.data._id
      };
      
      return bookingService.verify(verifyData);
    },
    onSuccess: (res) => {
      setBookingResult(res.data);
      queryClient.invalidateQueries(['slots', templeId]);
      toast.success('Darshan booked successfully!');
    },
    onError: (err) => {
      toast.error(err.response?.data?.error || 'Booking failed');
    }
  });

  return {
    bookTemple: bookTempleMutation.mutateAsync,
    isBooking: bookTempleMutation.isPending,
    bookingResult
  };
};

`

### client\src\features\booking\hooks\useBookingWizard.js
`js
import { useState } from 'react';

export const useBookingWizard = (templeId) => {
  const [step, setStep] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);
  
  const goToStep = (s) => setStep(s);

  return {
    step,
    templeId,
    selectedSlot,
    setSelectedSlot,
    nextStep,
    prevStep,
    goToStep
  };
};

`

### client\src\features\booking\hooks\useDevotees.js
`js
import { useState } from 'react';

const DEFAULT_DEVOTEE = { name: '', age: '', gender: 'Male', idProofType: 'Aadhar', idProofNumber: '' };

export const useDevotees = () => {
  const [noOfPersons, setNoOfPersons] = useState(1);
  const [devotees, setDevotees] = useState([{ ...DEFAULT_DEVOTEE }]);

  const updateDevoteeCount = (count, maxSlots) => {
    if (count > maxSlots) return;
    setNoOfPersons(count);
    const current = [...devotees];
    if (count > current.length) {
      for (let i = current.length; i < count; i++) {
        current.push({ ...DEFAULT_DEVOTEE });
      }
    } else {
      current.splice(count);
    }
    setDevotees(current);
  };

  const handleDevoteeChange = (index, field, value) => {
    const newDevotees = [...devotees];
    newDevotees[index][field] = value;
    setDevotees(newDevotees);
  };

  const isValid = devotees.every(d => d.name && d.age && d.idProofNumber);

  return {
    noOfPersons,
    devotees,
    updateDevoteeCount,
    handleDevoteeChange,
    isValid
  };
};

`

### client\src\features\booking\index.js
`js
export * from './components/BookingWizard';
export * from './hooks/useBooking';
export * from './hooks/useBookingWizard';
export * from './hooks/useDevotees';

`

### client\src\features\temple\api\templeApi.js
`js
import axiosInstance from '@/api/axiosInstance';

export const templeApi = {
  getAll: async (queryStr = '') => {
    const { data } = await axiosInstance.get(`/temples?${queryStr}`);
    return data;
  },
  
  getById: async (id) => {
    const { data } = await axiosInstance.get(`/temples/${id}`);
    return data.data;
  },

  create: async (templeData) => {
    const { data } = await axiosInstance.post('/temples', templeData);
    return data.data;
  },

  update: async (id, templeData) => {
    const { data } = await axiosInstance.put(`/temples/${id}`, templeData);
    return data.data;
  },

  delete: async (id) => {
    const { data } = await axiosInstance.delete(`/temples/${id}`);
    return data;
  },

  toggleStatus: async (id) => {
    const { data } = await axiosInstance.put(`/temples/${id}/toggle`);
    return data;
  }
};

`

### client\src\features\temple\components\TempleResults.jsx
`jsx
import { TempleCard } from '@/components/temple/TempleCard';
import { Button } from '@/components/ui/Button';
import { DataState } from '@/components/ui/DataState';
import { Filter } from '@/icons';

export const TempleResults = ({ data, isLoading, error, page, handlePageChange }) => {
  return (
    <DataState 
      loading={isLoading}
      error={error}
      empty={data?.data?.length === 0}
      emptyIcon={Filter}
      emptyTitle="No temples found"
      emptyDescription="Try adjusting your search criteria."
      loadingComponent={
        <div className="temple-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card p-0 overflow-hidden animate-pulse">
              <div className="h-56 bg-gray-200" />
              <div className="p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-10 bg-gray-200 rounded w-full mt-4" />
              </div>
            </div>
          ))}
        </div>
      }
    >
      <div className="temple-grid">
        {data?.data?.map((temple, idx) => (
          <TempleCard key={temple._id} temple={temple} idx={idx} />
        ))}
      </div>
      
      {data?.total > 0 && (
        <div className="flex justify-center items-center mt-12 gap-4">
          <Button 
            variant="outline"
            onClick={() => handlePageChange(page - 1)}
            disabled={!data?.pagination?.prev}
          >
            Previous
          </Button>
          <span className="text-gray-600 font-medium text-sm">
            Page {page} of {Math.ceil(data.total / 9)}
          </span>
          <Button 
            variant="outline"
            onClick={() => handlePageChange(page + 1)}
            disabled={!data?.pagination?.next}
          >
            Next
          </Button>
        </div>
      )}
    </DataState>
  );
};

`

### client\src\features\temple\hooks\useTemple.js
`js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { templeApi } from '../api/templeApi';
import { toast } from 'react-toastify';

export const useTemples = (queryStr = '') => {
  return useQuery({
    queryKey: ['temples', queryStr],
    queryFn: () => templeApi.getAll(queryStr),
    keepPreviousData: true
  });
};

export const useTemple = (id) => {
  return useQuery({
    queryKey: ['temple', id],
    queryFn: () => templeApi.getById(id),
    enabled: !!id
  });
};

export const useCreateTemple = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: templeApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries(['temples']);
      toast.success('Temple created successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to create temple');
    }
  });
};

export const useUpdateTemple = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => templeApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['temples']);
      toast.success('Temple updated successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to update temple');
    }
  });
};

export const useDeleteTemple = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: templeApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['temples']);
      toast.success('Temple deleted successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to delete temple');
    }
  });
};

export const useToggleTempleStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: templeApi.toggleStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(['temples']);
      queryClient.invalidateQueries(['adminTemples']);
      toast.success('Temple status updated');
    },
    onError: () => toast.error('Failed to update status')
  });
};

`

### client\src\features\temple\index.js
`js
export * from './api/templeApi';
export * from './hooks/useTemple';
export * from './components/TempleResults';

`

### client\src\hooks\useAdmin.js
`js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminService } from '../services/adminService';
import { toast } from 'react-toastify';

export const useAdminStats = () => {
  return useQuery({
    queryKey: ['adminStats'],
    queryFn: adminService.getStats
  });
};

export const useAdminUsers = () => {
  return useQuery({
    queryKey: ['adminUsers'],
    queryFn: adminService.getUsers
  });
};

export const useUpdateUserRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, role }) => adminService.updateUserRole(id, role),
    onSuccess: () => {
      queryClient.invalidateQueries(['adminUsers']);
      toast.success('User role updated');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to update role');
    }
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: adminService.deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['adminUsers']);
      toast.success('User deleted successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to delete user');
    }
  });
};

`

### client\src\hooks\useBookings.js
`js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { bookingService } from '../services/bookingService';
import { toast } from 'react-toastify';

export const useMyBookings = () => {
  return useQuery({
    queryKey: ['myBookings'],
    queryFn: bookingService.getMyBookings
  });
};

export const useAllBookings = () => {
  return useQuery({
    queryKey: ['allBookings'],
    queryFn: bookingService.getAll
  });
};

export const useCancelBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: bookingService.cancel,
    onSuccess: () => {
      queryClient.invalidateQueries(['myBookings']);
      queryClient.invalidateQueries(['allBookings']);
      toast.success('Booking cancelled successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to cancel booking');
    }
  });
};

`

### client\src\hooks\useDebounce.js
`js
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

`

### client\src\hooks\useDonations.js
`js
import { useQuery } from '@tanstack/react-query';
import { donationService } from '../services/donationService';

export const useDonations = () => {
  return useQuery({
    queryKey: ['adminDonations'],
    queryFn: donationService.getAll
  });
};

`

### client\src\hooks\useReviews.js
`js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { reviewService } from '../services/reviewService';
import { toast } from 'react-toastify';

export const useAllReviews = () => {
  return useQuery({
    queryKey: ['adminReviews'],
    queryFn: reviewService.getAll
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: reviewService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['adminReviews']);
      toast.success('Review deleted successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to delete review');
    }
  });
};

`

### client\src\hooks\useSlots.js
`js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { slotService } from '../services/slotService';
import { toast } from 'react-toastify';

export const useTempleSlots = (templeId) => {
  return useQuery({
    queryKey: ['slots', templeId],
    queryFn: () => slotService.getByTempleId(templeId),
    enabled: !!templeId
  });
};

export const useAllSlots = () => {
  return useQuery({
    queryKey: ['adminSlots'],
    queryFn: slotService.getAll
  });
};

export const useCreateSlot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: slotService.create,
    onSuccess: () => {
      queryClient.invalidateQueries(['adminSlots']);
      queryClient.invalidateQueries(['slots']);
      toast.success('Slot created successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to create slot');
    }
  });
};

export const useDeleteSlot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: slotService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['adminSlots']);
      queryClient.invalidateQueries(['slots']);
      toast.success('Slot deleted successfully');
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to delete slot');
    }
  });
};

`

### client\src\icons.js
`js
// Centralized icon exports for the entire application
export {
  Search,
  MapPin,
  Filter,
  Star,
  Clock,
  Calendar,
  Users,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Activity,
  Edit2,
  Trash2,
  Plus,
  LogOut,
  User,
  Shield,
  Settings,
  Bell,
  Database,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  IndianRupee,
  MoreVertical,
  Flag,
  Heart,
  Loader2,
  Send,
  Sparkles,
  Bot,
  Ticket,
  Power,
  Building2,
  FileText,
  Image as ImageIcon,
  Ban,
  Eye,
  Landmark,
  Save,
  Upload,
  ArrowLeft,
  History,
  CheckCircle,
  XCircle,
  ArrowRight
} from 'lucide-react';

`

### client\src\index.css
`css
@import "tailwindcss";

@theme {
  --color-saffron-50: #fff9f0;
  --color-saffron-100: #fff0d6;
  --color-saffron-500: #ff9933;
  --color-saffron-600: #e67e22;
  --color-saffron-700: #cc6600;
  --color-saffron-800: #b35900;
  --color-saffron-900: #7a3e00;

  --color-gold-400: #f1c40f;
  --color-gold-500: #d4af37;

  --color-maroon-700: #800000;
  --color-maroon-900: #4a0000;

  --color-ivory-100: #fffff0;
  --color-ivory-200: #fdf5e6;

  --color-darkbrown-800: #3e2723;
  --color-darkbrown-900: #261714;

  --font-sans: "Poppins", "Inter", sans-serif;
  --font-serif: "Cinzel", "Georgia", serif;
}

@layer base {
  body {
    @apply antialiased text-darkbrown-900 bg-ivory-100 font-sans;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-serif font-semibold;
  }
}

@layer components {
  /* Layout */
  .page {
    @apply min-h-screen bg-gray-50 pt-24 pb-12 px-4 md:px-8;
  }
  
  .section {
    @apply max-w-7xl mx-auto;
  }
  
  /* Typography */
  .title {
    @apply text-4xl md:text-5xl font-serif font-bold text-darkbrown-800;
  }
  
  .subtitle {
    @apply text-gray-600 max-w-2xl mt-4;
  }

  /* Section Header */
  .section-head {
    @apply text-center mb-12 pt-8;
  }

  .section-divider {
    @apply h-1 w-24 bg-saffron-500 mx-auto rounded-full mb-6;
  }

  /* Cards */
  .card {
    @apply bg-white rounded-2xl border border-gray-100 shadow-sm p-6;
  }

  .card-hover {
    @apply hover:shadow-xl transition-all duration-300;
  }

  .stats-card {
    @apply rounded-3xl p-6 shadow-lg relative overflow-hidden bg-gradient-to-br from-saffron-500 to-saffron-600 text-white;
  }

  .glass-card {
    @apply bg-white/70 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-6;
  }
  
  /* Buttons */
  .btn {
    @apply flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed;
  }

  .btn-primary {
    @apply flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-saffron-500 to-saffron-600 text-white hover:shadow-lg hover:-translate-y-0.5;
  }

  .btn-secondary {
    @apply flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-white text-darkbrown-900 border border-saffron-100 hover:bg-saffron-50 hover:shadow-md hover:-translate-y-0.5;
  }

  .btn-outline {
    @apply flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-transparent border border-gray-200 text-gray-700 hover:bg-gray-50;
  }

  .btn-danger {
    @apply flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-red-50 text-red-600 hover:bg-red-100 border border-transparent;
  }

  /* Forms & Inputs */
  .input {
    @apply w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-shadow;
  }

  /* Badges */
  .badge {
    @apply px-3 py-1 rounded-full text-xs font-semibold flex items-center w-fit shadow-sm;
  }

  .badge-success {
    @apply bg-green-100 text-green-700;
  }

  .badge-warning {
    @apply bg-yellow-100 text-yellow-700;
  }

  .badge-danger {
    @apply bg-red-100 text-red-700;
  }

  .badge-primary {
    @apply bg-saffron-100 text-saffron-800;
  }

  /* Tables */
  .table-container {
    @apply bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden;
  }

  .table-header {
    @apply text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100 px-6 py-4 font-semibold;
  }

  .table-row {
    @apply hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0;
  }
  
  .table-cell {
    @apply px-6 py-4;
  }

  /* Home Hero */
  .home-hero {
    @apply relative h-[90vh] flex items-center justify-center overflow-hidden;
  }

  .home-hero .image-container {
    @apply absolute inset-0 z-0;
  }

  .home-hero .image {
    @apply w-full h-full object-cover object-center filter brightness-[0.6] sepia-[0.3];
  }

  .home-hero .overlay {
    @apply absolute inset-0 bg-gradient-to-t from-darkbrown-900 via-transparent to-transparent opacity-80;
  }

  .home-hero .content {
    @apply relative z-10 text-center px-4 max-w-4xl mx-auto mt-20;
  }

  .home-hero .title {
    @apply text-5xl md:text-7xl font-serif text-ivory-100 font-bold mb-6 tracking-wide drop-shadow-lg;
  }
  
  .home-hero .title-highlight {
    @apply text-saffron-500;
  }

  .home-hero .subtitle {
    @apply text-lg md:text-xl text-ivory-200 mb-10 max-w-2xl mx-auto font-light;
  }

  .home-search {
    @apply flex flex-col md:flex-row gap-3 justify-center items-center max-w-2xl mx-auto bg-white/10 p-2 rounded-3xl backdrop-blur-md border border-white/20;
  }
  
  .home-search .input-wrapper {
    @apply relative w-full md:flex-1;
  }
  
  .home-search .icon {
    @apply absolute left-4 top-3.5 text-gray-300 w-5 h-5;
  }

  .home-search .input {
    @apply w-full pl-12 pr-4 py-3 bg-white/20 text-white placeholder-gray-200 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:bg-white/30 transition-all;
  }
  
  .home-search .btn {
    @apply w-full md:w-auto py-3 whitespace-nowrap;
  }

  /* Featured Temples */
  .featured-section {
    @apply py-24 px-4 md:px-8;
  }

  .featured-section .header {
    @apply text-center mb-16;
  }

  .featured-section .title {
    @apply text-4xl font-serif font-bold text-darkbrown-900 mb-4;
  }
  
  .featured-section .divider {
    @apply h-1 w-24 bg-saffron-500 mx-auto rounded-full mb-6;
  }

  .featured-section .subtitle {
    @apply text-gray-500 mx-auto text-lg max-w-2xl;
  }

  .featured-section .grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
  }
  
  .featured-section .footer {
    @apply mt-16 text-center;
  }
  
  .featured-section .loading {
    @apply py-20 flex justify-center;
  }

  /* Features / Why Choose Us */
  .features {
    @apply bg-darkbrown-900 text-ivory-100 py-24 px-4 md:px-8;
  }

  .features .container {
    @apply max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center;
  }

  .features .title {
    @apply text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight;
  }

  .features .subtitle {
    @apply text-gray-300 mb-8 text-lg leading-relaxed;
  }

  .features .list {
    @apply space-y-6;
  }

  .features .item {
    @apply flex items-start;
  }

  .features .text-content {
    @apply ml-4;
  }
  
  .features .item-title {
    @apply text-xl font-medium text-white;
  }
  
  .features .item-desc {
    @apply mt-1 text-gray-400;
  }

  .features .icon-box {
    @apply flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-saffron-500/20 flex items-center justify-center border border-saffron-500/50;
  }

  .features .icon {
    @apply w-2.5 h-2.5 rounded-full bg-saffron-500;
  }

  .features .image-wrapper {
    @apply relative rounded-3xl overflow-hidden shadow-2xl h-[600px];
  }

  .features .image {
    @apply w-full h-full object-cover;
  }
  
  .features .image-overlay {
    @apply absolute inset-0 bg-gradient-to-t from-darkbrown-900/90 to-transparent;
  }

  .features .testimonial {
    @apply absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl;
  }
  
  .features .testimonial-quote {
    @apply italic text-lg font-serif text-white;
  }
  
  .features .testimonial-author {
    @apply mt-4 font-medium text-saffron-500;
  }

  /* Temple List Page */
  .temple-list-page {
    @apply min-h-screen bg-gradient-to-b from-amber-50 to-orange-50/30;
  }

  .temple-list-hero {
    @apply relative bg-darkbrown-900 text-white py-20 px-4 text-center overflow-hidden;
  }

  .temple-list-hero::before {
    content: '';
    @apply absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614810267578-3c43f539a2e4?auto=format&fit=crop&q=60&w=1200')] bg-cover bg-center opacity-20;
  }

  .temple-list-hero .content {
    @apply relative z-10;
  }

  .temple-list-hero .title {
    @apply text-4xl md:text-6xl font-serif font-bold mb-4 text-white;
  }

  .temple-list-hero .subtitle {
    @apply text-amber-100 text-lg max-w-2xl mx-auto;
  }

  /* Temple Grid */
  .temple-grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8;
  }

  /* Temple Card */
  .temple-card {
    @apply bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 relative;
  }
  
  .temple-card .image-wrapper {
    @apply h-56 relative overflow-hidden;
  }
  
  .temple-card .image {
    @apply w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700;
  }
  
  .temple-card .rating {
    @apply absolute top-4 right-4 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-sm font-medium text-darkbrown-800 flex items-center shadow-sm;
  }
  
  .temple-card .category {
    @apply absolute top-4 left-4 bg-saffron-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm;
  }
  
  .temple-card .body {
    @apply p-6 flex flex-col flex-grow;
  }
  
  .temple-card .name {
    @apply text-xl font-serif font-bold text-darkbrown-800 line-clamp-1;
  }
  
  .temple-card .city {
    @apply flex items-center text-gray-500 text-sm mt-2 mb-4;
  }
  
  .temple-card .desc {
    @apply text-gray-600 text-sm line-clamp-2 mb-4 flex-grow;
  }
  
  .temple-card .footer {
    @apply flex justify-between items-center border-t border-gray-100 pt-4 mt-auto;
  }
  
  .temple-card .time {
    @apply flex items-center text-xs text-gray-500 font-medium;
  }
  
  .temple-card .btn {
    @apply text-saffron-600 hover:text-saffron-700 font-semibold text-sm;
  }

  /* Temple Hero */
  .hero {
    @apply h-[50vh] relative;
  }

  .hero .image {
    @apply w-full h-full object-cover;
  }

  .hero .overlay {
    @apply absolute inset-0 bg-gradient-to-t from-darkbrown-900 via-darkbrown-900/60 to-transparent;
  }

  .hero .content {
    @apply absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto;
  }

  .hero .back-link {
    @apply text-ivory-200 hover:text-white flex items-center mb-4 text-sm font-medium transition-colors;
  }

  .hero .category {
    @apply bg-saffron-500 text-white text-xs px-3 py-1 rounded-full font-semibold tracking-wide uppercase;
  }

  .hero .title {
    @apply text-4xl md:text-6xl font-serif font-bold text-white mb-2;
  }

  .hero .location {
    @apply text-ivory-200 flex items-center text-lg;
  }

  /* Temple Info */
  .info {
    @apply space-y-12;
  }

  .title {
    @apply text-3xl font-serif font-bold text-darkbrown-800 mb-6 flex items-center;
  }

  .card {
    @apply bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100;
  }

  .text {
    @apply text-gray-600 leading-relaxed text-lg;
  }

  .stats {
    @apply grid grid-cols-1 md:grid-cols-2 gap-6 bg-ivory-100/50 p-6 rounded-2xl border border-ivory-200;
  }

  .label {
    @apply text-xs text-gray-500 uppercase font-semibold block mb-1;
  }

  .value {
    @apply text-darkbrown-800 font-medium text-lg flex items-center;
  }

  .tag {
    @apply text-xs bg-white border border-gray-200 px-3 py-1 rounded-full text-darkbrown-800 flex items-center;
  }

  /* Booking Wizard */
  .booking {
    @apply sticky top-24 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden;
  }

  .booking .strip {
    @apply absolute top-0 left-0 w-full h-2 bg-saffron-500;
  }

  .booking .title {
    @apply text-2xl font-serif font-bold text-darkbrown-900;
  }

  .slots {
    @apply space-y-3;
  }
  
  .slots-step .title {
    @apply text-sm font-medium text-gray-700 mb-4 flex items-center;
  }
  
  .slots-step .empty {
    @apply text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500;
  }

  .slot {
    @apply w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200;
  }

  .slot.active {
    @apply border-saffron-500 bg-saffron-50;
  }

  .slot:not(.active):not(:disabled) {
    @apply border-gray-200 hover:border-saffron-500 hover:bg-gray-50;
  }

  .slot:disabled {
    @apply opacity-50 cursor-not-allowed bg-gray-50 border-gray-200;
  }
  
  .slot .header {
    @apply flex justify-between items-start mb-2 w-full;
  }
  
  .slot .info {
    @apply text-left;
  }
  
  .slot .date {
    @apply font-semibold text-darkbrown-800;
  }
  
  .slot .time {
    @apply text-sm text-gray-500;
  }
  
  .slot .tag {
    @apply text-xs px-2.5 py-1 rounded-full font-medium;
  }
  
  .slot .tag.vip {
    @apply bg-purple-100 text-purple-700;
  }
  
  .slot .tag.general {
    @apply bg-green-100 text-green-700;
  }
  
  .slot .footer {
    @apply flex justify-between items-center text-sm w-full;
  }
  
  .slot .seats {
    @apply font-medium;
  }
  
  .slot .seats.low {
    @apply text-red-500;
  }
  
  .slot .seats.high {
    @apply text-saffron-600;
  }
  
  .slot .price {
    @apply font-bold text-darkbrown-900;
  }
  
  .step-header {
    @apply flex items-center justify-between mb-4;
  }
  
  .step-header .back-btn {
    @apply text-sm text-gray-500 hover:text-darkbrown-800 flex items-center;
  }
  
  .step-header .badge {
    @apply text-xs font-semibold bg-saffron-100 text-saffron-800 px-3 py-1 rounded-full;
  }

  .devotees-form .field-group {
    @apply mb-6;
  }
  
  .devotees-form .label {
    @apply block text-sm font-medium text-gray-700 mb-2;
  }
  
  .devotees-form .list {
    @apply space-y-6 max-h-[50vh] overflow-y-auto pr-2;
  }

  .devotee {
    @apply bg-ivory-100/50 border border-ivory-200 p-5 rounded-2xl mb-6 relative;
  }
  
  .devotee .badge {
    @apply absolute -top-3 left-4 bg-white px-2 text-xs font-bold text-saffron-600 border border-saffron-100 rounded-full;
  }
  
  .devotee .body {
    @apply mt-2 space-y-4;
  }
  
  .devotee .row-2 {
    @apply grid grid-cols-2 gap-3;
  }
  
  .devotee .row-3 {
    @apply grid grid-cols-3 gap-3;
  }

  .summary {
    @apply bg-ivory-100/50 border border-ivory-200 p-5 rounded-2xl mb-6;
  }
  
  .summary .title {
    @apply font-semibold text-darkbrown-900 mb-4 border-b border-gray-200 pb-2;
  }
  
  .summary .list {
    @apply space-y-3 text-sm;
  }
  
  .summary .row {
    @apply flex justify-between;
  }
  
  .summary .label {
    @apply text-gray-500;
  }
  
  .summary .value {
    @apply font-medium;
  }
  
  .summary .total-row {
    @apply border-t border-gray-200 pt-3 mt-3 flex justify-between items-center;
  }
  
  .summary .total-label {
    @apply text-gray-700 font-semibold;
  }
  
  .summary .total-value {
    @apply text-xl font-bold text-saffron-600;
  }

  .success {
    @apply text-center py-8;
  }
  
  .success .icon-wrapper {
    @apply w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6;
  }
  
  .success .icon {
    @apply w-10 h-10 text-green-500;
  }
  
  .success .subtitle {
    @apply text-gray-500 mb-8;
  }
  
  .success .actions {
    @apply space-y-3 flex flex-col;
  }

  .qr {
    @apply bg-white p-4 inline-block rounded-xl border border-gray-200 shadow-sm mb-6;
  }
  
  .qr .image {
    @apply w-32 h-32 mx-auto;
  }
  
  .qr .text {
    @apply text-xs font-mono mt-2 text-gray-500;
  }

  /* Navbar */
  .navbar {
    @apply bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50;
  }
  .navbar-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  .navbar-content {
    @apply flex justify-between h-20 items-center;
  }
  .navbar-brand {
    @apply flex items-center;
  }
  .navbar-logo {
    @apply text-2xl font-serif font-bold text-darkbrown-900 tracking-tight;
  }
  .navbar-logo-highlight {
    @apply text-saffron-600;
  }
  .navbar-links {
    @apply flex items-center space-x-6;
  }
  .navbar-link {
    @apply text-gray-600 hover:text-saffron-600 font-medium transition-colors;
  }
  .navbar-btn-logout {
    @apply ml-2;
  }
  .navbar-btn-signup {
    @apply ml-2 shadow-md shadow-saffron-500/20;
  }

  /* Mock Payment Gateway */
  .payment-modal-overlay {
    @apply fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4;
  }
  .payment-modal {
    @apply bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative;
  }
  .payment-modal-header {
    @apply bg-darkbrown-900 p-6 text-center;
  }
  .payment-modal-icon {
    @apply w-10 h-10 text-saffron-500 mx-auto mb-2;
  }
  .payment-modal-title {
    @apply text-xl font-semibold text-white;
  }
  .payment-modal-subtitle {
    @apply text-gray-400 text-sm mt-1;
  }
  .payment-modal-body {
    @apply p-8;
  }
  .payment-modal-amount-row {
    @apply flex justify-between items-center mb-8 border-b border-gray-100 pb-6;
  }
  .payment-modal-amount-label {
    @apply text-gray-500 font-medium;
  }
  .payment-modal-amount-value {
    @apply text-3xl font-bold text-darkbrown-900;
  }
  .payment-modal-idle {
    @apply space-y-4;
  }
  .payment-modal-card {
    @apply bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4;
  }
  .payment-modal-card-icon-wrapper {
    @apply w-12 h-8 bg-gray-200 rounded flex items-center justify-center;
  }
  .payment-modal-card-icon {
    @apply text-gray-500 w-5 h-5;
  }
  .payment-modal-card-info {
    @apply flex-1;
  }
  .payment-modal-card-number {
    @apply font-medium text-darkbrown-900 text-sm;
  }
  .payment-modal-card-type {
    @apply text-xs text-gray-500;
  }
  .payment-modal-actions {
    @apply flex gap-3 pt-4;
  }
  .payment-modal-btn-cancel {
    @apply flex-1;
  }
  .payment-modal-btn-pay {
    @apply flex-[2] shadow-lg shadow-saffron-600/30;
  }
  .payment-modal-processing {
    @apply text-center py-8;
  }
  .payment-modal-progress-wrapper {
    @apply relative w-20 h-20 mx-auto mb-6;
  }
  .payment-modal-progress-svg {
    @apply w-full h-full;
  }
  .payment-modal-progress-bg {
    @apply text-gray-100 stroke-current;
  }
  .payment-modal-progress-fg {
    @apply text-saffron-500 stroke-current;
  }
  .payment-modal-progress-text {
    @apply absolute inset-0 flex items-center justify-center text-lg font-bold text-darkbrown-900;
  }
  .payment-modal-processing-title {
    @apply text-lg font-semibold text-darkbrown-900 mb-1;
  }
  .payment-modal-processing-desc {
    @apply text-sm text-gray-500;
  }
  .payment-modal-success {
    @apply text-center py-8;
  }
  .payment-modal-success-icon-wrapper {
    @apply w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6;
  }
  .payment-modal-success-icon {
    @apply w-10 h-10 text-green-500;
  }
  .payment-modal-success-title {
    @apply text-xl font-bold text-darkbrown-900 mb-1;
  }
  .payment-modal-success-desc {
    @apply text-sm text-gray-500 mb-2;
  }

  /* Home Temple Card */
  .home-temple-card {
    @apply bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300;
  }
  .home-temple-card-image-wrapper {
    @apply relative h-64 overflow-hidden;
  }
  .home-temple-card-image {
    @apply w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110;
  }
  .home-temple-card-rating {
    @apply absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-darkbrown-800 flex items-center gap-1 shadow;
  }
  .home-temple-card-rating-icon {
    @apply w-4 h-4 text-gold-500 fill-gold-500;
  }
  .home-temple-card-overlay {
    @apply absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6;
  }
  .home-temple-card-title {
    @apply text-2xl font-serif text-white font-bold tracking-wide;
  }
  .home-temple-card-location {
    @apply flex items-center text-gray-200 mt-2 text-sm;
  }
  .home-temple-card-location-icon {
    @apply w-4 h-4 mr-1;
  }
  .home-temple-card-info {
    @apply p-6;
  }
  .home-temple-card-desc {
    @apply text-gray-600 line-clamp-3 mb-6 leading-relaxed;
  }
  .home-temple-card-footer {
    @apply flex items-center justify-between border-t border-gray-100 pt-4;
  }
  .home-temple-card-timings-label {
    @apply text-xs text-gray-500 uppercase font-semibold tracking-wider;
  }
  .home-temple-card-timings-value {
    @apply text-sm text-darkbrown-800 font-medium mt-1 flex items-center;
  }
  .home-temple-card-timings-icon {
    @apply w-4 h-4 mr-1 text-saffron-500;
  }
  .home-temple-card-btn {
    @apply text-saffron-600 font-medium flex items-center hover:text-saffron-700 transition-colors;
  }
  .home-temple-card-btn-icon {
    @apply w-4 h-4 ml-1;
  }

  /* Step Specific Additions */
  .slots-step-icon {
    @apply w-4 h-4 mr-2 text-saffron-500;
  }
  .slots-step-list {
    @apply max-h-80 overflow-y-auto pr-2 flex flex-col;
  }
  .slots-step-btn {
    @apply w-full mt-6;
  }
  
  .success .title-spaced {
    @apply text-2xl font-semibold text-darkbrown-900 mb-2;
  }
  .btn-dark {
    @apply flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm bg-darkbrown-900 text-white hover:bg-darkbrown-800;
  }
  .btn-icon {
    @apply w-4 h-4 mr-2;
  }
  .btn-outline-full {
    @apply flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-transparent border border-gray-200 text-gray-700 hover:bg-gray-50 w-full text-center;
  }
}

`

### client\src\layouts\AdminLayout.jsx
`jsx
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { LayoutDashboard, Building2, CalendarDays, Ticket, Users, FileText, Settings, Heart, LogOut } from 'lucide-react';
import { useEffect } from 'react';

const AdminLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'ADMIN') {
      navigate('/login');
    }
  }, [user, navigate]);

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Temple Management', path: '/admin/temples', icon: <Building2 size={20} /> },
    { name: 'Slot Management', path: '/admin/slots', icon: <CalendarDays size={20} /> },
    { name: 'Booking Management', path: '/admin/bookings', icon: <Ticket size={20} /> },
    { name: 'Donations', path: '/admin/donations', icon: <Heart size={20} /> },
    { name: 'Users', path: '/admin/users', icon: <Users size={20} /> },
    { name: 'Reviews', path: '/admin/reviews', icon: <FileText size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  if (!user) return null;

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-darkbrown-900 text-ivory-50 flex flex-col shadow-2xl">
        <div className="h-16 flex items-center px-6 border-b border-darkbrown-800">
          <Link to="/" className="text-xl font-serif font-bold text-saffron-500 tracking-wider">
            DarshanEase <span className="text-xs text-gray-400 align-top">ADMIN</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => {
              const isActive = location.pathname.includes(item.path);
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive ? 'bg-saffron-600 text-white font-medium' : 'text-gray-300 hover:bg-darkbrown-800 hover:text-white'
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-darkbrown-800">
          <button
            onClick={() => logout()}
            className="flex items-center gap-3 px-3 py-2.5 w-full text-left text-gray-400 hover:text-white hover:bg-darkbrown-800 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            <span className="text-sm">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-lg font-serif font-semibold text-darkbrown-900">
            {navItems.find(i => location.pathname.includes(i.path))?.name || 'Admin Panel'}
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center font-bold">
              {user.name.charAt(0)}
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="p-8 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

`

### client\src\main.jsx
`jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)

`

### client\src\pages\admin\AdminBookings.jsx
`jsx
import { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { toast } from 'react-toastify';
import { useAllBookings, useCancelBooking } from '../../hooks/useBookings';
import { PageHeader } from '../../components/ui/PageHeader';
import { PageLoader } from '../../components/ui/Loader';
import { Input } from '../../components/ui/Input';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Search, Download, Ban, Eye } from '../../icons';

const AdminBookings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  
  const { data: bookings, isLoading } = useAllBookings();
  const cancelMutation = useCancelBooking();

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this booking? This will refund the amount and restore the slot capacity.')) {
      cancelMutation.mutate(id);
    }
  };

  const exportToPDF = () => {
    if (!bookings || bookings.length === 0) {
      toast.error('No data to export');
      return;
    }
    
    const doc = new jsPDF();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('DarshanEase - All Bookings Report', 14, 20);
    
    const tableData = bookings.map(b => [
      b.ticketNumber || 'N/A',
      b.userId?.name || 'Guest',
      b.templeId?.name || 'Unknown',
      new Date(b.slotId?.date).toLocaleDateString(),
      b.noOfPersons,
      `Rs ${b.totalAmount}`,
      b.bookingStatus
    ]);
    
    doc.autoTable({
      startY: 30,
      head: [['Ticket ID', 'Devotee', 'Temple', 'Date', 'Persons', 'Amount', 'Status']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [249, 115, 22] }
    });
    
    doc.save('DarshanEase_Bookings.pdf');
  };

  if (isLoading) return <PageLoader />;

  const filteredBookings = bookings?.filter(b => {
    const matchesSearch = 
      b.ticketNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.userId?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.templeId?.name?.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === 'ALL' || b.bookingStatus === statusFilter;
    
    return matchesSearch && matchesStatus;
  }) || [];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Booking Management"
        subtitle="Monitor and manage all user reservations and tickets."
        action={
          <Button variant="outline" onClick={exportToPDF}>
            <Download className="w-4 h-4 mr-2" /> Export PDF
          </Button>
        }
      />

      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="w-full md:w-80">
              <Input 
                icon={Search}
                type="text" 
                placeholder="Search Ticket, Name, or Temple..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input md:w-auto"
            >
              <option value="ALL">All Statuses</option>
              <option value="CONFIRMED">Confirmed</option>
              <option value="CANCELLED">Cancelled</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
          <div className="text-sm font-medium text-gray-500">
            Total Bookings: {filteredBookings.length}
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>Ticket ID</Th>
              <Th>Devotee & Temple</Th>
              <Th>Date & Time</Th>
              <Th>Details</Th>
              <Th className="text-center">Status</Th>
              <Th className="text-right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredBookings.map(b => (
              <Tr key={b._id}>
                <Td className="font-mono font-medium text-saffron-600">
                  {b.ticketNumber || 'N/A'}
                </Td>
                <Td>
                  <div className="font-semibold text-darkbrown-900">{b.userId?.name || 'Guest'}</div>
                  <div className="text-xs text-gray-500">{b.templeId?.name}</div>
                </Td>
                <Td className="text-gray-600">
                  {b.slotId ? (
                    <>
                      <div className="font-medium">{new Date(b.slotId.date).toLocaleDateString()}</div>
                      <div className="text-xs">{b.slotId.startTime} - {b.slotId.endTime}</div>
                    </>
                  ) : 'Slot Not Found'}
                </Td>
                <Td>
                  <div className="text-darkbrown-900 font-medium">{b.noOfPersons} Persons</div>
                  <div className="text-xs font-bold text-gray-500">₹{b.totalAmount}</div>
                </Td>
                <Td>
                  <div className="flex justify-center">
                    <Badge variant={
                      b.bookingStatus === 'CONFIRMED' ? 'success' : 
                      b.bookingStatus === 'CANCELLED' ? 'danger' : 'info'
                    }>
                      {b.bookingStatus}
                    </Badge>
                  </div>
                </Td>
                <Td>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" className="!p-2 text-gray-600 border-gray-200 hover:bg-gray-100" title="View Details">
                      <Eye className="w-4 h-4" />
                    </Button>
                    {b.bookingStatus !== 'CANCELLED' && (
                      <Button variant="danger" className="!p-2" onClick={() => handleCancel(b._id)} title="Force Cancel">
                        <Ban className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </Td>
              </Tr>
            ))}
            
            {filteredBookings.length === 0 && (
              <Tr>
                <Td colSpan="6" className="text-center text-gray-500 py-8">
                  No bookings found matching your criteria.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminBookings;

`

### client\src\pages\admin\AdminDashboard.jsx
`jsx
import { Link } from 'react-router-dom';
import { useAdminStats } from '../../hooks/useAdmin';
import { PageLoader } from '../../components/ui/Loader';
import { EmptyState } from '../../components/ui/EmptyState';
import { PageHeader } from '../../components/ui/PageHeader';
import { Badge } from '../../components/ui/Badge';
import { AdminStatCard } from "../../components/admin/AdminStatCard";
import { AdminChart } from "../../components/admin/AdminChart";
import { Users, Ticket, IndianRupee, Landmark } from '../../icons';

const AdminDashboard = () => {
  const { data: stats, isLoading, error } = useAdminStats();

  if (isLoading) return <PageLoader />;
  if (error) return (
    <div className="p-6 bg-red-50 text-red-600 rounded-xl">
      Error loading dashboard stats. Make sure you have Admin privileges.
    </div>
  );

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Dashboard Overview"
        subtitle="Welcome to DarshanEase Admin Control Center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStatCard title="Total Revenue" value={`₹${stats.totalRevenue.toLocaleString()}`} icon={IndianRupee} trend="+12.5%" />
        <AdminStatCard title="Total Bookings" value={stats.totalBookings} icon={Ticket} trend="+5.2%" />
        <AdminStatCard title="Total Users" value={stats.totalUsers} icon={Users} trend="+18.1%" />
        <AdminStatCard title="Active Temples" value={stats.totalTemples} icon={Landmark} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <AdminChart data={stats.bookingsTrend} />
        </div>

        <div className="lg:col-span-1 card overflow-hidden flex flex-col p-0">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-darkbrown-900">Recent Bookings</h2>
            <Link to="/admin/bookings" className="text-sm text-saffron-600 hover:text-saffron-700 font-medium">View All</Link>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {stats.recentBookings.length === 0 ? (
              <EmptyState description="No recent bookings." className="border-none shadow-none" />
            ) : (
              stats.recentBookings.map(booking => (
                <div key={booking._id} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-darkbrown-900 text-sm truncate w-32">{booking.templeId?.name || 'Unknown Temple'}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{booking.userId?.name || 'Guest User'}</p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-1">
                    <Badge variant={
                      booking.bookingStatus === 'CONFIRMED' ? 'success' :
                      booking.bookingStatus === 'CANCELLED' ? 'danger' : 'warning'
                    }>
                      {booking.bookingStatus}
                    </Badge>
                    <p className="text-xs font-bold text-darkbrown-900">₹{booking.totalAmount}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

`

### client\src\pages\admin\AdminDonations.jsx
`jsx
import { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useDonations } from '../../hooks/useDonations';
import { PageHeader } from '../../components/ui/PageHeader';
import { PageLoader } from '../../components/ui/Loader';
import { Input } from '../../components/ui/Input';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Search, Heart, Download } from '../../icons';

const AdminDonations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: donations, isLoading } = useDonations();

  const exportToPDF = () => {
    if (!donations || donations.length === 0) return;
    
    const doc = new jsPDF();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('DarshanEase - Donations Report', 14, 20);
    
    const tableData = donations.map(d => [
      d.transactionId || 'N/A',
      d.userId?.name || 'Anonymous',
      d.templeId?.name || 'General Fund',
      `Rs ${d.amount}`,
      d.purpose || 'General',
      new Date(d.createdAt).toLocaleDateString()
    ]);
    
    doc.autoTable({
      startY: 30,
      head: [['Txn ID', 'Donor', 'Temple/Fund', 'Amount', 'Purpose', 'Date']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [249, 115, 22] }
    });
    
    doc.save('DarshanEase_Donations.pdf');
  };

  if (isLoading) return <PageLoader />;

  const filteredDonations = donations?.filter(d => 
    d.userId?.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.templeId?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.transactionId?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const totalAmount = filteredDonations.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Donation Management"
        subtitle="Track and manage temple donations and contributions."
        action={
          <Button variant="outline" onClick={exportToPDF}>
            <Download className="w-4 h-4 mr-2" /> Export Report
          </Button>
        }
      />

      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-96">
            <Input 
              icon={Search}
              type="text" 
              placeholder="Search by Donor, Temple, or Txn ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-6">
            <div className="text-sm">
              <span className="text-gray-500 block">Total Donations:</span>
              <span className="font-bold text-darkbrown-900">{filteredDonations.length}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-500 block">Total Amount:</span>
              <span className="font-bold text-saffron-600">₹{totalAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>Transaction ID</Th>
              <Th>Donor Details</Th>
              <Th>Temple / Fund</Th>
              <Th>Amount & Purpose</Th>
              <Th>Date</Th>
              <Th className="text-center">Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredDonations.map(d => (
              <Tr key={d._id}>
                <Td className="font-mono font-medium text-gray-600">
                  {d.transactionId || 'N/A'}
                </Td>
                <Td>
                  <div className="font-semibold text-darkbrown-900">{d.userId?.name || 'Anonymous Donor'}</div>
                  {d.userId?.email && <div className="text-xs text-gray-500">{d.userId.email}</div>}
                </Td>
                <Td className="text-gray-700 font-medium">
                  {d.templeId?.name || 'General Fund'}
                </Td>
                <Td>
                  <div className="font-bold text-saffron-600">₹{d.amount}</div>
                  <div className="text-xs text-gray-500 capitalize">{d.purpose || 'General'}</div>
                </Td>
                <Td className="text-gray-600">
                  {new Date(d.createdAt).toLocaleDateString()}
                </Td>
                <Td>
                  <div className="flex justify-center">
                    <Badge variant="success" icon={Heart}>
                      SUCCESS
                    </Badge>
                  </div>
                </Td>
              </Tr>
            ))}
            {filteredDonations.length === 0 && (
              <Tr>
                <Td colSpan="6" className="text-center text-gray-500 py-8">
                  No donations found matching your search.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminDonations;

`

### client\src\pages\admin\AdminReviews.jsx
`jsx
import { useState } from 'react';
import { useAllReviews, useDeleteReview } from '../../hooks/useReviews';
import { PageHeader } from '../../components/ui/PageHeader';
import { PageLoader } from '../../components/ui/Loader';
import { Input } from '../../components/ui/Input';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Search, Trash2, Star, Flag } from '../../icons';

const AdminReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: reviews, isLoading } = useAllReviews();
  const deleteMutation = useDeleteReview();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this review? This affects the temple average rating.')) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) return <PageLoader />;

  const filteredReviews = reviews?.filter(r => 
    r.review.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.userId?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.templeId?.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Review Moderation"
        subtitle="Monitor and moderate user reviews across all temples."
      />

      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-96">
            <Input 
              icon={Search}
              type="text" 
              placeholder="Search Review Text, User, or Temple..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-sm font-medium text-gray-500">
            Total Reviews: {filteredReviews.length}
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>User & Temple</Th>
              <Th>Rating</Th>
              <Th>Review</Th>
              <Th>Date</Th>
              <Th className="text-right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredReviews.map(r => (
              <Tr key={r._id}>
                <Td>
                  <div className="font-semibold text-darkbrown-900">{r.userId?.name || 'Unknown User'}</div>
                  <div className="text-xs text-gray-500">{r.templeId?.name || 'Unknown Temple'}</div>
                </Td>
                <Td>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-gold-400 fill-gold-400 mr-1" />
                    <span className="font-bold text-darkbrown-900">{r.rating}.0</span>
                  </div>
                </Td>
                <Td>
                  <p className="text-gray-600 line-clamp-2 max-w-md" title={r.review}>
                    {r.review}
                  </p>
                </Td>
                <Td className="text-gray-600">
                  {new Date(r.createdAt).toLocaleDateString()}
                </Td>
                <Td>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" className="!p-2 text-yellow-600 border-yellow-200 hover:bg-yellow-50" title="Flag Review">
                      <Flag className="w-4 h-4" />
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(r._id)} className="!p-2" title="Delete Review">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Td>
              </Tr>
            ))}
            {filteredReviews.length === 0 && (
              <Tr>
                <Td colSpan="5" className="text-center text-gray-500 py-8">
                  No reviews found.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminReviews;

`

### client\src\pages\admin\AdminSettings.jsx
`jsx
import { useState } from 'react';
import { toast } from 'react-toastify';
import { PageHeader } from '../../components/ui/PageHeader';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Save, Settings, Shield, Bell, Database } from '../../icons';

const AdminSettings = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Settings saved successfully');
    }, 1000);
  };

  const navItems = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'database', label: 'System & Data', icon: Database },
  ];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Platform Settings"
        subtitle="Manage global configurations for DarshanEase."
        action={
          <Button onClick={handleSave} isLoading={loading} className="shadow-lg shadow-saffron-500/20">
            <Save className="w-4 h-4 mr-2" /> Save Changes
          </Button>
        }
      />

      <div className="card p-0 flex flex-col md:flex-row min-h-[500px]">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-50/50 border-r border-gray-100 p-4">
          <nav className="space-y-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button 
                key={id}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  activeTab === id ? 'bg-saffron-100 text-saffron-800' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4 mr-3" /> {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          {activeTab === 'general' && (
            <div className="max-w-2xl space-y-6 animate-in fade-in">
              <h2 className="text-xl font-bold text-darkbrown-900 mb-6">General Settings</h2>
              
              <Input label="Platform Name" defaultValue="DarshanEase" />
              <Input label="Contact Email" type="email" defaultValue="support@darshanease.com" />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Platform Status</label>
                <select className="input">
                  <option>Active</option>
                  <option>Maintenance Mode</option>
                </select>
                <p className="text-xs text-gray-500 mt-2">Setting to Maintenance Mode will prevent non-admins from logging in.</p>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="max-w-2xl space-y-6 animate-in fade-in">
              <h2 className="text-xl font-bold text-darkbrown-900 mb-6">Security Settings</h2>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                  <h3 className="font-semibold text-darkbrown-900">Require Two-Factor Auth for Admins</h3>
                  <p className="text-sm text-gray-500 mt-1">Enhance security for privileged accounts.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-saffron-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                  <h3 className="font-semibold text-darkbrown-900">Strict Rate Limiting</h3>
                  <p className="text-sm text-gray-500 mt-1">Limit requests to prevent DDoS attacks.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-saffron-500"></div>
                </label>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="max-w-2xl space-y-6 animate-in fade-in">
              <h2 className="text-xl font-bold text-darkbrown-900 mb-6">Email & SMS Settings</h2>
              
              <Input label="SMTP Host" defaultValue="smtp.sendgrid.net" />
              
              <div className="flex gap-4">
                <Input label="SMTP Port" defaultValue="587" containerClassName="flex-1" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">SMS Gateway</label>
                  <select className="input">
                    <option>Twilio</option>
                    <option>MSG91</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'database' && (
            <div className="max-w-2xl space-y-6 animate-in fade-in">
              <h2 className="text-xl font-bold text-darkbrown-900 mb-6">System Status</h2>
              
              <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl flex items-start">
                <Database className="w-6 h-6 text-blue-500 mr-3 shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900">Database Connection: Healthy</h3>
                  <p className="text-sm text-blue-700 mt-1">MongoDB cluster is running perfectly. Latency is &lt; 20ms.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold text-red-600 mb-2">Danger Zone</h3>
                <p className="text-sm text-gray-500 mb-4">Once you delete data, there is no going back. Please be certain.</p>
                <Button variant="danger" className="border-red-200 bg-white">
                  Purge Old Logs
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;

`

### client\src\pages\admin\AdminSlots.jsx
`jsx
import { useState } from 'react';
import { useAllSlots, useDeleteSlot } from '../../hooks/useSlots';
import { PageHeader } from '../../components/ui/PageHeader';
import { PageLoader } from '../../components/ui/Loader';
import { Input } from '../../components/ui/Input';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Calendar, Clock, Plus, Edit2, Trash2, Search } from '../../icons';

const AdminSlots = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: slots, isLoading } = useAllSlots();
  const deleteMutation = useDeleteSlot();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this slot? This action cannot be undone.')) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) return <PageLoader />;

  const filteredSlots = slots?.filter(slot => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      slot.templeId?.name?.toLowerCase().includes(term) ||
      slot.darshanType.toLowerCase().includes(term)
    );
  }) || [];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Slot Management"
        subtitle="Manage daily Darshan availability across all temples."
        action={
          <Button className="shadow-lg shadow-saffron-500/20">
            <Plus className="w-4 h-4 mr-2" /> Add New Slot
          </Button>
        }
      />

      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-96">
            <Input 
              icon={Search}
              type="text" 
              placeholder="Search by Temple or Darshan Type..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-sm font-medium text-gray-500">
            Total Slots: {filteredSlots.length}
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>Temple</Th>
              <Th>Date & Time</Th>
              <Th>Type</Th>
              <Th className="text-right">Capacity</Th>
              <Th className="text-center">Status</Th>
              <Th className="text-right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredSlots.map(slot => {
              const date = new Date(slot.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
              return (
                <Tr key={slot._id}>
                  <Td className="font-medium text-darkbrown-900">
                    {slot.templeId?.name || 'Unknown Temple'}
                  </Td>
                  <Td className="text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1.5 text-gray-400" /> {date}
                    </div>
                    <div className="flex items-center text-xs mt-1">
                      <Clock className="w-3 h-3 mr-1.5 text-gray-400" /> {slot.startTime} - {slot.endTime}
                    </div>
                  </Td>
                  <Td>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg text-xs font-medium">
                      {slot.darshanType}
                    </span>
                  </Td>
                  <Td className="text-right">
                    <div className="font-semibold text-darkbrown-900">{slot.availableSeats} <span className="text-gray-400 text-xs font-normal">avail</span></div>
                    <div className="text-xs text-gray-500 mt-1">{slot.totalCapacity} total</div>
                  </Td>
                  <Td>
                    <div className="flex justify-center">
                      <Badge variant={slot.status === 'AVAILABLE' ? 'success' : 'danger'}>
                        {slot.status}
                      </Badge>
                    </div>
                  </Td>
                  <Td>
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" className="!p-2 text-blue-600 border-blue-200 hover:bg-blue-50" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="danger" className="!p-2" onClick={() => handleDelete(slot._id)} title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </Td>
                </Tr>
              );
            })}
            
            {filteredSlots.length === 0 && (
              <Tr>
                <Td colSpan="6" className="text-center text-gray-500 py-8">
                  No darshan slots found matching your criteria.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminSlots;

`

### client\src\pages\admin\AdminTempleForm.jsx
`jsx
import { useState, useRef } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useCreateTemple, useUpdateTemple } from '@/features/temple';
import { toast } from 'react-toastify';
import { Upload, X, Save, Building2, FileText, ImageIcon } from '../../icons';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const AdminTempleForm = ({ temple, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: temple?.name || '',
    city: temple?.city || '',
    state: temple?.state || '',
    address: temple?.address || '',
    description: temple?.description || '',
    history: temple?.history || '',
    architecture: temple?.architecture || '',
    deity: temple?.deity || '',
    openingTime: temple?.openingTime || '',
    closingTime: temple?.closingTime || '',
    dressCode: temple?.dressCode || '',
    categories: temple?.categories || [],
    facilities: temple?.facilities || [],
    nearbyAttractions: temple?.nearbyAttractions || [],
    featuredImage: temple?.featuredImage || '',
    galleryImages: temple?.galleryImages || [],
    isFeatured: temple?.isFeatured || false,
    isActive: temple?.isActive !== undefined ? temple?.isActive : true,
    coordinates: {
      lat: temple?.coordinates?.lat || '',
      lng: temple?.coordinates?.lng || ''
    }
  });

  const fileInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  const createMutation = useCreateTemple();
  const updateMutation = useUpdateTemple();

  const handleUpload = async (e, type) => {
    const files = e.target.files;
    if (!files.length) return;
    
    const uploadData = new FormData();
    if (type === 'single') {
      uploadData.append('image', files[0]);
    } else {
      Array.from(files).forEach(f => uploadData.append('images', f));
    }

    setLoading(true);
    try {
      const url = type === 'single' ? '/upload' : '/upload/multiple';
      const { data } = await axiosInstance.post(url, uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (type === 'single') {
        setFormData(prev => ({ ...prev, featuredImage: data.data }));
      } else {
        setFormData(prev => ({ ...prev, galleryImages: [...prev.galleryImages, ...data.data] }));
      }
      toast.success('Images uploaded successfully');
    } catch (err) {
      toast.error('Image upload failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (temple) {
      updateMutation.mutate({ id: temple._id, data: formData }, { onSuccess: onClose });
    } else {
      createMutation.mutate(formData, { onSuccess: onClose });
    }
  };

  const isMutating = createMutation.isLoading || updateMutation.isLoading || loading;

  return (
    <div className="card p-8">
      <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-serif font-bold text-darkbrown-900">
          {temple ? 'Edit Temple' : 'Create New Temple'}
        </h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X className="text-gray-500 w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Core Info */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Building2 className="mr-2 w-5 h-5 text-saffron-500"/> Core Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Temple Name *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <Input label="Primary Deity *" required value={formData.deity} onChange={e => setFormData({...formData, deity: e.target.value})} />
            <Input label="City *" required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
            <Input label="State *" required value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} />
          </div>
        </section>

        {/* Long Text */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FileText className="mr-2 w-5 h-5 text-saffron-500"/> Rich Content
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea required rows="3" className="input" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">History & Heritage</label>
              <textarea rows="4" className="input" value={formData.history} onChange={e => setFormData({...formData, history: e.target.value})} />
            </div>
          </div>
        </section>

        {/* Media */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <ImageIcon className="mr-2 w-5 h-5 text-saffron-500"/> Media Gallery
          </h3>
          <div className="space-y-6 bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
              <div className="flex items-center gap-4">
                {formData.featuredImage && <img src={formData.featuredImage} alt="Featured" className="w-20 h-20 rounded-lg object-cover shadow-sm" />}
                <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                  <Upload className="w-4 h-4 mr-2" /> {formData.featuredImage ? 'Replace Image' : 'Upload Image'}
                </Button>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={(e) => handleUpload(e, 'single')} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gallery Images</label>
              <div className="flex flex-wrap gap-4 mb-4">
                {formData.galleryImages.map((img, i) => (
                  <div key={i} className="relative group">
                    <img src={img} alt={`Gallery ${i}`} className="w-20 h-20 rounded-lg object-cover shadow-sm" />
                    <button type="button" onClick={() => setFormData({...formData, galleryImages: formData.galleryImages.filter((_, idx) => idx !== i)})} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
              <Button type="button" variant="outline" onClick={() => galleryInputRef.current?.click()}>
                <Upload className="w-4 h-4 mr-2" /> Upload Multiple
              </Button>
              <input type="file" ref={galleryInputRef} className="hidden" accept="image/*" multiple onChange={(e) => handleUpload(e, 'multiple')} />
            </div>
          </div>
        </section>

        {/* Save */}
        <div className="flex justify-end gap-4 border-t border-gray-100 pt-6">
          <Button type="button" variant="outline" onClick={onClose} className="px-6 border-transparent hover:bg-gray-100">
            Cancel
          </Button>
          <Button type="submit" isLoading={isMutating} className="px-8 bg-darkbrown-900 hover:bg-darkbrown-800">
            {!isMutating && <Save className="w-5 h-5 mr-2" />}
            Save Temple
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminTempleForm;

`

### client\src\pages\admin\AdminTemples.jsx
`jsx
import { useState } from 'react';
import { useTemples, useDeleteTemple, useToggleTempleStatus } from '@/features/temple';
import { PageHeader } from '../../components/ui/PageHeader';
import { PageLoader } from '../../components/ui/Loader';
import { Input } from '../../components/ui/Input';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Plus, Search, Edit2, Trash2, Power } from '../../icons';
import AdminTempleForm from './AdminTempleForm';

const AdminTemples = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTemple, setEditingTemple] = useState(null);

  const { data: templesData, isLoading } = useTemples('limit=100');
  const temples = templesData?.data || templesData;
  
  const toggleStatusMutation = useToggleTempleStatus();
  const deleteMutation = useDeleteTemple();

  const handleEdit = (temple) => {
    setEditingTemple(temple);
    setIsFormOpen(true);
  };

  const handleAddNew = () => {
    setEditingTemple(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingTemple(null);
  };

  const templesArray = templesData?.data || [];
  const filteredTemples = templesArray.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <PageLoader />;

  if (isFormOpen) {
    return <AdminTempleForm temple={editingTemple} onClose={handleCloseForm} />;
  }

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Temple Management"
        subtitle="Manage temples, their details, and status."
        action={
          <Button onClick={handleAddNew}>
            <Plus className="w-4 h-4 mr-2" /> Add New Temple
          </Button>
        }
      />

      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
          <div className="w-full md:w-96">
            <Input 
              icon={Search}
              type="text" 
              placeholder="Search temples by name or city..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>Temple Details</Th>
              <Th>Location</Th>
              <Th>Status</Th>
              <Th>Rating</Th>
              <Th className="text-right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredTemples.map(temple => (
              <Tr key={temple._id}>
                <Td>
                  <div className="flex items-center gap-4">
                    <img src={temple.featuredImage || '/placeholder.jpg'} alt={temple.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="font-semibold text-gray-900">{temple.name}</p>
                      <p className="text-xs text-gray-500">{temple._id.substring(18)}</p>
                    </div>
                  </div>
                </Td>
                <Td>
                  <p className="text-sm text-gray-800">{temple.city}</p>
                  <p className="text-xs text-gray-500">{temple.state}</p>
                </Td>
                <Td>
                  <Badge variant={temple.isActive ? 'success' : 'danger'}>
                    {temple.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </Td>
                <Td className="text-gray-600">
                  {temple.ratings} ({temple.reviewsCount})
                </Td>
                <Td>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" className="!p-2 text-blue-600 border-blue-200 hover:bg-blue-50" onClick={() => handleEdit(temple)} title="Edit">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" className={`!p-2 ${temple.isActive ? 'text-orange-600 border-orange-200 hover:bg-orange-50' : 'text-green-600 border-green-200 hover:bg-green-50'}`} onClick={() => toggleStatusMutation.mutate(temple._id)} title="Toggle Status">
                      <Power className="w-4 h-4" />
                    </Button>
                    <Button variant="danger" className="!p-2" onClick={() => { if(window.confirm('Delete this temple?')) deleteMutation.mutate(temple._id) }} title="Delete">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Td>
              </Tr>
            ))}
            {filteredTemples.length === 0 && (
              <Tr>
                <Td colSpan="5" className="text-center text-gray-500 py-8">
                  No temples found.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminTemples;

`

### client\src\pages\admin\AdminUsers.jsx
`jsx
import { useState } from 'react';
import { useAdminUsers, useUpdateUserRole, useDeleteUser } from '../../hooks/useAdmin';
import { PageHeader } from '../../components/ui/PageHeader';
import { PageLoader } from '../../components/ui/Loader';
import { Input } from '../../components/ui/Input';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Search, Trash2, Shield, Mail, Calendar } from '../../icons';

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: users, isLoading } = useAdminUsers();
  const updateRoleMutation = useUpdateUserRole();
  const deleteMutation = useDeleteUser();

  const handleRoleChange = (id, newRole) => updateRoleMutation.mutate({ id, role: newRole });
  
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to permanently delete this user account?')) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) return <PageLoader />;

  const filteredUsers = users?.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="User Management"
        subtitle="Manage devotees, organizers, and administrative accounts."
      />

      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-96">
            <Input 
              icon={Search}
              type="text" 
              placeholder="Search by Name or Email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-sm font-medium text-gray-500">
            Total Users: {filteredUsers.length}
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>User Details</Th>
              <Th>Contact</Th>
              <Th>Joined Date</Th>
              <Th>Role</Th>
              <Th className="text-right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredUsers.map(u => (
              <Tr key={u._id}>
                <Td>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-700 font-bold mr-3">
                      {u.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-darkbrown-900">{u.name}</div>
                      <div className="text-xs text-gray-500 font-mono mt-0.5">ID: {u._id.substring(18)}</div>
                    </div>
                  </div>
                </Td>
                <Td>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-3 h-3 mr-1.5 text-gray-400" /> {u.email}
                  </div>
                  {u.phone && <div className="text-xs text-gray-500 mt-1">{u.phone}</div>}
                </Td>
                <Td>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-3 h-3 mr-1.5 text-gray-400" />
                    {new Date(u.createdAt).toLocaleDateString()}
                  </div>
                </Td>
                <Td>
                  <div className="flex items-center">
                    <Shield className={`w-4 h-4 mr-2 ${
                      u.role === 'ADMIN' ? 'text-purple-500' : 
                      u.role === 'ORGANIZER' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u._id, e.target.value)}
                      className="bg-transparent text-sm font-medium focus:outline-none focus:ring-2 focus:ring-saffron-500 rounded px-1 py-0.5"
                    >
                      <option value="USER">User</option>
                      <option value="ORGANIZER">Organizer</option>
                      <option value="ADMIN">Admin</option>
                    </select>
                  </div>
                </Td>
                <Td>
                  <div className="flex justify-end">
                    <Button variant="danger" onClick={() => handleDelete(u._id)} className="!p-2">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Td>
              </Tr>
            ))}
            {filteredUsers.length === 0 && (
              <Tr>
                <Td colSpan="5" className="text-center text-gray-500 py-8">
                  No users found matching your search.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminUsers;

`

### client\src\pages\Dashboard.jsx
`jsx
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { useMyBookings, useAllBookings, useCancelBooking } from '../hooks/useBookings';
import { DashboardHeader, DashboardStats } from '../components/dashboard/DashboardHeader';
import { BookingCard } from '../components/dashboard/BookingCard';
import { Loader } from '../components/ui/Loader';
import { EmptyState } from '../components/ui/EmptyState';
import { Ticket } from '../icons';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const isPrivileged = user?.role === 'ADMIN' || user?.role === 'ORGANIZER';

  const myBookingsQuery = useMyBookings();
  const allBookingsQuery = useAllBookings();
  const cancelMutation = useCancelBooking();

  if (!user) return <div className="text-center py-24 text-gray-500">Please login to view dashboard.</div>;

  const bookingsToDisplay = isPrivileged ? allBookingsQuery.data : myBookingsQuery.data;
  const isLoading = isPrivileged ? allBookingsQuery.isLoading : myBookingsQuery.isLoading;

  const generateChartData = () => {
    if (!allBookingsQuery.data) return [];
    
    const grouped = allBookingsQuery.data.reduce((acc, curr) => {
      const date = new Date(curr.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
      acc[date] = (acc[date] || 0) + curr.totalAmount;
      return acc;
    }, {});

    return Object.keys(grouped).map(date => ({
      date,
      revenue: grouped[date]
    })).slice(-7);
  };

  return (
    <div className="page">
      <div className="section">
        <DashboardHeader user={user} isPrivileged={isPrivileged} />

        {isPrivileged && (
          <DashboardStats 
            allBookings={allBookingsQuery.data} 
            chartData={generateChartData()} 
          />
        )}

        <div className="card p-0 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-2xl font-serif font-bold text-darkbrown-800">
              {isPrivileged ? 'Recent Bookings' : 'Your Bookings'}
            </h2>
          </div>

          {isLoading ? (
            <Loader />
          ) : bookingsToDisplay?.length === 0 ? (
            <EmptyState 
              icon={Ticket}
              title="No bookings found"
              className="border-none shadow-none"
            />
          ) : (
            <div className="divide-y divide-gray-100">
              {bookingsToDisplay?.map((booking) => (
                <BookingCard 
                  key={booking._id} 
                  booking={booking} 
                  isPrivileged={isPrivileged}
                  onCancel={(id) => cancelMutation.mutate(id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

`

### client\src\pages\Home.jsx
`jsx
import { HomeHero } from '../components/home/HomeHero';
import { FeaturedTemples } from '../components/home/FeaturedTemples';
import { WhyChooseUs } from '../components/home/WhyChooseUs';

const Home = () => {
  return (
    <div className="min-h-screen bg-ivory-100 font-sans text-darkbrown-900">
      <HomeHero />
      <FeaturedTemples />
      <WhyChooseUs />
    </div>
  );
};

export default Home;

`

### client\src\pages\Login.jsx
`jsx
import { AuthLayout } from '@/components/layout/AuthLayout';
import { AuthCard } from '@/components/layout/AuthCard';
import { LoginForm } from '@/features/auth/components/LoginForm';

const Login = () => {
  return (
    <AuthLayout>
      <AuthCard 
        title="Welcome Back" 
        subtitle="Sign in to your DarshanEase account"
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default Login;

`

### client\src\pages\Register.jsx
`jsx
import { AuthLayout } from '@/components/layout/AuthLayout';
import { AuthCard } from '@/components/layout/AuthCard';
import { RegisterForm } from '@/features/auth/components/RegisterForm';

const Register = () => {
  return (
    <AuthLayout>
      <AuthCard 
        title="Create an Account" 
        subtitle="Join DarshanEase to book priority darshan"
      >
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default Register;

`

### client\src\pages\TempleDetails.jsx
`jsx
import { useParams } from 'react-router-dom';
import { useTemple } from '@/features/temple';
import { useTempleSlots } from '@/hooks/useSlots';
import { Page } from '@/components/layout/Page';
import { ContentLayout } from '@/components/layout/ContentLayout';
import { MainContent } from '@/components/layout/MainContent';
import { Sidebar } from '@/components/layout/Sidebar';
import { TempleHero } from '@/components/temple/TempleHero';
import { TempleInfo } from '@/components/temple/TempleInfo';
import { BookingWizard } from '@/features/booking';
import { DataState } from '@/components/ui/DataState';

const TempleDetails = () => {
  const { id } = useParams();
  
  const { data: temple, isLoading: isTempleLoading, error } = useTemple(id);
  const { data: slots, isLoading: isSlotsLoading } = useTempleSlots(id);

  return (
    <Page>
      <DataState 
        loading={isTempleLoading} 
        error={error} 
        empty={!temple}
        emptyTitle="Temple not found"
      >
        <TempleHero temple={temple} />

        <ContentLayout>
          <MainContent>
            <TempleInfo temple={temple} />
          </MainContent>

          <Sidebar>
            <BookingWizard 
              templeId={id} 
              slots={slots} 
              isSlotsLoading={isSlotsLoading} 
            />
          </Sidebar>
        </ContentLayout>
      </DataState>
    </Page>
  );
};

export default TempleDetails;

`

### client\src\pages\TempleList.jsx
`jsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter } from '@/icons';
import useDebounce from '@/hooks/useDebounce';
import { useTemples } from '@/features/temple';
import { Page } from '@/components/layout/Page';
import { TempleResults } from '@/features/temple/components/TempleResults';
import { Button } from '@/components/ui/Button';

const TempleList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);
  
  const [localSearch, setLocalSearch] = useState(search);
  const debouncedSearchTerm = useDebounce(localSearch, 500);

  useEffect(() => {
    if (debouncedSearchTerm !== search) {
      setSearchParams({ search: debouncedSearchTerm, page: 1 });
    }
  }, [debouncedSearchTerm, search, setSearchParams]);

  const queryStr = new URLSearchParams();
  if (debouncedSearchTerm) queryStr.append('search', debouncedSearchTerm);
  queryStr.append('page', page);
  queryStr.append('limit', 9);

  const { data, isLoading, error } = useTemples(queryStr.toString());

  const handlePageChange = (newPage) => {
    const params = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...params, page: newPage });
  };

  return (
    <Page>
      {/* Hero Banner */}
      <div className="relative bg-darkbrown-900 text-white py-24 px-4 text-center overflow-hidden -mt-0">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1614810267578-3c43f539a2e4?auto=format&fit=crop&q=80&w=1400"
            alt="Temples"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-darkbrown-900/70 via-darkbrown-900/50 to-darkbrown-900/90" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-saffron-500" />
            <span className="text-saffron-400 text-sm font-medium tracking-widest uppercase">Sacred Destinations</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-white leading-tight">
            Discover <span className="text-saffron-500">Temples</span>
          </h1>
          <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
            Book your darshan slots at India's most sacred temples. Guaranteed entry, zero wait time.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search by temple name, city, or state..."
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white text-darkbrown-900 placeholder-gray-400 shadow-2xl focus:outline-none focus:ring-2 focus:ring-saffron-500 text-base"
            />
            {localSearch && (
              <button
                onClick={() => setLocalSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="flex items-center justify-between py-6 border-b border-gray-200 mb-2">
          <p className="text-gray-600 text-sm">
            {isLoading ? 'Loading temples...' : `Showing ${data?.count ?? 0} of ${data?.total ?? 0} temples`}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="w-4 h-4" />
            <span>All Temples</span>
          </div>
        </div>

        <TempleResults 
          data={data}
          isLoading={isLoading}
          error={error}
          page={page}
          handlePageChange={handlePageChange}
        />
      </div>
    </Page>
  );
};

export default TempleList;

`

### client\src\services\adminService.js
`js
import axiosInstance from '../api/axiosInstance';

export const adminService = {
  getStats: async () => {
    const { data } = await axiosInstance.get('/admin/stats');
    return data.data;
  },

  getUsers: async () => {
    const { data } = await axiosInstance.get('/admin/users');
    return data.data;
  },

  updateUserRole: async (id, role) => {
    const { data } = await axiosInstance.put(`/admin/users/${id}/role`, { role });
    return data;
  },

  deleteUser: async (id) => {
    const { data } = await axiosInstance.delete(`/admin/users/${id}`);
    return data;
  }
};

`

### client\src\services\bookingService.js
`js
import axiosInstance from '../api/axiosInstance';

export const bookingService = {
  getMyBookings: async () => {
    const { data } = await axiosInstance.get('/bookings/mybookings');
    return data.data;
  },

  create: async (bookingData) => {
    const { data } = await axiosInstance.post('/bookings', bookingData);
    return data.data;
  },

  verify: async (verifyData) => {
    const { data } = await axiosInstance.post('/bookings/verify', verifyData);
    return data;
  },

  cancel: async (id) => {
    const { data } = await axiosInstance.put(`/bookings/${id}/cancel`);
    return data.data;
  },

  getAll: async () => {
    const { data } = await axiosInstance.get('/bookings');
    return data.data;
  }
};

`

### client\src\services\donationService.js
`js
import axiosInstance from '../api/axiosInstance';

export const donationService = {
  getAll: async () => {
    const { data } = await axiosInstance.get('/admin/donations');
    return data.data;
  }
};

`

### client\src\services\reviewService.js
`js
import axiosInstance from '../api/axiosInstance';

export const reviewService = {
  getAll: async () => {
    const { data } = await axiosInstance.get('/reviews');
    return data.data;
  },

  delete: async (id) => {
    const { data } = await axiosInstance.delete(`/reviews/${id}`);
    return data;
  }
};

`

### client\src\services\slotService.js
`js
import axiosInstance from '../api/axiosInstance';

export const slotService = {
  getByTempleId: async (templeId) => {
    const { data } = await axiosInstance.get(`/slots/temple/${templeId}`);
    return data.data;
  },

  getAll: async () => {
    const { data } = await axiosInstance.get('/slots');
    return data.data;
  },

  create: async (slotData) => {
    const { data } = await axiosInstance.post('/slots', slotData);
    return data.data;
  },

  update: async (id, slotData) => {
    const { data } = await axiosInstance.put(`/slots/${id}`, slotData);
    return data.data;
  },

  delete: async (id) => {
    const { data } = await axiosInstance.delete(`/slots/${id}`);
    return data;
  }
};

`

### client\src\utils\generatePDF.js
`js
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generateTicketPDF = (booking, temple) => {
  const doc = new jsPDF();
  
  // Colors & Styles
  const primaryColor = [180, 83, 9]; // Saffron
  const darkColor = [63, 39, 14]; // Dark Brown
  
  // Header Background
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, 210, 40, 'F');
  
  // Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('DarshanEase E-Ticket', 105, 25, { align: 'center' });
  
  // Temple Info
  doc.setTextColor(...darkColor);
  doc.setFontSize(16);
  doc.text(temple.name, 20, 55);
  
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`${temple.city}, ${temple.state}`, 20, 62);
  
  // Booking Details Section
  doc.setDrawColor(200, 200, 200);
  doc.line(20, 70, 190, 70);
  
  doc.setFontSize(12);
  doc.setTextColor(...darkColor);
  doc.setFont('helvetica', 'bold');
  doc.text('Booking Information', 20, 80);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  const slotDate = new Date(booking.slotId?.date).toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  
  doc.text(`Ticket Number: ${booking.ticketNumber}`, 20, 90);
  doc.text(`Darshan Type: ${booking.slotId?.darshanType || 'General'}`, 20, 98);
  doc.text(`Date: ${slotDate}`, 20, 106);
  doc.text(`Time: ${booking.slotId?.startTime} - ${booking.slotId?.endTime}`, 20, 114);
  doc.text(`No. of Persons: ${booking.noOfPersons}`, 20, 122);
  doc.text(`Total Paid: INR ${booking.totalAmount}`, 20, 130);
  
  // QR Code (If data URL exists)
  if (booking.qrCodeUrl) {
    doc.addImage(booking.qrCodeUrl, 'PNG', 140, 75, 50, 50);
  }
  
  // Devotee Details Table
  doc.text('Devotee Details:', 20, 145);
  const devoteeBody = booking.devoteeDetails?.map((d, i) => [
    i + 1,
    d.name,
    d.age,
    d.gender,
    d.idProof
  ]) || [];
  
  doc.autoTable({
    startY: 150,
    head: [['#', 'Name', 'Age', 'Gender', 'ID Proof']],
    body: devoteeBody,
    theme: 'grid',
    headStyles: { fillColor: primaryColor },
    margin: { left: 20, right: 20 }
  });
  
  // Instructions
  const finalY = doc.lastAutoTable.finalY || 150;
  doc.setFont('helvetica', 'bold');
  doc.text('Important Instructions:', 20, finalY + 15);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  
  const instructions = [
    '1. Please carry a printed copy or digital copy of this ticket.',
    '2. Bring the original ID proofs mentioned in the devotee details.',
    '3. Report at the entrance at least 30 minutes before the slot time.',
    `4. Dress Code: ${temple.dressCode || 'Traditional wear required. No shorts or sleeveless tops.'}`,
    '5. Electronic items, mobile phones, and cameras are strictly prohibited inside the main sanctum.'
  ];
  
  let currentY = finalY + 22;
  instructions.forEach(inst => {
    doc.text(inst, 20, currentY);
    currentY += 6;
  });
  
  // Footer
  doc.setTextColor(150, 150, 150);
  doc.setFontSize(8);
  doc.text('Generated by DarshanEase Booking System. For support, visit www.darshanease.com', 105, 285, { align: 'center' });
  
  // Download
  doc.save(`${booking.ticketNumber}_${temple.name.replace(/\s+/g, '_')}.pdf`);
};

`


## 5. Booking Flow
- **TempleBookingWizard:** Guides user through Slot Selection -> Devotee Details -> Review & Pay -> Success.
- **React Query:** Uses useMutation in useBooking.js to trigger the booking creation and payment verification.
- **bookingService:** Calls POST /api/bookings to create the booking (returns Razorpay order ID). Then calls POST /api/bookings/verify with payment signature.
- **bookingController:**
  - createBooking: Validates slot availability, creates Mock Razorpay order, saves Payment & Booking with status PENDING.
  - erifyPayment: Validates payment signature, generates a unique ticket number, creates a QR code (base64 string), marks booking as CONFIRMED, and subtracts 
oOfPersons from DarshanSlot.availableSeats.
- **Ticket Generation:** Frontend generatePDF.js takes the booking details and creates a downloadable PDF with the QR code embedded.

## 6. Authentication Flow
- **Login & Register:** User submits credentials to POST /api/auth/login or egister. Backend verifies/creates user, generates a JWT token, and returns { success, data: { ...user, token } }.
- **JWT:** The frontend AuthContext stores the user object (with token) in localStorage('userInfo'). xiosInstance.js automatically attaches this token to the Authorization: Bearer <token> header of every subsequent request.
- **Protected Routes:** ProtectedRoute.jsx checks if user exists in context. If not, it redirects to /login.
- **Admin Routes:** For paths like /admin/*, ProtectedRoute also checks if user.role === "ADMIN" or "ORGANIZER" before granting access.

## 7. Database Schemas
MongoDB with Mongoose. Key models:
- **User:** { name, email, password, role: [USER, ADMIN, ORGANIZER] }
- **Temple:** { name, description, city, state, featuredImage, galleryImages, ratings, reviews, organizerId (ref: User) }
- **DarshanSlot:** { templeId (ref: Temple), date, startTime, endTime, darshanType, availableSeats, bookedSeats, ticketPrice }
- **Booking:** { userId (ref: User), templeId (ref: Temple), slotId (ref: DarshanSlot), noOfPersons, devoteeDetails: [{ name, age, gender, idProof }], totalAmount, paymentStatus, bookingStatus, ticketNumber, qrCodeUrl }
- **Payment:** { userId, razorpayOrderId, amount, status: [PENDING, SUCCESS] }
- **Review:** { templeId, userId, rating, review }

## 8. Seeder Logic
- **seeder.js:** Wipes all collections. Creates 3 base users (Admin, Organizer, Normal). Loads temples from 	emples.json. For each temple, creates 30 days of DarshanSlot records across 5 different darshan types (VIP, General, etc.). It currently creates 1 fake review per temple.

## 9. API Routes
- **Auth:** POST /api/auth/register, POST /api/auth/login, GET /api/auth/profile
- **Temples:** GET /api/temples, GET /api/temples/:id, POST /api/temples, PUT /api/temples/:id
- **Slots:** GET /api/slots/temple/:templeId, POST /api/slots
- **Bookings:** POST /api/bookings (Create), POST /api/bookings/verify, GET /api/bookings/mybookings, GET /api/bookings (All), PUT /api/bookings/:id/cancel
- **Reviews:** GET /api/reviews/temple/:templeId, POST /api/reviews

## 10. Environment Variables
`env
PORT=
MONGO_URI=
NODE_ENV=
JWT_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
`

## 11. Current Known Issues
- duplicate booking (React Strict mode double-fires MockPaymentGateway success callback)
- payment verification runs twice (subtracts slots twice)
- placeholder URLs in temples.json instead of real temple images
- fake/anomalous ratings (e.g. 4.97081... instead of 4.9)
- fake review counts
- missing real reviews
- missing idempotency locks on booking verification
- UI states (empty slots, loading images) need better fallbacks

## 12. Final Summary
- **Project Architecture:** MERN stack (MongoDB, Express, React, Node.js). Frontend built with Vite, Tailwind CSS, Framer Motion, and React Query. Backend uses Express 5, Mongoose, and JWT authentication.
- **Feature List:** Auth, Role-based Dashboards (User/Admin), Temple browsing/searching, Slot filtering by date/type, Multi-step Darshan Booking wizard, Mock Payment Gateway, PDF Ticket Generation with QR codes, Review system.
