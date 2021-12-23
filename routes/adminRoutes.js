const {Guest} = require('./../middlewares/routes/authMiddleware')
const {
    loadIndex,
    loadQuestions,
    loadStudents,
    loadSubjects,
    addQuestion,
    addStudent,
    addSubject,
    deleteQuestion,
    deleteStudent,
    deleteSubject,
    updateQuestion,
    updateStudent,
    updateSubject,
} = require("./../controllers/adminController");

const express = require("express");
const router = express.Router();
router.use(Guest)
router.route("/").get(loadIndex);
// routes for questions
router
    .route("/questions")
    .get(loadQuestions)
    .post(addQuestion)
    .delete(deleteQuestion)
    .put(updateQuestion);
// routes for students
router
    .route("/students")
    .get(loadStudents)
    .post(addStudent)
    .delete(deleteStudent)
    .put(updateStudent);
// routes for subjects
router
    .route("/subjects")
    .get(loadSubjects)
    .post(addSubject)
    .delete(deleteSubject)
    .put(updateSubject);
module.exports = router;
