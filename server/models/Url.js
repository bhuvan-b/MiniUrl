const mongoose = require("mongoose");
const { Schema } = mongoose;

const UrlSchema = new Schema({
  shortCode: {
    type: String,
    required: true,
  },
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Url", UrlSchema);
