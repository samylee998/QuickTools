const { convert } = require("exchange-rates-api");

function exchange(price, options) {
    return (price * options.exchangeRate).toFixed(2);
}

function calculateResale(product, options) {
    const resale = product.market.averageDeadstockPrice - product.retail;
    return ((exchange(resale, options) * 0.88) - 9.99).toFixed(2);          //For stockX
}
// Uses BC tax rate, will add ON and todler tax rates later
function calculateRetail(product, options) {
    let retail = product.retail;
    if (options.localCurrency === "CAD") {
        retail *= 1.12; 
    }
    return exchange(retail, options);
}

// Tax at 12% for B.C, add other tax rates later, also no duties
// Goes off of StockX highest bid as market value
function calculateLocalProfit(product, market, options) {
    const retail = calculateRetail(product, options);
    const profit = exchange(market.highestBid, options) - retail;
    return profit.toFixed(2);
}

//Only takes highest bid will add option to check resale for lowestAsk, and highestBid
//Also hard-coded to my seller level, will add options later to change
function calculateStockXProfit(product, market, options) {
    const resale = exchange(market.highestBid, options);
    const retail = calculateRetail(product, options);
    let profit = (resale * 0.88) - retail;
    if (options.localCurrency === "CAD") {
        profit -= 9.99; 
    }
    return profit.toFixed(2);
}

//Assumes shipping cost of 25, will add option to change later
//Assume sale to US, paypal has different fees but will hardcode as 3.7 + 0.3
function calculateEbayProfit(product, market, options) {
    const resale = exchange(market.highestBid, options);
    const retail = calculateRetail(product, options);
    const fee = (resale * 0.037) + 0.3;
    const profit = resale - retail - fee;
    console.log(profit);
    return profit.toFixed(2);
}

module.exports = {
    exchange: exchange,
    calculateResale: calculateResale,
    calculateRetail: calculateRetail,
    calculateLocalProfit: calculateLocalProfit,
    calculateStockXProfit: calculateStockXProfit,
    calculateEbayProfit: calculateEbayProfit
}