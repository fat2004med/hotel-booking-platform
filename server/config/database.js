
const mongoose = require('mongoose');
require('dotenv').config();
// mongodb connection
const connectDB = async () => {
  try{

  await mongoose.connect(process.env.MONGO_URI,{});
  console.log('MongoDB Connected');
  }
catch(err)
{
  console.log("MongoDB did not connect",err);
}
}
module.exports = connectDB;