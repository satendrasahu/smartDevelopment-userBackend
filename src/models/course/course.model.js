import mongoose from "mongoose";
import { courseCategory } from "../../utils/common.constant.js";

const { Schema, model } = mongoose;

const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
      maxLength: 50,
      minLength: 3,
      unique: true,
    },
    courseId: {
      type: String,
      required: true,
      unique: true,
    },
    courseCategory: {
      type: [{ type: String, maxLength: 50, minLength: 3 }],
      required: true,
      validate: {
        validator: function (categories) {
          return categories.every((category) => courseCategory.includes(category));
        },
        message: (props) => `${props.value} contains an invalid course category. Select valid course categories from [${courseCategory.join(", ")}].`,
      },
    },
  },
  { timestamps: true }
);

const CourseModel = model("Course", courseSchema);
export default CourseModel;
