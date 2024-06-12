import express from "express";
import authRoutes from "./auth/auth.routes.js";
import userRoutes from "./user/user.routes.js";
import courseRoutes from "./courses/courses.routes.js";
import topicRoutes from "./courses/topics.routes.js";
import questionAnswerRoutes from "./courses/questionAnswer.routes.js";
import staffRoutes from "./staff/staff.routes.js";
import commonRoutes from "./common/common.routes.js";

const router = express.Router();

router.use(authRoutes);
router.use(userRoutes);
router.use(courseRoutes);
router.use(topicRoutes);
router.use(questionAnswerRoutes);
router.use(staffRoutes);
router.use(commonRoutes);

const mainRouter = router;
export default mainRouter;
