const asyncHandler = require('./../utils/asyncHandler')
const ErrorApp = require("../utils/errorApp");
const questionModel = require('./../models/questionModel');

exports.createQuestion = asyncHandler(async (request, response) => {
        const new_question = await questionModel.create(request.body);
        response.status(201).json({
            status: 'success',
            data: new_question
        });
    }
);

exports.getQuestion = asyncHandler(async (request, response, next) => {
        const id = request.params.id;
        const res = await questionModel.findById(id);
        // findById only for getting data with ID, we have also findOne
        if (!res) return next(new ErrorApp({message: 'ID Not found !', statusCode: 404}));
        response.status(200).json({status: 'success', data: res});
    }
);

exports.updateQuestion = asyncHandler(async (request, response, next) => {
    const id = request.params.id;
    const res = await questionModel.findByIdAndUpdate(id, request.body, {new: true, runValidators: true});
    if (!res) return next(new ErrorApp({message: 'ID Not found !', statusCode: 404}));
    // findById only for getting data with ID,we have also findOne
    response.status(200).json({status: 'success', data: res});
});

exports.deleteQuestion = asyncHandler(async (request, response, next) => {
    const id = request.params.id;
    const res = await questionModel.findByIdAndDelete(id);
    if (!res) return next(new ErrorApp({message: 'ID Not found !', statusCode: 404}));
    // findById only for getting data with Id, we have also findOne
    response.status(204).send(null);
});