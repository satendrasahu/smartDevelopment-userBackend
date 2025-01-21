import ShortIntroModel from "../../../models/user/shortIntro.model.js";

export const createShortIntro = async (data) => {
  const shortIntroData = new ShortIntroModel(data);
  const result = await shortIntroData.save();
  return result;
};

export const modifyShortIntro = async (data) => {
  const result = await ShortIntroModel.findByIdAndUpdate(data?.id, data?.body, {
    new: true,
    runValidators: true,
  });
  if (result?.isVisible) {
    return result;
  }
  return { isVisible: result?.isVisible };
};

export const findShortIntro = async (data) => {
  const result = await ShortIntroModel.findById(data?.id);
  if (result?.isVisible) {
    return result;
  }
  return { isVisible: result?.isVisible };
};
