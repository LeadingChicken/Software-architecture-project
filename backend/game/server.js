const express = require("express");
const connectDB = require("./config/db");
const gameRouter = require("./routers/gameRouter")

const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5002;

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/games", gameRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});