// VERY OLD CODE, WILL REFACTOR WITH JQUERY WITH ADDED FUNCTIONALITY

//Variables for document elements
var currencyRetail;
var currencyLocal;
var retailPrice;
var shippingPrice;
var resalePrice;
var shipUS;
//Variables needed for outputs
var profitStockX = document.getElementById("profitStockX");
var profitLocal = document.getElementById("profitLocal");
var duties = document.getElementById("duties");
var fees = document.getElementById("fees");
//Variables needed for calculations/outputs
var retailOut;
var shippingOut;
var dutiesOut;
var resaleOut;
var stockXFeeOut;
var stockXProfitOut;
var localProfitOut;

//Show function
function show() {
    profitStockX.classList.remove("d-none");
    profitLocal.classList.remove("d-none");
    duties.classList.remove("d-none");
    fees.classList.remove("d-none");
};

//Currency Objects
//USD
var usd = {
    rateCAD: 0.74,
    rateEUR: 1.12,
    rateGBP: 1.27,
    convertCAD: function(cad) {
        return (cad * this.rateCAD);
    },
    convertEUR: function(eur) {
        return (eur * this.rateEUR); 
    },
    convertGBP: function(gbp) {
        return (gbp * this.rateGBP)
    },
    calculateUS: function() {
        retailOut = Number(retailPrice);
        shippingOut = Number(shippingPrice);
        dutiesOut = retailOut * 0.12;
        resaleOut = Number(resalePrice);
        stockXFeeOut = (resaleOut * 0.12) + 11.5;
        stockXProfitOut = (resaleOut - stockXFeeOut - shippingOut - retailOut - dutiesOut);
        localProfitOut = (resaleOut - shippingOut - retailOut - dutiesOut);
        profitStockX.placeholder = "Profit Selling on StockX: " + stockXProfitOut.toFixed(2) + " USD";
        profitLocal.placeholder = "Profit Selling Locally: " +  localProfitOut.toFixed(2) + " USD";
        duties.placeholder = "Duties: " + dutiesOut.toFixed(2) + " USD";
        fees.placeholder = "Fees: " + stockXFeeOut.toFixed(2) + " USD";
        show();
    }
};

//CAD
var cad = {
    rateUSD: 1.34,
    rateEUR: 1.51,
    rateGBP: 1.71,
    convertUSD: function(usd) {
        return (usd * this.rateUSD);
    },
    convertEUR: function(eur) {
        return (eur * this.rateEUR);
    },
    convertGBP: function(gbp) {
        return (gbp * this.rateGBP);
    },
    calculateUS: function() {
        retailOut = Number(retailPrice) * this.rateUSD;
        shippingOut = Number(shippingPrice) * this.rateUSD;
        dutiesOut = retailOut * 0.12;
        resaleOut = Number(resalePrice);
        stockXFeeOut = (resaleOut * 0.12) + 15;
        stockXProfitOut = (resaleOut - stockXFeeOut - shippingOut - retailOut - dutiesOut);
        localProfitOut = (resaleOut - shippingOut - retailOut - dutiesOut);
        profitStockX.placeholder = "Profit Selling on StockX: " + stockXProfitOut.toFixed(2) + " CAD";
        profitLocal.placeholder = "Profit Selling Locally: " +  localProfitOut.toFixed(2) + " CAD";
        duties.placeholder = "Duties: " + dutiesOut.toFixed(2) + " CAD";
        fees.placeholder = "Fees: " + stockXFeeOut.toFixed(2) + " CAD";
        show();
    },
    calculateCA: function() {
        retailOut = Number(retailPrice);
        shippingOut = Number(shippingPrice);
        dutiesOut = retailOut * 0.12;
        resaleOut = Number(resalePrice);
        stockXFeeOut = (resaleOut * 0.12) + 15;
        stockXProfitOut = (resaleOut - stockXFeeOut - shippingOut - retailOut - dutiesOut);
        localProfitOut = (resaleOut - shippingOut - retailOut - dutiesOut);
        profitStockX.placeholder = "Profit Selling on StockX: " + stockXProfitOut.toFixed(2) + " CAD";
        profitLocal.placeholder = "Profit Selling Locally: " +  localProfitOut.toFixed(2) + " CAD";
        duties.placeholder = "Tax: " + dutiesOut.toFixed(2) + " CAD";
        fees.placeholder = "Fees: " + stockXFeeOut.toFixed(2) + " CAD";
        show();
    },
    calculateEU: function() {
        retailOut = Number(retailPrice) * this.rateEUR;
        shippingOut = Number(shippingPrice) * this.rateEUR;
        dutiesOut = retailOut * 0.12;
        resaleOut = Number(resalePrice);
        stockXFeeOut = (resaleOut * 0.12) + 15;
        stockXProfitOut = (resaleOut - stockXFeeOut - shippingOut - retailOut - dutiesOut);
        localProfitOut = (resaleOut - shippingOut - retailOut - dutiesOut);
        profitStockX.placeholder = "Profit Selling on StockX: " + stockXProfitOut.toFixed(2) + " CAD";
        profitLocal.placeholder = "Profit Selling Locally: " +  localProfitOut.toFixed(2) + " CAD";
        duties.placeholder = "Duties " + dutiesOut.toFixed(2) + " CAD";
        fees.placeholder = "Fees: " + stockXFeeOut.toFixed(2) + " CAD";
        show();
    },
    calculateGB: function() {
        retailOut = Number(retailPrice) * this.rateGBP;
        shippingOut = Number(shippingPrice) * this.rateGBP;
        dutiesOut = retailOut * 0.12;
        resaleOut = Number(resalePrice);
        stockXFeeOut = (resaleOut * 0.12) + 15;
        stockXProfitOut = (resaleOut - stockXFeeOut - shippingOut - retailOut - dutiesOut);
        localProfitOut = (resaleOut - shippingOut - retailOut - dutiesOut);
        profitStockX.placeholder = "Profit Selling on StockX: " + stockXProfitOut.toFixed(2) + " CAD";
        profitLocal.placeholder = "Profit Selling Locally: " +  localProfitOut.toFixed(2) + " CAD";
        duties.placeholder = "Duties " + dutiesOut.toFixed(2) + " CAD";
        fees.placeholder = "Fees: " + stockXFeeOut.toFixed(2) + " CAD";
        show();

    }
};


var calculateButton = document.getElementById("submitButton");
calculateButton.addEventListener("click", calculate);


function calculate () {
    initialize();
    if (currencyRetail === "USD") {
        if (currencyLocal === "CAD") {
            cad.calculateUS();
        } else {
            usd.calculateUS();
        }
    } else if (currencyRetail === "CAD") {
        if (currencyLocal === "CAD") {
            cad.calculateCA();
        }
        //Add usd.calculateCA();
    } else if (currencyRetail === "EUR") {
        if (currencyLocal === "CAD") {
            cad.calculateEU();
        }
        //Add usd.calculateEU();
    } else {
        if (currencyLocal === "CAD") {
            cad.calculateGB();
        }
    }
};

function initialize () {
    currencyRetail = document.getElementById("currencyRetail").value;
    currencyLocal = document.getElementById("currencyLocal").value;
    retailPrice = document.getElementById("retailPrice").value;
    shippingPrice = document.getElementById("shippingPrice").value;
    resalePrice = document.getElementById("resalePrice").value;
    if (document.getElementById("shipToUS").checked) {
        shipUS = true;
    } else if (document.getElementById("shipToCA").checked) {
        shipUS = false;
    }
    console.log(shipUS);
};


