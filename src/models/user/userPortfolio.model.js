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

    

    achievements: {
      title: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
        default: true,
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
        default: true,
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
        default: true,
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
        default: true,
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

    domain: {
      title: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
        default: true,
      },
      domainText: [
        {
          domainName: {
            type: String,
            required: true,
          },
          description: String,
          projectLink: String,
          domaintIcon: String,
        },
      ],
    },

    education: {
      title: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
        default: true,
      },
      educationText: [
        {
          courseName: {
            type: String,
            required: true,
          },
          instituteName: {
            type: String,
            required: true,
          },
          duration: { type: String, required: true },
          shortCourseName: String,
          shortInstituteName: String,
          collageWebsite: String,
        },
      ],
    },

    project: {
      title: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
        default: true,
      },
      projectText: [
        {
          projectName: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          duration: { type: String, required: true },
          projectLink: String,
          domainName: String,
          skillTags: [String],
          responsibilities: [String],
        },
      ],
    },
    skills: {
      title: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
        default: true,
      },
      skillsText: [
        {
          skillName: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          skillsIcon: { type: String, required: true },
          icon: String,
          accentColor: String,
          color: String,
        },
      ],
    },
    workExperience: {
      title: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
        default: true,
      },
      workExperienceText: [
        {
          desigNationName: {
            type: String,
            required: true,
          },
          technologyName: {
            type: String,
            required: true,
          },
          companyName: { type: String, required: true },
          duration: { type: String, required: true },
          companyWebsite: String,
          designationTechName: String,
        },
      ],
    },
  },
  { timestamps: true }
);

const UserPortFolioModel = model("UserPortFolio", userPortFolioSchema);
export default UserPortFolioModel;
