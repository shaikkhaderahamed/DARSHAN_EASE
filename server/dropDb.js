const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/darshanease')
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => {
    console.log('Database dropped.');
    process.exit(0);
  });
