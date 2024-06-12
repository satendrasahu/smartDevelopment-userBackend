import express from "express";
import { addStaff, deleteStaff } from "../../controllers/staff/staff.controller.js";
import { havePermission, isAuthenticate } from "../../middlewares/authenticate.middleware.js";
const router = express.Router();

router.post("/add-staff",isAuthenticate,havePermission,addStaff);
router.post("/delete-staff",isAuthenticate,havePermission,deleteStaff);

const staffRoutes = router;
export default staffRoutes;
