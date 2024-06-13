import StaffModel from "../../models/staff/staff.modle.js";
import UserModel from "../../models/user/user.model.js";
import {
  FAILURE,
  SUCCESS,
  SUCCESSFULLY_CREATED,
  SUCCESSFULLY_DELETED,
  SUCCESSFULLY_FETCHED,
  SUCCESSFULLY_UPDATED,
  usersType,
} from "../../utils/common.constant.js";

const addStaffMember = async (req, res) => {
  try {
    await UserModel.findByIdAndUpdate(
      {
        _id: req.body.ref_userId,
      },
      { userType: req.body.userType, userPriority: req.body.userPriority }
    );

    const courseData = new StaffModel({
      ...req.body,
      createdBy: req.body.token_userId,
      updatedBy: req.body.token_userId,
    });
    const result = await courseData.save();
    if (result) {
      return res.status(200).json({
        status: SUCCESS,
        message: SUCCESSFULLY_CREATED,
        data: result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: FAILURE,
      error: error.message,
    });
  }
};

const fetchStaffMembersList = async (req, res) => {
  try {
    const result = await StaffModel.find();
    if (result) {
      return res.status(200).json({
        status: SUCCESS,
        count: result.length,
        message: SUCCESSFULLY_FETCHED,
        data: result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: FAILURE,
      error: error.message,
    });
  }
};

const fetchStaffMember = async (req, res) => {
  try {
    const tempdata = JSON.parse(JSON.stringify(req.body));
    delete tempdata.permissionKey;
    delete tempdata.token_userId;
    delete tempdata.token_userType;

    const result = await StaffModel.find(tempdata);
    if (result) {
      return res.status(200).json({
        status: SUCCESS,
        count: result.length,
        message: SUCCESSFULLY_FETCHED,
        data: result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: FAILURE,
      error: error.message,
    });
  }
};

const updateStaffMember = async (req, res) => {
  const tempdata = JSON.parse(
    JSON.stringify({ ...req.body, updatedBy: req.body.token_userId })
  );
  delete tempdata.permissionKey;
  delete tempdata.token_userId;
  delete tempdata.ref_userId;
  delete tempdata._id;

  try {
    if (
      Object.keys(tempdata).includes("userType") ||
      Object.keys(tempdata).includes("userPriority")
    ) {
      await UserModel.findByIdAndUpdate(
        {
          _id: req.body.ref_userId,
        },
        { userType: req.body.userType, userPriority: req.body.userPriority }
      );
    }
    const result = await StaffModel.findByIdAndUpdate(
      { _id: req.body._id },
      tempdata,
      {
        new: true,
        runValidators: true,
        upsert: true,
      }
    );
    if (result) {
      return res.status(200).json({
        status: SUCCESS,
        count: result.length,
        message: SUCCESSFULLY_UPDATED,
        data: result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: FAILURE,
      error: error.message,
    });
  }
};

const deleteStaffMember = async (req, res) => {
  try {
    await UserModel.findByIdAndUpdate(
      {
        _id: req.body.ref_userId,
      },
      { userType: "user", userPriority: 0 }
    );
    const result = await StaffModel.findOneAndDelete({
      ref_userId: req.body.ref_userId,
    });
    if (result) {
      return res.status(200).json({
        status: SUCCESS,
        message: SUCCESSFULLY_DELETED,
        data: result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: FAILURE,
      error: error.message,
    });
  }
};

const changeStaffMember = async (req, res) => {
  const tempdata = JSON.parse(
    JSON.stringify({ ...req.body, updatedBy: req.body.token_userId })
  );
  delete tempdata.permissionKey;
  delete tempdata.token_userId;
  delete tempdata.token_userType;
  delete tempdata.ref_userId;
  delete tempdata._id;
  try {
    await UserModel.findByIdAndUpdate(
      {
        _id: req.body.ref_userId,
      },
      { userType: "user", userPriority: 0 }
    );

    await UserModel.findByIdAndUpdate(
      {
        _id: req.body.new_ref_userId,
      },
      { userType: req.body.userType, userPriority: req.body.userPriority }
    );
    const result = await StaffModel.findByIdAndUpdate(
      { _id: req.body._id },
      {
        ref_userId: req.body.new_ref_userId,
        updatedBy: req.body.token_userId,
        userType: req.body.userType,
        userPriority: req.body.userPriority,
      },
      {
        new: true,
        runValidators: true,
        upsert: true,
      }
    );
    if (result) {
      return res.status(200).json({
        status: SUCCESS,
        message: SUCCESSFULLY_UPDATED,
        data: result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: FAILURE,
      error: error.message,
    });
  }
};

export {
  addStaffMember,
  deleteStaffMember,
  fetchStaffMembersList,
  fetchStaffMember,
  updateStaffMember,
  changeStaffMember,
};
