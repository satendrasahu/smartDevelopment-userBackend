import express from "express";
import { addTopic, fetchTopics } from "../../controllers/courses/topics.controller.js";
const router = express.Router();

router.post("/add-course-topics",addTopic);
router.post("/fetch-course-topics",fetchTopics);

const topicRoutes = router;
export default topicRoutes;
