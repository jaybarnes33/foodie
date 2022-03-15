import mongoose, { ConnectOptions } from "mongoose";

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    // console.log("MongoDB connected: " + mongoose.connection.host);
    return;
  }
  try {
    const conn = await mongoose.connect(
      (process.env.NODE_ENV || process.env.VERCEL_ENV) === "production"
        ? process.env.ATLAS_URI || ""
        : process.env.MONGO_URL || ""
    );
    // console.log("MongoDB connected: " + conn.connection.host);
  } catch (error) {
    console.log(error);
  }
}

export default dbConnect;
