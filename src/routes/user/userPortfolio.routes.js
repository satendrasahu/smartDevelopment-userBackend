
import express from "express";
import { createShortInfo } from "../../controllers/user/userPortfolio.controller.js";
const router = express.Router();

router.post("/add-short-info",createShortInfo);

const userPortfolioRoutes = router;
export default userPortfolioRoutes;
