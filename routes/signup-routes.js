const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');



router.post("/", async (req, res) => {
  const { username, name, password } = req.body;
  try {
      const user = await knex("users").where({ username }).first();
      if (user) {
          return res.status(409).json({ error: "Username already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      await knex("users").insert({
          username,
          name,
          password: hashedPassword
      });
      res.status(201).json({ success: true });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;