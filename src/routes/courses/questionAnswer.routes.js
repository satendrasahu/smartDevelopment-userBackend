import express from "express";
import { addQuestionsAnswers, deleteAllQuestionsAnswers, deleteQuestionsAnswers, fetchQuestionsAnswers, updateQuestionsAnswer } from "../../controllers/courses/questionAnswer.controller.js";
import { havePermission, isAuthenticate } from "../../middlewares/authenticate.middleware.js";
const router = express.Router();

router.post("/add-topic-questions-answers",isAuthenticate,havePermission, addQuestionsAnswers);
router.get("/fetch-topic-questions-answers",fetchQuestionsAnswers);
router.patch("/delete-topic-questions-answers",isAuthenticate,havePermission,updateQuestionsAnswer);
router.delete("/delete-topic-questions-answers",isAuthenticate,havePermission,deleteQuestionsAnswers);
router.delete("/delete-topic-all-questions-answers",isAuthenticate,havePermission,deleteAllQuestionsAnswers);

const questionAnswerRoutes = router;
export default questionAnswerRoutes;
