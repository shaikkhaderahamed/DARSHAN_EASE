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

