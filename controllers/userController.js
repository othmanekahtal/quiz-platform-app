const {openConnection, passRequest, closeConnection} = require("../config/db");
const asyncHandler = require('./../utils/asyncHandler')
exports.getPage = (req, res) => {
    res.render("login", {error: {}});
    res.end();
};
exports.handleData = asyncHandler(async (req, res) => {
    const {username, password} = req.body
    const connection = await openConnection();
    const sql = `select *
                 from users
                 where username = '${username}'
                   and password = '${password}'`;
    const {rows} = await passRequest(connection, sql);
    await closeConnection(connection)
    if (rows.length) {
        return res.status(200).render('home')
    }

    const error = {username: 'username not found !'}
    const value = {username}
    res.status(401).render('login', {error, value})

});
