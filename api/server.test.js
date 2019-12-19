const request = require("supertest");

const server = require("./server");
const db = require("../data/dbConfig");

describe("server", function() {
  describe("environment", function() {
    it("should set db environment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("GET /", function() {
    it("should return a 200 OK", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });

  describe("POST /api/users", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should return 200 OK", function() {
      return request(server)
        .post("/api/users")
        .send({ name: "Created User" })
        .then(res => {
          expect(res.status).toBe(200);
          expect(res.body.name).toEqual("Created User");
        });
    });
  });
});
