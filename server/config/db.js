const mongoose = require("mongoose");
const config = require("config");
require("dotenv").config();

// const db = config.get("mongoUri");
const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    // console.log("mongo: ", db);
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Connected!");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
