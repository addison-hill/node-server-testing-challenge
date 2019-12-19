const express = require("express");

const Users = require("../users/userModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hi Insomnia", dbenv: process.env.DB_ENV });
});

server.get("/api/users", (req, res) => {
  Users.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = server;
