const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Just pass the MongoDB URI, no options needed
        await mongoose.connect('mongodb://127.0.0.1:27017/formdb');
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
