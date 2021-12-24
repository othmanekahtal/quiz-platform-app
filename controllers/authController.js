const asyncHandler = require('./../utils/asyncHandler')
const userModel = require('../models/userModel');
const ErrorApp = require('./../utils/errorApp')
const jwt = require('jsonwebtoken');
const generate_token = async (id) => {
    return await jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
};
exports.login = asyncHandler(async (req, res, next) => {
    const {email, password} = req.body;
    if (!email || !password) return next(new ErrorApp({message: 'provide email and password !', statusCode: 400}));
    let response = await userModel.findOne({email}).select('+password');
    if (!response) next(new ErrorApp({message: 'password or email is not correct', statusCode: 401}));
    const passwordsMatch = await response.samePassword({
        candidate_pass: response.password,
        user_pass: password
    });
    if (response && passwordsMatch)
        return res.status(201).json({
            status: 'success',
            token: await generate_token(response._id)
        });
    next(new ErrorApp({message: 'password or email is not correct', statusCode: 401}));
});
exports.signup = asyncHandler(async (req, res) => {
    const user = req.body;
    user.role = undefined;
    let response = await userModel.create(user);
    response.password = undefined;
    const token = await generate_token(response._id);
    res.status(201).json({
        status: 'success',
        token,
        data: response
    });
});