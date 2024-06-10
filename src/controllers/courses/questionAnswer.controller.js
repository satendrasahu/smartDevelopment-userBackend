
import QuestionAnswerModel from "../../models/course/questionAnswer.model.js";
import { FAILURE, SUCCESS, SUCCESSFULLY_CREATED, SUCCESSFULLY_FETCHED } from "../../utils/common.constant.js";

const addQuestionsAnswers = async (req, res) => {
    try {

      const questionData = new QuestionAnswerModel(req.body)
      const result = await questionData.save()
      if(result){
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

  const fetchQuestionsAnswers = async (req, res) => {
    try {
      const {ref_topicId}= req.body;
      const result = await QuestionAnswerModel.find({ref_topicId:ref_topicId}).populate({
        path: 'ref_topicId',
        select: {
          createdAt :0,
          updatedAt:0,
          __v :0
        }
      });
      if(result){
        return res.status(200).json({
            status: SUCCESS,
            count:result?.length,
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

export {addQuestionsAnswers,fetchQuestionsAnswers}