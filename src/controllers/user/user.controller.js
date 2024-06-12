import UserModel from "../../models/user/user.model.js";
import { FAILURE, SUCCESS, SUCCESSFULLY_DELETED, SUCCESSFULLY_FETCHED, SUCCESSFULLY_UPDATED } from "../../utils/common.constant.js";

const updateUserById = async (req, res) => {
    try {
      const _id = req.query["userId"];
  
      const result = await UserModel.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
  
      if (result) {
        res.json({
          status: SUCCESS,
          message: SUCCESSFULLY_UPDATED,
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

  const deleteUserById = async (req, res) => {
    try {
      const userId = req.query["userId"];
  
      const result = await UserModel.findByIdAndDelete(userId);
  
      if (result) {
        res.json({
          status: SUCCESS,
          message: SUCCESSFULLY_DELETED,
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

  const fetchUsersList = async (req, res) => {
    try {
      const result = await UserModel.find()
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

  export {updateUserById,deleteUserById,fetchUsersList}