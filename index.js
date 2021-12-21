const express = require("express");
const morgan = require("morgan");
const errorController = require("./controllers/errorController");
const userRouters = require("./routes/userRouters");
const adminRouters = require("./routes/adminRoutes");
const fs = require("fs");

const app = express();
const { globalHandler } = require("./controllers/globalHandler");
app.set("view engine", "ejs");
app.set("views", "./views");

// middlewares
/// middleware for handling json requests
app.use(express.json());
/// middleware for handling formData
app.use(
  express.urlencoded({
    extended: true,
  })
);
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.static("public/"));
app.get("/", (req, res) => {
  // you need t put it outside the router
  const index = fs.readFileSync(`${__dirname}/public/pages/home.html`);
  res.status(200).end(index.toString());
});

app.use("/", userRouters);
app.use("/dashboard", adminRouters);
// global handler error :
app.use(globalHandler);
app.all("/*", errorController);

module.exports = app;
