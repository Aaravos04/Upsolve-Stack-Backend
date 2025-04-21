import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connection Successful!");
  } catch (err) {
    console.log(err?.message);
    process.exit(1);
  }
};

export default connectDB;
