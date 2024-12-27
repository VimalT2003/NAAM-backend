const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();


// Initialize the app
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));


// Middleware to parse JSON data
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
