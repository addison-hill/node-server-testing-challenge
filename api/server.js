const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hi Insomnia", dbenv: process.env.DB_ENV });
});

module.exports = server;
