const express    = require("express"),
      app        = express(),
      bodyParser = require("body-parser");

// Require routes
const indexRoutes      = require("./routes/index"),
      calculatorRoutes = require("./routes/calculator");      


// App setup
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.use("/", indexRoutes);
app.use("/calculator", calculatorRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server has started");
});




