const express     = require("express"),
      router      = express.Router(),
      stockxAPI   = require("stockx-api"),
      stockX      = new stockxAPI(),
      {convert}   = require("exchange-rates-api"),
      helpers     = require("../public/javascript/calculator");


// Index: show calculator page
router.get("/", (req, res) => {
    res.render("calculator/index");
});

// Index: get search results
router.get("/results", async (req, res) => {
    const options = req.query.options
    options.exchangeRate = await convert(1, "USD", options.localCurrency);
    stockX.searchProducts(req.query.shoeName, {
        limit: 10
    })
    .then(products => res.render("calculator/results", {products: products, helpers: helpers, options: options}))
    .catch(err => console.log("Error getting products: " + err.message));
});

module.exports = router;