import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./src/db/connect.db.js";
import mainRouter from "./src/routes/index.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;
connectDatabase()
app.use(express.json());
app.use(process.env.BASE_URL,mainRouter)
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
