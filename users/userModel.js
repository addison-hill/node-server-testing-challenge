const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  get,
  remove
};

function insert(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const id = ids[0];
      return db("users")
        .where({ id })
        .first();
    });
}

function get() {
  return db("users");
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}
