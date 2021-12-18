const express = require("express");
const morgan = require("morgan");
const errorController = require("./controllers/errorController");
const userRouters = require("./routes/userRouters");
const app = express();
const {globalHandler} = require('./controllers/globalHandler')

app.set("view engine", "ejs");
app.set("views", "./views");
// middlewares
app.use(express.json());
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
