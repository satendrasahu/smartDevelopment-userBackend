import express from "express";
import { fetchCollectionListInDataBase, fetchPermissionsList } from "../../controllers/common/common.controller.js";
const router = express.Router();

router.get("/fetch-collections-list",fetchCollectionListInDataBase);
router.get("/fetch-permissions-list",fetchPermissionsList);

const commonRoutes = router;
export default commonRoutes;
