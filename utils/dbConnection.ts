import mongoose from "mongoose";

const DATABASE_URL = process.env.MONGODB_URI;
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connnectToDB = async () => {
  if (cached.conn) return cached.conn;

  if (!DATABASE_URL) {
    throw new Error("Mongodb URI not set in environment");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(DATABASE_URL, {
      dbName: "leaftea",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
