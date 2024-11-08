const express = require('express');
const dotenv  = require('dotenv');
const connectDB = require('./Config/db');
const authRoutes = require('./Routes/AuthRouters');
const emplyeeRoutes = require('./Routes/EmployeeRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/employee', emplyeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
