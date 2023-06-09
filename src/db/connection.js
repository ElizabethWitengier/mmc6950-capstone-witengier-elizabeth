const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Establish a connection to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

// Export the connectDB function
module.exports = connectDB;
