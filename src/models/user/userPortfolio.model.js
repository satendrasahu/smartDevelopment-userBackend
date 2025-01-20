import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userPortFolioSchema = new Schema(
  {
    ref_userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    createdBy: { type: String, required: true },
    updatedBy: { type: String, required: true },

    shortIntro: {
      title: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
      },
      greetingText: {
        type: String,
        required: true,
      },
      fullName: {
        type: String,
        required: true,
      },
      shortIntroText: {
        type: String,
        required: true,
      },
    },
    aboutMe: {
      title: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
      },
      aboutMeText: [
        {
          type: String,
          required: true,
        },
      ],
    },
    achievements: {
      title: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
      },
      achievementsText: [
        {
          type: String,
          required: true,
        },
      ],
    },

    responsibilities: {
      title: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
      },
      responsibilitiesText: [
        {
          type: String,
          required: true,
        },
      ],
    },

    categories: {
      title: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
      },
      categoryText: [
        {
          categoryName: {
            type: String,
            required: true,
          },
          projectLink: String,
          description: String,
        },
      ],
    },
    contact: {
      title: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
      },
      contactText: [
        {
          contactName: {
            type: String,
            required: true,
          },
          contactType: String,
          contactLink: String,
          contactIcon: String,
        },
      ],
    },
  },
  { timestamps: true }
);

const UserPortFolioModel = model("UserPortFolio", userPortFolioSchema);
export default UserPortFolioModel;
