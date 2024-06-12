import StaffModel from "../../models/staff/staff.modle.js";
import { FAILURE, SUCCESS, SUCCESSFULLY_CREATED, SUCCESSFULLY_FETCHED } from "../../utils/common.constant.js";

const addStaff = async (req, res) => {
    try {

      const courseData = new StaffModel(req.body)
      const result = await courseData.save()
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

//   const fetchCourses = async (req, res) => {
//     try {
//       const result = await CourseModel.find()
//       if (result) {
//         return res.status(200).json({
//           status: SUCCESS,
//           count: result.length,
//           message: SUCCESSFULLY_FETCHED,
//           data: result,
//         });
//       }
//     } catch (error) {
//       return res.status(500).json({
//         status: FAILURE,
//         error: error.message,
//       });
//     }
//   };
  
// const updateCourse = async (req,res)=>{

//   try {
//     const result = await CourseModel.find()
//     if (result) {
//       return res.status(200).json({
//         status: SUCCESS,
//         count: result.length,
//         message: SUCCESSFULLY_FETCHED,
//         data: result,
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       status: FAILURE,
//       error: error.message,
//     });
//   }
// }


const deleteStaff = async (req,res)=>{
  try {
    const result = await StaffModel.findByIdAndDelete()
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
}


export {addStaff,deleteStaff}