const asyncHandler = require('./../utils/asyncHandler')
const userModel = require('../models/userModel');
const ErrorApp = require('./../utils/errorApp')
exports.handleData = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
    if (!(username && password)) return next(new ErrorApp({ message: 'failed', statusCode: 400 }))
    const error = {
        username: null, password: null
    }
    const response = await userModel.findOne({ username });
    error.username = response?.username ? '' : 'username not found !';
    error.password = (error.username || response?.password === password) ? '' : 'password is wrong!';
    if (!error.username && !error.password) {
        return res.status(200).json({
            status: 'success',
            message: 'authorized successfully !',
        });
    }
    res.status(401).json({
        status: 'failed',
        message: "your credentials not authorized !",
        errors: error
    })
});