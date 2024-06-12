import express from "express";
import { loginUser, registerUser, resetPassword,updatePassword, verifyEmail } from "../../controllers/auth/auth.controller.js";
import { isAuthenticate } from "../../middlewares/authenticate.middleware.js";

const router = express.Router();

router.post("/user-profile/login",loginUser);
router.post("/user-profile/register", registerUser);
router.post("/user-profile/verify-email", verifyEmail);
router.patch("/user-profile/reset-password", resetPassword);
router.patch("/user-profile/update-password", isAuthenticate,updatePassword);


const authRoutes = router;
export default authRoutes;
