const express = require("express");
const app = express();
app.use(express.json());

const connectDB = require("./config/db");
connectDB();

const PORT = process.env.port || 5000;

app.use("/api/genShortUrl", require("./routes/genShortUrl"));

app.use("/", (req, res) => res.json("Server Running"));

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
