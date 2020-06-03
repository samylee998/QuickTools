const express    = require("express"),
      app        = express(),
      bodyParser = require("body-parser"),
      stockxAPI  = require("stockx-api"),
      stockX     = new stockxAPI();

const indexRoutes = require("./routes/index");      

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


stockX.searchProducts('yeezy', {
    limit: 5
})
.then(products => console.log(products))
.catch(err => console.log(`Error searching: ${err.message}`));


app.use("/", indexRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server listening on port " + process.env.PORT || 3000);
});




