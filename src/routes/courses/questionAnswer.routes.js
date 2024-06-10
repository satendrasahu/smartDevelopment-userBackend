import express from "express";
import { addQuestionsAnswers, fetchQuestionsAnswers } from "../../controllers/courses/questionAnswer.controller.js";
const router = express.Router();

router.post("/topic-questions-answers/add",addQuestionsAnswers);
router.post("/topic-questions-answers/fetch",fetchQuestionsAnswers);

const questionAnswerRoutes = router;
export default questionAnswerRoutes;
