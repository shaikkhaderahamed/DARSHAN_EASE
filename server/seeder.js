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
        phoneNumber: '9999999999'
      },
      {
        name: 'Temple Organizer',
        email: 'organizer@darshanease.com',
        password: 'password123',
        role: 'ORGANIZER',
        phoneNumber: '8888888888'
      },
      {
        name: 'Normal User',
        email: 'user@darshanease.com',
        password: 'password123',
        role: 'USER',
        phoneNumber: '9876543212'
      },
      ...Array.from({length: 30}).map((_, i) => ({
        name: ['Rahul Sharma', 'Priya Patel', 'Amit Kumar', 'Sneha Reddy', 'Vikram Singh', 'Ananya Gupta', 'Rajesh Rao', 'Kavita Iyer', 'Suresh Babu', 'Meera Nair', 'Aditya Verma', 'Nisha Desai', 'Ramesh Krishnan', 'Pooja Joshi', 'Manoj Tiwari'][i % 15] + ' ' + (i > 14 ? 'Jr.' : ''),
        email: 'reviewer' + i + '@darshanease.com',
        password: 'password123',
        role: 'USER',
        phoneNumber: '9' + Math.floor(100000000 + Math.random() * 900000000)
      }))
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
      const reviewsPool = [
        'The darshan was very well managed and the temple atmosphere was divine.',
        'Online booking saved us several hours in queue.',
        'Very clean surroundings and polite staff.',
        'A wonderful spiritual experience.',
        'Highly recommend booking through this platform!',
        'The architecture is mesmerizing. Will definitely visit again.',
        'Very peaceful. The prasadam was excellent.',
        'Well organized queue system. Did not have to wait long.',
        'Divine experience. The early morning darshan is the best.',
        'Must visit for everyone. Beautiful and serene.',
        'Great facilities for elderly people.',
        'Proper drinking water and restrooms were available.',
        'The chants and prayers created a magical atmosphere.',
        'Felt immense peace after the darshan.',
        'Security and management were top notch.'
      ];

      const numReviews = Math.floor(Math.random() * 16) + 15; // 15 to 30
      let totalRating = 0;
      
      // Get a shuffled array of reviewer indices (3 to 32)
      const reviewerIndices = Array.from({length: 30}, (_, i) => i + 3).sort(() => 0.5 - Math.random());

      for(let r = 0; r < numReviews; r++) {
        const randomReviewer = users[reviewerIndices[r]];
        const reviewText = reviewsPool[Math.floor(Math.random() * 15)];
        const rating = Math.random() > 0.8 ? 4 : 5; // Mostly 4s and 5s
        totalRating += rating;
        
        reviewsToInsert.push({
          templeId: temple._id,
          userId: randomReviewer._id,
          rating: rating,
          review: reviewText
        });
      }
      
      // Update temple with realistic stats
      temple.reviewsCount = Math.floor(Math.random() * 1500) + 100;
      temple.ratings = Number(((totalRating / numReviews) - (Math.random() * 0.2)).toFixed(1));
      if(temple.ratings > 5) temple.ratings = 5.0;
      await temple.save();
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
