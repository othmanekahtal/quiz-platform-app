const express = require("express");
const router = express.Router();
const {
    createQuestion,
    getQuestion,
    deleteQuestion,
    updateQuestion,
} = require('./../controllers/questionController')
// sub routes here
router.route('/').post(createQuestion)
router.route('/:id').get(getQuestion).delete(deleteQuestion).patch(updateQuestion)
module.exports = router;