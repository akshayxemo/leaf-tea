const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const URI = process.env.MONGODB_URI;
    if (URI == null) {
      throw new Error("Empty database connection URI");
      return;
    }
    mongoose.connect(URI, {
      dbName: "leaftea",
      bufferCommands: false,
    });
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("[database:MongoDB] successfully connected...");
    });
  } catch (error) {
    console.log("[database:ERROR] connection failed...");
    console.log(error);
  }
};

module.exports = dbConnect;
