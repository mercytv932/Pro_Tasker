const mongoose = require("mongoose");
const mongoDbConnection = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB successfuly connected 🔌🟢");
  } catch (error) {
    console.error("MongoDB connection failed 🔌❌", error);
  }
};

module.exports = mongoDbConnection;
