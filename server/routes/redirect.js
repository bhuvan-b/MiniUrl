const express = require("express");
const router = express.Router();
const Url = require("../models/Url");

router.get("/:sid", async (req, res) => {
  const shortCode = req.params.sid;
  const url = await Url.findOne({ shortCode });
  if (url) {
    res.redirect(url.longUrl);
    url.count = url.count + 1;
    await url.save();
  } else {
    res.json("Url Not Found");
  }
});

module.exports = router;
