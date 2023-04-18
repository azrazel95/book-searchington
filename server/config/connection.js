const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://benisprenger:5TCBd0t6stmVUWoT@book-searchington.43j1e2k.mongodb.net/googlebooks');

module.exports = mongoose.connection;
