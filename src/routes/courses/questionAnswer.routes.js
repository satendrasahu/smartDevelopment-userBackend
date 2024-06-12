import express from "express";
import { addQuestionsAnswers, deleteQuestionsAnswers, fetchQuestionsAnswers } from "../../controllers/courses/questionAnswer.controller.js";
import { isAuthenticate } from "../../middlewares/authenticate.miidleware.js";
const router = express.Router();

router.post("/add-topic-questions-answers",addQuestionsAnswers);
router.post("/fetch-topic-questions-answers",fetchQuestionsAnswers);
router.delete("/delete-topic-questions-answers",isAuthenticate,deleteQuestionsAnswers);

const questionAnswerRoutes = router;
export default questionAnswerRoutes;
