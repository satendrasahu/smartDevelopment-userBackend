import userModel from "../../models/user/user.model.js";
import { FAILURE, SUCCESS, SUCCESSFULLY_DELETED, SUCCESSFULLY_UPDATED } from "../../utils/common.constant.js";

const updateUserById = async (req, res) => {
    try {
      const _id = req.query["userId"];
  
      const result = await userModel.findByIdAndUpdate(_id, req.body, {
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
  
      const result = await userModel.findByIdAndDelete(userId);
  
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

  export {updateUserById,deleteUserById}