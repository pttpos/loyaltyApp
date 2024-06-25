const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User registration
router.post('/signup', async (req, res) => {
  const { username, password, isAdmin } = req.body;
  try {
    const user = new User({ username, password, isAdmin });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// User login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      throw new Error('Invalid credentials');
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add points to user
router.post('/add-points', async (req, res) => {
  const { userId, points } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    user.points += points;
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
