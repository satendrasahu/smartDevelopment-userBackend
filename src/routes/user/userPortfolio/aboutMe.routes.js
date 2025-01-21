import express from "express";
import { addAboutMe, getAboutMe,updateAboutMe } from "../../../controllers/user/userPortfolio/aboutMe.controller.js";
const router = express.Router();

router.post("/about-me", addAboutMe);
router.patch("/about-me/:id", updateAboutMe);
router.get("/about-me/:id", getAboutMe);

const aboutMeRoutes = router;
export default aboutMeRoutes;
