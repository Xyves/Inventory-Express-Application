var express = require("express");
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/catalog");
  console.log("Title:", title);
  console.log("Game count:", game_count);
  console.log("Game instance count:", game_instance_count);
});

module.exports = router;
