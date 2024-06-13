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
      req.body = {
        ...req.body,
        token_userId: result._id,
        token_userType: result.userType,
      };
      next();
    } catch (error) {
      return res.status(401).json({
        status: FAILURE,
        message: INVALID_TOKEN,
      });
    }
  } else {
    return res.status(401).json({
      status: FAILURE,
      message: INVALID_TOKEN,
    });
  }
};

const havePermission = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    try {
      const result = jwt.verify(token, process.env.SECREAT_KEY);
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
        const isStaffMember = await StaffModel.findOne({
          ref_userId: result._id,
        });
        // less priority means higher level user
        if (isStaffMember) {
          const allPermissions = Object.fromEntries(isStaffMember?.permissions);
          if (
            isStaffMember?.userPriority < req.body.userPriority &&
            Object.keys(allPermissions)?.length > 0 &&
            Object.keys(allPermissions).includes(req.body?.permissionKey) &&
            allPermissions?.[req.body?.permissionKey]?.includes(req.method)
          ) {
            next();
          } else {
            return res.status(401).json({
              status: FAILURE,
              message: HAVE_NO_PERMISSIONS,
            });
          }
        }
      }
    } catch (error) {
      return res.status(401).json({
        status: FAILURE,
        error: error.message,
        message: INVALID_TOKEN,
      });
    }
  } else {
    return res.status(401).json({
      status: FAILURE,
      message: INVALID_TOKEN,
    });
  }
};

const onlySuperAdminHavePermission = (req, res, next) => {
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
  } else {
    return res.status(401).json({
      status: FAILURE,
      message: INVALID_TOKEN,
    });
  }
};

export { isAuthenticate, havePermission, onlySuperAdminHavePermission };
