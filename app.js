const express    = require("express"),
      app        = express(),
      bodyParser = require("body-parser"),
      mongoose   = require("mongoose");

// Require routes
const indexRoutes      = require("./routes/index"),
      calculatorRoutes = require("./routes/calculator");      

// Connect to DB
mongoose.connect("mongodb://localhost/quicktools_test", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("Connected to DB");
}).catch(err => {
    console.log("ERROR: ", err.message);
});

// App setup
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.use("/", indexRoutes);
app.use("/calculator", calculatorRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server has started");
});




