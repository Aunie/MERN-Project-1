const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

const connectDb = async () => {

    try {
        await mongoose.connect(URI);
        console.log('Connection Successful to DB');
    } catch (error) {
        console.log("DB Connection Failed!");
        process.exit(0)
    }
}


module.exports = connectDb;
