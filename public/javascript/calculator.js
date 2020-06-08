alert("Connected!")

const stockXAPI = require("stockx-api"),
      stockX    = new stockXAPI(),
      convert   = require("exchange-rates-api");

$("#submitButton").click(function() {
    alert("Submitted!");
    stockX.searchProducts($("shoeName").val(), {
        limit: 5
    })
    .then(handleSearch(products))
    .catch(err => console.log("Error searching: " + err.message));
});

function handleSearch(products) {
    console.log("Form submit!");
    for (let i = 0; i < 4; i++) {
        $("searchResult" + i).removeClass("d-none");
    }
};
// Get name of shoe from input

// const shoeName = $("#")

// Use with StockX API to get products



