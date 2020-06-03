const express = require("express"),
      router  = express.Router();

// Root Route (currently same as calulator, will add home page later)
router.get("/", (req, res) => {
    res.render("home");
})

module.exports = router;