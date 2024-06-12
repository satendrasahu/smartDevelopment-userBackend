import { databaseConnection } from "../../../index.js";
import {
  FAILURE,
  SUCCESS,
  SUCCESSFULLY_CREATED,
  SUCCESSFULLY_FETCHED,
  permissionsList
} from "../../utils/common.constant.js";

const fetchCollectionListInDataBase = async (_, res) => {
  try {
    const result = await databaseConnection;
    if (result) {
      return res.status(200).json({
        status: SUCCESS,
        count:result?.collectionsList.length,
        message: SUCCESSFULLY_CREATED,
        data: result?.collectionsList,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: FAILURE,
      error: error.message,
    });
  }
};
const fetchPermissionsList = async (_, res) => {
  try {
      return res.status(200).json({
        status: SUCCESS,
        count:permissionsList.length,
        message: SUCCESSFULLY_FETCHED,
        data: permissionsList,
      });
    
  } catch (error) {
    return res.status(500).json({
      status: FAILURE,
      error: error.message,
    });
  }
};



export { fetchCollectionListInDataBase,fetchPermissionsList };
