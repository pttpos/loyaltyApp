const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
