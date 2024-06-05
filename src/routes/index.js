import express from "express";
import authRoutes from "./auth/auth.routes.js";
import userRoutes from "./user/user.routes.js";

const router = express.Router();

router.use(authRoutes);
router.use(userRoutes);

const mainRouter = router;
export default mainRouter;
