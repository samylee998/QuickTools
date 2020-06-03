const express = require("express"),
      router  = express.Router();

// Root Route
router.get("/", (req, res) => {
    res.render("home");
})

module.exports = router;