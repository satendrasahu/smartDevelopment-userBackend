import mongoose from "mongoose";
import CourseModel from "../../models/course/course.model.js";
import {
  FAILURE,
  SUCCESS,
  SUCCESSFULLY_CREATED,
  SUCCESSFULLY_DELETED,
  SUCCESSFULLY_FETCHED,
} from "../../utils/common.constant.js";
import TopicModel from "../../models/course/topic.model.js";
import QuestionAnswerModel from "../../models/course/questionAnswer.model.js";

const addCourse = async (req, res) => {
  try {
    const courseData = new CourseModel({
      ...req.body,
      createdBy: req.body.token_userId,
      updatedBy: req.body.token_userId,
    });
    const result = await courseData.save();
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

const fetchCourses = async (req, res) => {
  const tempdata = JSON.parse(JSON.stringify(req.body));
  delete tempdata.permissionKey;
  delete tempdata.token_userId;
  delete tempdata.token_userType;
  try {
    const result = await CourseModel.find(tempdata);
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

const updateCourse = async (req, res) => {
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

const deleteCourse = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { _id } = req.body;
    const topics = await TopicModel.find({ ref_courseId: _id }).session(
      session
    );
    const topicIds = topics.map((topic) => topic._id);
    const topicDeleteResult = await TopicModel.deleteMany({
      ref_courseId: _id,
    }).session(session);

    const topicDeletedCount = topicDeleteResult.deletedCount;
    const questionAnswerDeleteResult = await QuestionAnswerModel.deleteMany({
      ref_topicId: { $in: topicIds },
    }).session(session);

    const questionAnswerDeletedCount = questionAnswerDeleteResult.deletedCount;
    const courseDeleteResult = await CourseModel.findOneAndDelete({
      _id,
    }).session(session);

    const courseDeletedCount = courseDeleteResult ? 1 : 0;
    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({
      status: SUCCESS,
      message: `${SUCCESSFULLY_DELETED} For the Course, and dependent Topics and interdependent  Questiona-Answers`,
      data: {
        courseDeletedCount,
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
const deleteAllCourses = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const topics = await TopicModel.find({}).session(session);
    const topicIds = topics.map(topic => topic._id);

    const questionAnswerDeleteResult = await QuestionAnswerModel.deleteMany({ ref_topicId: { $in: topicIds } }).session(session);
    const questionAnswerDeletedCount = questionAnswerDeleteResult.deletedCount;

    const topicDeleteResult = await TopicModel.deleteMany({}).session(session);
    const topicDeletedCount = topicDeleteResult.deletedCount;

    const courseDeleteResult = await CourseModel.deleteMany({}).session(session);
    const courseDeletedCount = courseDeleteResult.deletedCount;

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({
      status: SUCCESS,
      message:`${SUCCESSFULLY_DELETED} For the all Courses, Topics and Questions-Answers`,
      data: {
        courseDeletedCount,
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

export {
  addCourse,
  fetchCourses,
  updateCourse,
  deleteCourse,
  deleteAllCourses,
};
