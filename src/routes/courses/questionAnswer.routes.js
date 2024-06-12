import express from "express";
import { addQuestionsAnswers, deleteQuestionsAnswers, fetchQuestionsAnswers } from "../../controllers/courses/questionAnswer.controller.js";
import { havePermission, isAuthenticate } from "../../middlewares/authenticate.middleware.js";
const router = express.Router();

router.post("/add-topic-questions-answers",isAuthenticate,havePermission, addQuestionsAnswers);
router.post("/fetch-topic-questions-answers",fetchQuestionsAnswers);
router.delete("/delete-topic-questions-answers",isAuthenticate,havePermission,deleteQuestionsAnswers);

const questionAnswerRoutes = router;
export default questionAnswerRoutes;
