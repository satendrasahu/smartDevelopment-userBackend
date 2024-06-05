
import express from "express";
import { deleteUserById, updateUserById } from "../../controllers/user/user.controller.js";

const router = express.Router();

router.patch("/user-profile/updateby-id", updateUserById);
router.delete("/user-profile/deleteby-id", deleteUserById);


const userRoutes = router;
export default userRoutes;
