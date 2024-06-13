import express from "express";
import { fetchCollectionListInDataBase, fetchPermissionsList } from "../../controllers/common/common.controller.js";
import { havePermission, isAuthenticate, onlySuperAdminHavePermission } from "../../middlewares/authenticate.middleware.js";
const router = express.Router();

router.post("/fetch-collections-list",isAuthenticate,onlySuperAdminHavePermission,fetchCollectionListInDataBase);
router.post("/fetch-permissions-list",isAuthenticate,havePermission,fetchPermissionsList);

const commonRoutes = router;
export default commonRoutes;
