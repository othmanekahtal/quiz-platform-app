const { openConnection } = require("../config/db");
exports.getPage = (req, res) => {
  res.render("login", { title: "user Page", text: "lorem text" });
  res.end();
};
exports.handleData = async (req, res) => {
  console.log(req.body);
  const connection = await openConnection();
  console.log(connection);
};
