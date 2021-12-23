const express = require("express");
const errorController = require("./controllers/errorController");
const userRouters = require("./routes/authRouters");
const adminRouters = require("./routes/adminRoutes");
const session = require('express-session')
const MongoDBStore = require("connect-mongodb-session")(session);
const uri = process.env.HOSTED_DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
const store = new MongoDBStore({
    uri,
    collection: "sessions",
});
const app = express();
const {globalHandler} = require("./controllers/globalHandler");
app.set("view engine", "ejs");
app.set("views", "./views");
const fs = require("fs");
// middlewares
/// middlewares for handling json requests
app.use(express.json());
/// middlewares for handling formData
app.use(express.urlencoded({
    extended: true,
}));
app.use(session({
    resave: false,
    secret: 'this-key-for-session-app',
    saveUninitialized: false,
    store,
}))
if (process.env.NODE_ENV === 'development') {
    const morgan = require("morgan");
    app.use(morgan("dev"));
}
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
