
import express from "express";
import { deleteUserById, fetchUsersList, updateUserById } from "../../controllers/user/user.controller.js";
import { havePermission, isAuthenticate } from "../../middlewares/authenticate.middleware.js";

const router = express.Router();

router.get("/fetch-users-list",isAuthenticate,havePermission, fetchUsersList);
router.patch("/user-profile/updateby-id",isAuthenticate, updateUserById);
router.delete("/user-profile/deleteby-id",isAuthenticate, deleteUserById);


const userRoutes = router;
export default userRoutes;
