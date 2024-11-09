// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Use the auth routes
const applicationRoutes = require("./routes/application.js");
app.use("/api/apply", applicationRoutes);

const login = require("./routes/auth.js");
app.use("/api/auth", login);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});