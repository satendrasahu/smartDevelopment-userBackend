import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { emailRegex, mobileRegex, usernameRegex } from "../../utils/common.constant.js";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, maxLength: 50, minLength: 3 },
    lastName: { type: String, required: true, maxLength: 50, minLength: 3 },
    userName: {
      type: String,
      required: true,
      maxLength: 50,
      minLength: 3,
      unique: true,
      match: [
        usernameRegex,
        "Please fill a valid userName, like `userName, user_name, user12 `",
      ],
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      minLength: 3,
      unique: true,
      match: [emailRegex, "Please fill a valid email address, like a@b.c"],
    },
    password: { type: String, required: true, maxLength: 15, minLength: 8 },
    mobileNum: {
      type: String,
      required: true,
      maxLength: 15,
      minLength: 10,
      match: [
        mobileRegex,
        "Please fill a valid mobileNum, like `9632587410`",
      ],
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    dateOfBirth: { type: Date },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

async function encriptPasswordOnCreate(next) {
  try {
    const user = this;
    if (!user.isModified("password")) {
      return next();
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user?.password, salt);
      user.password = hashedPassword;
      next();
    }
  } catch (error) {
    next(error);
  }
}

async function encriptPasswordOnUpdate(next) {
  try {
    if (!this._update.password) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this._update.password = await bcrypt.hash(this._update.password, salt);
    next();
  } catch (error) {
    next(error);
  }
}

UserSchema.pre("save", encriptPasswordOnCreate);
UserSchema.pre("findOneAndUpdate", encriptPasswordOnUpdate);

const userModel = mongoose.model("user", UserSchema);
export default userModel;
