const express = require("express");
const Url = require("../models/Url");
const router = express.Router();

const config = require("config");
const baseUrl = config.get("baseUrl");
const shortid = require("shortid");

router.post("/", async (req, res) => {
  const longUrl = req.body.longUrl;

  try {
    let url = await Url.findOne({ longUrl });

    if (url) {
      res.json(url);
    } else {
      const shortId = shortid.generate();
      url = new Url({
        shortCode: shortId,
        longUrl,
        shortUrl: baseUrl + "/" + shortId,
        date: new Date(),
      });

      await url.save();
      res.json(url);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json("Error creating short Url");
  }
});

module.exports = router;
