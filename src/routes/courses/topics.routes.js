import express from "express";
import { addTopic, fetchTopics } from "../../controllers/courses/topics.controller.js";
const router = express.Router();

router.post("/course-topics/add",addTopic);
router.get("/course-topics/fetch",fetchTopics);

const topicRoutes = router;
export default topicRoutes;
