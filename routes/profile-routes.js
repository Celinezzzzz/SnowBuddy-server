const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../knexfile"));

// Middleware to verify token
function authorize(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Authorization token required" });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
}

router.get("/", authorize, async (req, res) => {
    try {
        const user = await knex("users").where({ id: req.user.id }).first();
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ name: user.name });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;