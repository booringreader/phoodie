const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const dotenv = require("dotenv").config();

connectDB();

const app = express();

app.use(express.json()); // to parse JSON request bodies

app.use("/api/auth", authRoutes);

PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
