import express from "express";
import { addQuestion } from "../../controllers/courses/questions.controller.js";
const router = express.Router();

router.post("/topic-question/add",addQuestion);

const questionRoutes = router;
export default questionRoutes;
