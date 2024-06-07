import express from "express";
import { addAnswer } from "../../controllers/courses/answer.controller.js";
const router = express.Router();

router.post("/question-answer/add",addAnswer);

const answerRoutes = router;
export default answerRoutes;
