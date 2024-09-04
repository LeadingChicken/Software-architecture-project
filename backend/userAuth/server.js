const express = require("express");
const connectDB = require("./config/db");
const userApi = require("./api/userApi");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", userApi);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
