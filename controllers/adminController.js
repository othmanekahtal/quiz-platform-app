const asyncHandler = require("./../utils/asyncHandler");
exports.loadIndex = asyncHandler(async (_, res) => {
  res.status(200).render("dashboard/dashboard");
});
// subjects :
exports.addSubject = asyncHandler(async () => {});
exports.loadSubjects = asyncHandler(async (_, res) => {
  res.status(200).render("dashboard/subjects");
});
exports.deleteSubject = asyncHandler(async () => {});
exports.updateSubject = asyncHandler(async () => {});
// questions :
exports.addQuestion = asyncHandler(async () => {});
exports.loadQuestions = asyncHandler(async (_, res) => {
  res.status(200).render("dashboard/questions");
});
exports.deleteQuestion = asyncHandler(async () => {});
exports.updateQuestion = asyncHandler(async () => {});
// students :
exports.addStudent = asyncHandler(async () => {});
exports.loadStudents = asyncHandler(async (_, res) => {
  res.status(200).render("dashboard/students");
});
exports.deleteStudent = asyncHandler(async () => {});
exports.updateStudent = asyncHandler(async () => {});
