import express from "express";
import { addCourse, fetchCourses } from "../../controllers/courses/courses.controller.js";
import { havePermission, isAuthenticate } from "../../middlewares/authenticate.middleware.js";
const router = express.Router();

router.post("/add-user-courses",isAuthenticate,havePermission,addCourse);
router.get("/fetch-user-courses",fetchCourses);

const courseRoutes = router;
export default courseRoutes;
