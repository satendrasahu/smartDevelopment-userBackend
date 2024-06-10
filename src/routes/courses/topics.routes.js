import express from "express";
import { addTopic, fetchTopics } from "../../controllers/courses/topics.controller.js";
const router = express.Router();

router.post("/course-topics/add",addTopic);
router.post("/course-topics/fetch",fetchTopics);

const topicRoutes = router;
export default topicRoutes;
