const express = require("express");
const connectDB = require("./config/db");
const appRouter = require("./routers/appRouter");

const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api", appRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
