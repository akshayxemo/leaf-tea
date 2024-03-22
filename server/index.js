const express = require("express");
const app = express();
const cors = require("cors");

// dot env configuration
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//socket configuration
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// middlewares
const corsOption = {
  origin: process.env.CLIENT_ORIGIN,
};
app.use(cors());
app.use(express.json());

// setting up socket for all usages
app.set("socket", io);

// socket listener
io.on("connection", (socket) => {
  console.log("[socket] new user connected, ID: ", socket.id);

  socket.on("disconnect", () => {
    console.log(`[socket] user: ${socket.id} disconnected.`);
  });
});

const dbConnect = require("./lib/db");

// API routes
app.use(require("./api/route"));

// server listener
server.listen(PORT, async () => {
  console.log("[server] server is listening to port", PORT);
  await dbConnect();
});
