import mongoose from "mongoose";
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

const DB_URI = process.env.DB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      family: 4,
    });
    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};