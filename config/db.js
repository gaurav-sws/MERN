const { mongoURI } = require("./config");
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log("Connected to Db");
  } catch (err) {
    console.error(err.message);
  }
};
module.exports = connectDB;
