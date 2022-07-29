const express = require("express");
const app = express();

app.use(express.json());

const connectDB = require("./config/db");
connectDB();

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
