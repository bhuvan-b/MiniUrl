const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const connectDB = require("./config/db");
connectDB();

const PORT = process.env.PORT || 5000;

app.use("/api/genShortUrl", require("./routes/genShortUrl"));

app.use("/", require("./routes/redirect"));
app.use("/", (req, res) => res.json("Server Running"));

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
