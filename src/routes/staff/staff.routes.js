import express from "express";
import { addStaff, deleteStaff } from "../../controllers/staff/staff.controller.js";
const router = express.Router();

router.post("/add-admin-staff",addStaff);
router.post("/delete-admin-staff",deleteStaff);

const staffRoutes = router;
export default staffRoutes;
