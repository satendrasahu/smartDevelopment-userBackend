import express from "express";
import {
  addShortInfo,
  getShortInfo,
  updateShortIntro,
} from "../../../controllers/user/userPortfolio/shortIntro.controller.js";
const router = express.Router();

router.post("/short-intro", addShortInfo);
router.patch("/short-intro/:id", updateShortIntro);
router.get("/short-intro/:id", getShortInfo);

const shortInfoRoutes = router;
export default shortInfoRoutes;
