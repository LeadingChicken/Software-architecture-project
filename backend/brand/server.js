const express = require('express');
const connectDB = require('./config/db');
const appRouter = require('./routers/appRouter');
const router = require('./routers/appRouter');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use('/api', appRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
