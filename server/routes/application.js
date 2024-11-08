const express = require('express');
const mongoose = require('mongoose');
const Application = require('../models/User'); // Adjust the path as necessary

const router = express.Router();

// POST request to submit an application
router.post('/', async (req, res) => {
    try {
        const { name, phone, email, statement } = req.body;

        const newApplication = new Application({ name, phone, email, statement });
        await newApplication.save();

        return res.status(201).json({ success: true, message: "Application submitted successfully." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, message: "Failed to submit application." });
    }
});

module.exports = router;