import express from "express";
import { addQuestionsAnswers, fetchQuestionsAnswers } from "../../controllers/courses/questionAnswer.controller.js";
const router = express.Router();

router.post("/add-topic-questions-answers",addQuestionsAnswers);
router.post("/fetch-topic-questions-answers",fetchQuestionsAnswers);

const questionAnswerRoutes = router;
export default questionAnswerRoutes;
