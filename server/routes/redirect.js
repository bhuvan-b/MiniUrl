const express = require("express");
const router = express.Router();
const Url = require("../models/Url");

router.get("/:sid", async (req, res) => {
  try {
    const shortCode = req.params.sid;
    const url = await Url.findOne({ shortCode });
    if (url) {
      res.redirect(url.longUrl);
      url.count = url.count + 1;
      await url.save();
    } else {
      res.json("Url Not Found");
    }
  } catch (err) {
    console.log(err.message);
    res.json("Error searching for URL");
  }
});

module.exports = router;
