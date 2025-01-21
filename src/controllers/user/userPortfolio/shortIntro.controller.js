import { createShortIntro, findShortIntro, updateShortIntro } from "../../../services/users/userPortfolio/shortInfo.services.js";
import {
  FAILURE,
  RECORD_NOT_CREATED,
  statusCode,
  SUCCESS,
  SUCCESSFULLY_CREATED,
  SUCCESSFULLY_FETCHED,
  SUCCESSFULLY_UPDATED,
} from "../../../utils/common.constant.js";

export const addShortInfo = async (req, res) => {
  try {
    const result = await createShortIntro(req.body);
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

export const updateShortInfo = async (req, res) => {
  const { id } = req.params; 
  const data = {id,body:req?.body}
  try {
    const result = await updateShortIntro(data);
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


export const getShortInfo = async (req, res) => {
  const { id } = req.params; 
  const data = {id,body:req?.body}
  try {
    const result = await findShortIntro(data);
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