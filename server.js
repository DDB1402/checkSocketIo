const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const { ExpressPeerServer } = require("peer");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

const server = http.createServer(app);

//* Websocket *//
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH"],
  },
  path: "/test/",
});

io.on("connection", function (socket) {
  console.log("connected");
  console.log(socket.id);
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server started on port ${port}`));
