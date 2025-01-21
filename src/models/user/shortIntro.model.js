import mongoose from "mongoose";
const { Schema, model } = mongoose;

const shortIntroSchema = new Schema(
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
      required: true,
      default: true,
    },
    greetingText: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    imageUrl: String,
    shortIntroText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ShortIntroModel = model("ShortIntro", shortIntroSchema);
export default ShortIntroModel;
