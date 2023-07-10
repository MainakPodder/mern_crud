const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.LINK);
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = connectDB;