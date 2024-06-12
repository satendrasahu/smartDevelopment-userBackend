import StaffModel from "../models/staff/staff.modle.js";
import {
  FAILURE,
  HAVE_NO_PERMISSIONS,
  INVALID_TOKEN,
  REQUIRED_PERMISSION_KEY,
} from "../utils/common.constant.js";
import jwt from "jsonwebtoken";

const isAuthenticate = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token) {
    try {
      const result = jwt.verify(token, process.env.SECREAT_KEY);
      req.body = { ...req.body, token_userId: result._id };
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
      console.log(req.body,result.userType)
      if (!req.body?.permissionKey) {
        return res.status(403).json({
          status: FAILURE,
          message: REQUIRED_PERMISSION_KEY,
        });
      }

      if (result.userType === "super-admin") {
        next();
      } else if (result.userType === "user") {
        return res.status(401).json({
          status: FAILURE,
          message: HAVE_NO_PERMISSIONS,
        });
      } else {
        // req.method
        // const isStaffMember = StaffModel.findOne({ref_userId:result._id})
        console.log(isStaffMember)
        next();
      }
    } catch (error) {
      return res.status(401).json({
        status: FAILURE,
        message: INVALID_TOKEN,
      });
    }
  }
};

const onlySuperAdminhavePermission = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token) {
    try {
      const result = jwt.verify(token, process.env.SECREAT_KEY);
      if (result.userType === "super-admin") {
        next();
      } else
        return res.status(401).json({
          status: FAILURE,
          message: HAVE_NO_PERMISSIONS,
        });
    } catch (error) {
      return res.status(401).json({
        status: FAILURE,
        message: INVALID_TOKEN,
      });
    }
  }
};

export { isAuthenticate, havePermission, onlySuperAdminhavePermission };
