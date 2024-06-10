import express from "express";
import authRoutes from "./auth/auth.routes.js";
import userRoutes from "./user/user.routes.js";
import courseRoutes from "./courses/courses.routes.js";
import topicRoutes from "./courses/topics.routes.js";
import questionAnswerRoutes from "./courses/questionAnswer.routes.js";

const router = express.Router();

router.use(authRoutes);
router.use(userRoutes);
router.use(courseRoutes);
router.use(topicRoutes);
router.use(questionAnswerRoutes);

const mainRouter = router;
export default mainRouter;
