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

router.route("/").get(loadIndex);
// routers for questions
router
  .route("/questions")
  .get(loadQuestions)
  .post(addQuestion)
  .delete(deleteQuestion)
  .put(updateQuestion);
// routers for students
router
  .route("/students")
  .get(loadStudents)
  .post(addStudent)
  .delete(deleteStudent)
  .put(updateStudent);
// routers for subjects
router
  .route("/subjects")
  .get(loadSubjects)
  .post(addSubject)
  .delete(deleteSubject)
  .put(updateSubject);
module.exports = router;
