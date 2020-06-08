const express = require("express"),
      router  = express.Router(),
      stockxAPI  = require("stockx-api"),
      stockX     = new stockxAPI(),
      Search     = require("../models/search");


// Index: show calculator page
router.get("/", (req, res) => {
    res.render("calculator/index");
});

// Index: get serache results
// router.get("/", (req, res) => {
//     stockX.searchProducts(req.query.shoeName, {
//         limit: 5
//     })
//     .then(products => {
//         res.render("calculator/search:", {products: products});
//     })
//     .catch(err => console.log("Error searching: " + err.message));
// });

module.exports = router;