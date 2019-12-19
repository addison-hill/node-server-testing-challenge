const express = require("express");

const Users = require("./usersModel.js");

const router = express.Router();

router.get("/users", (req, res) => {
  Users.get()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get user" });
    });
});

router.post("/users", (req, res) => {
  const user = req.body;
  Users.insert(user)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to post" });
    });
});

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  Users.remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ message: "deleted" });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete user" });
    });
});

module.exports = router;
