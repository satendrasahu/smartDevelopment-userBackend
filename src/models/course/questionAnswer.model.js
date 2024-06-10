import mongoose from "mongoose";
import { courseLanguage, questionAnswerType } from "../../utils/common.constant.js";
const { Schema, model } = mongoose;

const questionAnswerSchema = new Schema(
  {
    questionAnswerId: { type: String, required: true, unique: true },
    questionAnswerLanguage: { type: String, required: true, enum: courseLanguage },
    questions: {
      type: [
        {
          questionText: { type: String, required: true },
          questionType: { type: String, required: true, enum: questionAnswerType },
        }
      ],
      validate: {
        validator: function (value) {
          const questionTexts = value.map(q => q.questionText);
          return questionTexts.length === new Set(questionTexts).size;
        },
        message: 'Questions must be unique.'
      }
    },
    answers: {
      type: [
        {
          answerText: { type: String, required: true },
          answerType: { type: String, required: true, enum: questionAnswerType },
        }
      ],
      validate: {
        validator: function (value) {
          const answerTexts = value.map(a => a.answerText);
          return answerTexts.length === new Set(answerTexts).size;
        },
        message: 'Answers must be unique.'
      }
    },
    ref_topicId: { type: Schema.Types.ObjectId, ref: "Topic", required: true },
  },
  { timestamps: true }
);

const QuestionAnswerModel = model("QuestionsAnswer", questionAnswerSchema);
export default QuestionAnswerModel;
