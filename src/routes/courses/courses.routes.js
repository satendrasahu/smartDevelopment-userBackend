import express from "express";
import { addCourse, fetchCourses } from "../../controllers/courses/courses.controller.js";
const router = express.Router();

router.post("/add-user-courses",addCourse);
router.get("/fetch-user-courses",fetchCourses);


const courseRoutes = router;
export default courseRoutes;
