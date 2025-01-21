
import { createAboutMe,findAboutMe,modifyAboutMe } from "../../../services/users/userPortfolio/aboutMe.service.js";
import {
  FAILURE,
  statusCode,
  SUCCESS,
  SUCCESSFULLY_CREATED,
  SUCCESSFULLY_FETCHED,
  SUCCESSFULLY_UPDATED,
} from "../../../utils/common.constant.js";

export const addAboutMe = async (req, res) => {
  try {
    const result = await createAboutMe(req.body);
    if (result) {
      res.status(201).json({
        status: SUCCESS,
        statusCode :201,
        message: SUCCESSFULLY_CREATED,
        data: result,
      });
    } else {
      res.status(400).json({
        status: FAILURE,
        statusCode :400,
        message: statusCode[400],
      });
    }
  } catch (error) {
    res.status(500).json({
      status: FAILURE,
      message :statusCode[500],
      error: error.message,
    });
  }
};

export const updateAboutMe = async (req, res) => {
  const { id } = req.params; 
  const data = {id,body:req?.body}
  try {
    const result = await modifyAboutMe(data);
    if (result) {
      res.status(200).json({
        status: SUCCESS,
        statusCode :200,
        message: SUCCESSFULLY_UPDATED,
        data: result,
      });
    } else {
      res.status(404).json({
        status: FAILURE,
        statusCode :404,
        message: statusCode[404],
      });
    }
  } catch (error) {
    res.status(500).json({
      status: FAILURE,
      message :statusCode[500],
      error: error.message,
    });
  }
};


export const getAboutMe = async (req, res) => {
  const { id } = req.params; 
  const data = {id,body:req?.body}
  try {
    const result = await findAboutMe(data);
    if (result) {
      res.status(200).json({
        status: SUCCESS,
        statusCode :200,
        message: SUCCESSFULLY_FETCHED,
        data: result,
      });
    } else {
      res.status(404).json({
        status: FAILURE,
        statusCode :404,
        message: statusCode[404],
      });
    }
  } catch (error) {
    res.status(500).json({
      status: FAILURE,
      message :statusCode[500],
      error: error.message,
    });
  }
};