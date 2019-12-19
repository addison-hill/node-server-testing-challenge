const db = require("../data/dbConfig");

const Users = require("./userModel");

describe("users model", function() {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("insert", function() {
    it("should insert a User", async function() {
      // insert a user into the db
      await Users.insert({ name: "Addison" });
      // check if it was inserted into the db
      const users = await db("users"); // read from db directly
      expect(users).toHaveLength(1); // at least we know one record was inserted
    });
  });
});
