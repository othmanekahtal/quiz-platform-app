const asyncHandler = require('./../utils/asyncHandler')
const userModel = require('../models/userModel');
exports.getPage = (req, res) => {
    res.render("login", {error: {}, value: {}});
    res.end();
};
exports.handleData = asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    const error = {
        username: null, password: null
    }
    const response = await userModel.findOne({username});
    error.username = response?.username ? '' : 'username not found !';
    error.password = (error.username || response?.password === password) ? '' : 'password is wrong!';
    if (!error.username && !error.password) {
        return res.status(200).redirect('dashboard');
    }
    res.status(401).render('login', {error, value: {username}})
});