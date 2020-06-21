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

//Get search results
router.get("/results", async (req, res) => {
    req.app.locals.options = req.query.options;
    req.app.locals.options.exchangeRate = await convert(1, "USD", req.app.locals.options.localCurrency);
    stockX.searchProducts(req.query.shoeName, {
        limit: 10
    })
    .then(products => res.render("calculator/results", {products: products, helpers: helpers, options: req.app.locals.options}))
    .catch(err => console.log("Error getting products: " + err.message));
});

//Get details from search
router.get("/details", async (req, res) => {
    const url = req.query.product.link;
    const searchProduct = req.query.product;
    stockX.fetchProductDetails("https://stockx.com/" + url)
    .then(product => res.render("calculator/details", {product: product, options: req.app.locals.options, searchProduct: searchProduct, helpers: helpers}))
    .catch(err => console.log("Error scraping product details: " + err.message));
});



module.exports = router;