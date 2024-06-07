import mongoose from "mongoose";
const { Schema, model } = mongoose;

const questionSchema = new Schema(
  {
    questionId: { type: String, required: true, unique: true },
    questions: {
      type: [{ type: String, required: true }],
      validate: {
        validator: function (value) {
          return value.length === new Set(value).size;
        },
        message: 'Questions must be unique.'
      }
    },
    ref_topicId: { type: Schema.Types.ObjectId, ref: "Topic", required: true },
  },
  { timestamps: true }
);

const QuestionModel = model("Question", questionSchema);
export default QuestionModel;
