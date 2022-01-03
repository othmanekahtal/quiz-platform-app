const express = require("express");
const morgan = require("morgan");
const errorController = require("./controllers/errorController");
const authRouters = require("./routes/authRouters");
const questionsRouters = require("./routes/questionsRouters");
const subRouters = require("./routes/subRouters");
const studentRouters = require("./routes/studentRouters");
const app = express();
const {globalHandler} = require('./controllers/globalHandler')
/// middleware for handling json requests
app.use(express.json());
/// middleware for handling json
app.use(express.urlencoded({
    extended: true
}))
app.use(morgan("dev"));
app.use(express.static("public/"));
app.use("/api/v1/user", authRouters);
app.use("/api/v1/questions", questionsRouters);
app.use("/api/v1/subjects", subRouters);
app.use("/api/v1/students", studentRouters);

// global handler error :
app.use(globalHandler)
app.all("/*", errorController);

module.exports = app;
