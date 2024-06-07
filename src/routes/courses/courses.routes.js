import express from "express";
import { addCourse, fetchCourses } from "../../controllers/courses/courses.controller.js";
const router = express.Router();

router.post("/user-courses/add",addCourse);
router.get("/user-courses/fetch",fetchCourses);


const courseRoutes = router;
export default courseRoutes;
