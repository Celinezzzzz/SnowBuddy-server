const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const authorize = require("../middlewares/auth.middleware"); 

// Create a new entry
router.post("/", authorize, async (req, res) => {
    try {
        const { resort_id, date, number_of_runs, start_time, end_time } = req.body;
        const newEntry = await knex('ski_diary').insert({
            user_id: req.user.id,
            resort_id,
            date,
            number_of_runs,
            start_time,
            end_time
        });
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get entries for the authenticated user
router.get("/", authorize, async (req, res) => {
    try {
        const entries = await knex('ski_diary')
            .where({ user_id: req.user.id });
        res.json(entries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an entry
router.put("/:id", authorize, async (req, res) => {
    try {
        const { date, number_of_runs, start_time, end_time } = req.body;
        const updated = await knex('ski_diary')
            .where({ id: req.params.id, user_id: req.user.id })
            .update({ date, number_of_runs, start_time, end_time });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an entry
router.delete("/:id", authorize, async (req, res) => {
    try {
        await knex('ski_diary')
            .where({ id: req.params.id, user_id: req.user.id })
            .del();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
