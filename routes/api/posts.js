const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Post Route");
});

console.log("New Branch added");
module.exports = router;
