import express from "express";
import { addTopic, fetchTopics } from "../../controllers/courses/topics.controller.js";
import { havePermission, isAuthenticate } from "../../middlewares/authenticate.middleware.js";
const router = express.Router();

router.post("/add-course-topics",isAuthenticate,havePermission, addTopic);
router.post("/fetch-course-topics",fetchTopics);

const topicRoutes = router;
export default topicRoutes;
