import mongoose from "mongoose";
const { Schema, model } = mongoose;

const answerSchema = new Schema(
  {
    answerId: { type: String, required: true, unique: true },
    answers: {
      type: [{ type: String, required: true }],
      validate: {
        validator: function (value) {
          return value.length === new Set(value).size;
        },
        message: 'Answers must be unique.'
      }
    },
    topic: { type: Schema.Types.ObjectId, ref: "Question", required: true },
  },
  { timestamps: true }
);

const AnswerModel = model("Answer", answerSchema);
export default AnswerModel;
