const { convert } = require("exchange-rates-api");

function calculateResale(product, options) {
    const resale = product.market.averageDeadstockPrice - product.retail;
    return ((resale * options.exchangeRate * 0.88) - 9.99).toFixed(2);
}

module.exports = {
    calculateResale: calculateResale
}