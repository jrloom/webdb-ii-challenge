const express = require("express");
const carRouter = require("./cars/carRouter");

const server = express();

server.use(express.json());
server.use("/api/cars", carRouter);

// * sanity
server.get("/", (req, res) =>
  res.status(200).json({ message: "Good news everyone" })
);

module.exports = server;
