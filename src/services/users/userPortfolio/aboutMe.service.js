import AboutMeModel from "../../../models/user/aboutMe.model.js";

export const createAboutMe = async (data) => {
  const shortIntroData = new AboutMeModel(data);
  const result = await shortIntroData.save();
  return result;
};

export const modifyAboutMe = async (data) => {
  const result = await AboutMeModel.findByIdAndUpdate(data?.id, data?.body, {
    new: true,
    runValidators: true,
  });
  if (result?.isVisible) {
    return result;
  }
  return { isVisible: result?.isVisible };
};

export const findAboutMe = async (data) => {
  const result = await AboutMeModel.findById(data?.id);
  if (result?.isVisible) {
    return result;
  }
  return { isVisible: result?.isVisible };
};

export const addAboutMeData = async (data) => {
  const result = await AboutMeModel.findByIdAndUpdate(
    data?.id,
    { $push: { aboutMeData: data?.body } },
    { new: true, runValidators: true }
  );
  return result;
};

export const removeAboutMeData = async (data) => {
  const result = await AboutMeModel.findByIdAndUpdate(
    data?.id,
    { $pull: { aboutMeData: data?.body } },
    { new: true, runValidators: true }
  );
  return result;
};


export const editAboutMeDataByIndex = async (id, index, newValue) => {
  try {
    const result = await AboutMeModel.findOneAndUpdate(
      { _id: id, [`aboutMeData.${index}`]: { $exists: true } }, // Ensure the index exists
      { $set: { [`aboutMeData.${index}`]: newValue } }, // Update the specific index
      { new: true }
    );
    return result;
  } catch (error) {
    console.error("Error editing individual element by index:", error);
    throw error;
  }
};

export const deleteAboutMeDataByIndex = async (id, index) => {
  try {
    const document = await AboutMeModel.findById(id);
    if (document && document.aboutMeData[index] !== undefined) {
      document.aboutMeData.splice(index, 1); // Remove the element at the specified index
      await document.save();
      return document;
    } else {
      throw new Error("Index out of bounds or document not found");
    }
  } catch (error) {
    console.error("Error deleting element by index:", error);
    throw error;
  }
};
