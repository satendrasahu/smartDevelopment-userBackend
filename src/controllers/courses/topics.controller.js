
import { FAILURE, SUCCESS, SUCCESSFULLY_CREATED, SUCCESSFULLY_FETCHED } from "../../utils/common.constant.js";
import TopicModel from '../../models/course/topic.model.js'

const addTopic = async (req, res) => {
    try {

      const topicData = new TopicModel(req.body)
      const result = await topicData.save()
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

  const fetchTopics = async (req, res) => {
    try {
      const {ref_courseId}= req.body;
      const result = await TopicModel.find({ref_courseId:ref_courseId}).populate({
        path: 'ref_courseId',
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

export {addTopic,fetchTopics}