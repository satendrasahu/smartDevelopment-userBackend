import express from "express";
import { addCourse, deleteAllCourses, deleteCourse, fetchCourses, updateCourse } from "../../controllers/courses/courses.controller.js";
import { havePermission, isAuthenticate } from "../../middlewares/authenticate.middleware.js";
const router = express.Router();

router.post("/add-courses",isAuthenticate,havePermission,addCourse);
router.patch("/update-courses",isAuthenticate,havePermission,updateCourse);
router.delete("/delete-courses",isAuthenticate,havePermission,deleteCourse);
router.delete("/delete-all-courses",isAuthenticate,havePermission,deleteAllCourses);
router.get("/fetch-courses",fetchCourses);

const courseRoutes = router;
export default courseRoutes;
