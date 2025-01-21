import mongoose from "mongoose";
const { Schema, model } = mongoose;

const aboutMeSchema = new Schema(
  {
    // ref_userId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    title: {
      type: String,
      required: true,
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
    aboutMeData: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const AboutMeModel = model("AboutMe", aboutMeSchema);
export default AboutMeModel;
