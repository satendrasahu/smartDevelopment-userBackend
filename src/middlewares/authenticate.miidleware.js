import { FAILURE, INVALID_TOKEN } from "../utils/common.constant.js";
import jwt from "jsonwebtoken";

const isAuthenticate = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token) {
    try {
      const result = jwt.verify(token, process.env.SECREAT_KEY);
      req.body = { ...req.body, _id: result._id };
      next();
    } catch (error) {
      return res.status(401).json({
        status: FAILURE,
        message: INVALID_TOKEN,
      });
    }
  }
};
const havePermission = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token) {
    try {
      const result = jwt.verify(token, process.env.SECREAT_KEY);
      req.body = { ...req.body, _id: result._id };
      next();
    } catch (error) {
      return res.status(401).json({
        status: FAILURE,
        message: INVALID_TOKEN,
      });
    }
  }
};

export { isAuthenticate };
