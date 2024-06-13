import express from "express";
import {
  addStaffMember,
  deleteStaffMember,
  fetchStaffMembersList,
  fetchStaffMember,
  updateStaffMember,
  changeStaffMember,
} from "../../controllers/staff/staff.controller.js";
import {
  havePermission,
  isAuthenticate,
} from "../../middlewares/authenticate.middleware.js";
const router = express.Router();

router.post("/add-staff-member", isAuthenticate, havePermission, addStaffMember);
router.delete( "/delete-staff-member",isAuthenticate,havePermission,deleteStaffMember);
router.get( "/fetch-staff-members-list",isAuthenticate,havePermission,fetchStaffMembersList);
router.get( "/fetch-staff-member",isAuthenticate,havePermission,fetchStaffMember);
router.patch( "/update-staff-member",isAuthenticate,havePermission,updateStaffMember);
router.patch( "/change-staff-member",isAuthenticate,havePermission,changeStaffMember);

const staffRoutes = router;
export default staffRoutes;
