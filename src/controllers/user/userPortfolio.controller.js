import { createNewDocumentsService } from "../../services/users/user.services.js";
import { FAILURE, SUCCESS, SUCCESSFULLY_CREATED } from "../../utils/common.constant.js";

export const createShortInfo = async (req, res) => {
  console.log("result", req.body);
  try {
    const result = await createNewDocumentsService(req.body);
    if (result) {
      res.json({
        status: SUCCESS,
        message: SUCCESSFULLY_CREATED,
        data: result,
      });
    }
    console.log("result---", result);
  } catch (error) {
    res.json({
      status: FAILURE,
      error: error.message,
    });
  }
};
