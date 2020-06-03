const express = require("express"),
      router  = express.Router(),
      stockxAPI  = require("stockx-api"),
      stockX     = new stockxAPI();


// Index: show calculator page
router.get("/", (req, res) => {
    res.render("calculator/index");
});

// Create: add search results from stockX to side panel
router.post("/", (req, res) => {
    console.log("Got to POST route");
});

module.exports = router;