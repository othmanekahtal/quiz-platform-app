const express = require("express");
const morgan = require("morgan");
const errorController = require("./controllers/errorController");
const userRouters = require("./routes/userRouters");
const app = express();
const {globalHandler} = require('./controllers/globalHandler')

app.set("view engine", "ejs");
app.set("views", "./views");
// middlewares
/// middleware for handling json requests
app.use(express.json());
/// middleware for handling formData
app.use(express.urlencoded({
    extended: true
}))
app.use(morgan("dev"));
app.use(express.static("public/"));

app.get("/", (req, res) => {
    res.render('home');
});

app.use("/user", userRouters);

// global handler error :
app.use(globalHandler)
app.all("/*", errorController);

module.exports = app;
