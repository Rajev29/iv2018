const express = require("express");
const router = express.Router();
const { CanPersonal } = require("../models");

router.post("/", async (req, res) => {
    const post = req.body;
    await CanPersonal.create(post);
    res.json(post);
  });
  
  module.exports = router;