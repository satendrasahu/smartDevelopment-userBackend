import express from "express";
import { addTopic, deleteAllTopics, deleteTopic, fetchTopics, updateTopic } from "../../controllers/courses/topics.controller.js";
import { havePermission, isAuthenticate } from "../../middlewares/authenticate.middleware.js";
const router = express.Router();

router.post("/add-course-topic",isAuthenticate,havePermission, addTopic);
router.patch("/update-course-topic",isAuthenticate,havePermission,updateTopic);
router.delete("/delete-course-topic",isAuthenticate,havePermission,deleteTopic);
router.delete("/delete-course-all-topics",isAuthenticate,havePermission,deleteAllTopics);
router.get("/fetch-course-topics",fetchTopics);

const topicRoutes = router;
export default topicRoutes;
