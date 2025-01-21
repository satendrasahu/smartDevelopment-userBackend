import express from "express";
import {
  addShortInfo,
  getShortInfo,
  updateShortInfo,
} from "../../../controllers/user/userPortfolio/shortIntro.controller.js";
const router = express.Router();

router.post("/short-intro", addShortInfo);
router.patch("/short-intro/:id", updateShortInfo);
router.get("/short-intro/:id", getShortInfo);

const userPortfolioRoutes = router;
export default userPortfolioRoutes;
