import userModel from "../../models/user/user.model.js";
import bcrypt from "bcrypt";
import {
  SUCCESS,
  SUCCESSFULLY_FETCHED,
  FAILURE,
  emailRegex,
  usernameRegex,
  INVALID_CREDENTIALS,
  USERNAME_EMAIL_DOESNT_EXIST,
  SUCCESSFULLY_CREATED,
  SUCCESSFULLY_UPDATED,
  PASSWORD_UPDATED_SUCCESSFULLY,
} from "../../utils/common.constant.js";
import { generateToken } from "../../utils/common.functions.js";

const loginUser = async (req, res) => {
  try {
    const { userNameOrEmail, password } = req.body;

    let user = null;

    if (emailRegex.test(userNameOrEmail)) {
      user = await userModel.findOne({ email: userNameOrEmail });
    } else if (usernameRegex.test(userNameOrEmail)) {
      user = await userModel.findOne({ userName: userNameOrEmail });
    } else {
      return res.status(400).json({
        status: FAILURE,
        message: USERNAME_EMAIL_DOESNT_EXIST,
      });
    }

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = generateToken(user._id);
        return res.status(200).json({
          status: SUCCESS,
          message: SUCCESSFULLY_FETCHED,
          token: token,
        });
      } else {
        return res.status(401).json({
          status: FAILURE,
          message: INVALID_CREDENTIALS,
        });
      }
    } else {
      return res.status(401).json({
        status: FAILURE,
        message: INVALID_CREDENTIALS,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: FAILURE,
      error: error.message,
    });
  }
};

const registerUser = async (req, res) => {
  try {
    const userData = new userModel(req.body);
    const result = await userData.save();
    if (result) {
      res.json({
        status: SUCCESS,
        message: SUCCESSFULLY_CREATED,
        data: result,
      });
    }
  } catch (error) {
    res.json({
      status: FAILURE,
      error: error.message,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const _id = req.query["userId"];
    const { password } = req.body;
    const result = await userModel.findByIdAndUpdate(
      _id,
      { password },
      {
        new: true,
        runValidators: true,
        upsert: true,
      }
    );

    if (result) {
      res.json({
        status: SUCCESS,
        message: PASSWORD_UPDATED_SUCCESSFULLY,
      });
    }
  } catch (error) {
    res.json({
      status: FAILURE,
      error: error.message,
      password: result?.password,
    });
  }
};
const updatePassword = async (req, res) => {
  try {
    const { password, _id } = req.body;
    const result = await userModel.findByIdAndUpdate(
      _id,
      { password },
      {
        new: true,
        runValidators: true, upsert: true
      }
    );

    if (result) {
      res.json({
        status: SUCCESS,
        message: PASSWORD_UPDATED_SUCCESSFULLY,
        password: result?.password,
      });
    }
  } catch (error) {
    res.json({
      status: FAILURE,
      error: error.message,
    });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await userModel.findOne({ email });

    if (result) {
      res.json({
        status: SUCCESS,
        message: PASSWORD_UPDATED_SUCCESSFULLY,
        password: result?.password,
      });
    }
  } catch (error) {
    res.json({
      status: FAILURE,
      error: error.message,
    });
  }
};

export { loginUser, registerUser, resetPassword, updatePassword, verifyEmail };
