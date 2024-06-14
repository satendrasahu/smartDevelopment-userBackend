import {
  FAILURE,
  SUCCESS,
  SUCCESSFULLY_CREATED,
  SUCCESSFULLY_FETCHED,
} from "../../utils/common.constant.js";
import TopicModel from "../../models/course/topic.model.js";
import QuestionAnswerModel from "../../models/course/questionAnswer.model.js";
import mongoose from "mongoose";

const addTopic = async (req, res) => {
  try {
    const topicData = new TopicModel({
      ...req.body,
      createdBy: req.body.token_userId,
      updatedBy: req.body.token_userId,
    });
    const result = await topicData.save();
    if (result) {
      return res.status(200).json({
        status: SUCCESS,
        message: SUCCESSFULLY_CREATED,
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

const fetchTopics = async (req, res) => {
  try {
    const { ref_courseId } = req.body;
    const result = await TopicModel.find({
      ref_courseId: ref_courseId,
    }).populate({
      path: "ref_courseId",
      select: {
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      },
    });
    if (result) {
      return res.status(200).json({
        status: SUCCESS,
        count: result?.length,
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

const updateTopic = async (req, res) => {
  const tempdata = JSON.parse(
    JSON.stringify({ ...req.body, updatedBy: req.body.token_userId })
  );
  delete tempdata.permissionKey;
  delete tempdata.token_userId;
  delete tempdata.createdBy;
  delete tempdata._id;
  try {
    const result = await CourseModel.findByIdAndUpdate(
      { _id: req.body._id },
      tempdata,
      {
        new: true,
        runValidators: true,
        upsert: true,
      }
    );
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

const deleteTopic = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { _id } = req.body;
    const questionAnswerDeleteResult = await QuestionAnswerModel.deleteMany({
      ref_topicId: _id,
    }).session(session);

    const questionAnswerDeletedCount = questionAnswerDeleteResult.deletedCount;
    const topicDeleteResult = await TopicModel.findOneAndDelete({
      _id,
    }).session(session);

    const topicDeletedCount = topicDeleteResult ? 1 : 0;
    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({
      status: SUCCESS,
      message: `${SUCCESSFULLY_DELETED} For the Topics, and dependent Questions-Answers`,
      data: {
        topicDeletedCount,
        questionAnswerDeletedCount,
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({
      status: FAILURE,
      error: error.message,
    });
  }
};

const deleteAllTopics = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const topics = await TopicModel.find({}).session(session);
    const topicIds = topics.map(topic => topic._id);

    const questionAnswerDeleteResult = await QuestionAnswerModel.deleteMany({ ref_topicId: { $in: topicIds } }).session(session);
    const questionAnswerDeletedCount = questionAnswerDeleteResult.deletedCount;

    const topicDeleteResult = await TopicModel.deleteMany({}).session(session);
    const topicDeletedCount = topicDeleteResult.deletedCount;

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({
      status: SUCCESS,
      message: `${SUCCESSFULLY_DELETED} For the all Topics, and Questions-Answers`,
      data: {
        topicDeletedCount,
        questionAnswerDeletedCount,
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({
      status: FAILURE,
      error: error.message,
    });
  }
};

export { addTopic, fetchTopics, updateTopic, deleteTopic, deleteAllTopics };
