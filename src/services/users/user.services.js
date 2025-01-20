import UserModel from "../../models/user/user.model.js";

export const createNewDocumentsService = async (data) => {
  const userData = new UserModel(req.body);
  const result = await userData.save();
  return result;
};
