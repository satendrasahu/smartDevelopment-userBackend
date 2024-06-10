import mongoose from "mongoose";
const { Schema, model } = mongoose;

const topicSchema = new Schema(
  {
    topicName: {
      type: String,
      required: true,
      maxLength: 50,
      minLength: 3,
      unique: true,
    },
    topicDetails: {
      type: String,
    },
    topicId: {
      type: String,
      required: true,
      unique: true,
    },
    ref_courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

const TopicModel = model("Topic", topicSchema);
export default TopicModel;
