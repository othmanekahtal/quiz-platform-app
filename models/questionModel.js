const mongoose = require('mongoose');
const {Schema} = mongoose;
const questionModel = new Schema({
    question: {
        required: [true, 'provide Question context !'],
        type: String,
        unique: true,
        trim: true,
        maxlength: [40, 'A question must have less or equal then 40 characters'],
        minlength: [10, 'A question must have more or equal then 10 characters']
    },
    difficulty: {
        type: String,
        required: [true, 'A question must have a difficulty'],
        enum: {
            values: ['easy', 'medium', 'difficult'],
            message: 'Difficulty is either: easy, medium, difficult'
        }
    },
    score: {
        type: Number,
        min: [1, 'score must be above 1.0'],
        max: [5, 'score must be below 5.0']
    },
    answers: [{
        isCorrect: {
            type: Boolean,
            required: [true, 'Provide status of the answer'],
        },
        answer: {
            type: String,
            required: [true, 'Provide the answer'],
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    subjects: {
        type: String,
        required: [true, 'Provide a subject of the question'],
    },
})
module.exports = mongoose.model("question", questionModel);