const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();


const express = require('express');
const cors = require('cors');

const app = express();
connectDB();

//middleware
app.use(cors());
app.use(express.json());

//api endpoints
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Running on Port http://localhost/${PORT}`);
});