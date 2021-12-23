const asyncHandler = require('./../utils/asyncHandler')
const userModel = require('../models/userModel');
exports.getLogin = asyncHandler(async (req, res) => {
    res.render("authentication/login", {error: {}, value: {}});
    res.end();
});
exports.login = asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    if (!username) return res.status(401).render('authentication/login', {
        error: {username: 'username is required !'},
        value: {}
    })
    if (!password) return res.status(401).render('authentication/login', {
        error: {password: 'password is required !'},
        value: {username}
    })
    const error = {
        username: null, password: null
    }
    const response = await userModel.findOne({username}).select('+password');
    error.username = await response.samePassword({
        candidate_pass: response.password,
        user_pass: password
    }) ? '' : 'username or password not correct!';
    if (!error.username && !error.password) {
        req.session.isAuth = true;
        return res.status(200).redirect('dashboard');
    }
    res.status(401).render('authentication/login', {error, value: {username}})
});
exports.signup = asyncHandler(async (req, res) => {
    const response = await userModel.create(req.body);
    if (response) {
        return res.status(201).redirect('activate');
    }
    res.status(401).render('authentication/register', {error: {}, value: {}})
})
exports.getSignup = asyncHandler(async (req, res) => {
        res.status(200).render('authentication/signup', {error: {}, value: {}})
    }
)
exports.getActivate = asyncHandler(async (req, res) => {
        res.render('authentication/activate')
    }
)