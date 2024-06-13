import mongoose from "mongoose";
import { staffUsersType } from "../../utils/common.constant.js";
const { Schema, model } = mongoose;

const staffSchema = new Schema(
  {
    userType: { type: String, enum: staffUsersType, default: "admin" },
    userPriority: { type: Number, default: 2 }, //  super-admin priority :1, user priority :0
    ref_userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    createdBy: { type: String, required: true },
    updatedBy: { type: String, required: true },
    permissions: {
      type: Map, // Use Map for dynamic keys
      of: [String], // The values of the Map are arrays of strings
      required: true,
    },
  },
  { timestamps: true }
);

const StaffModel = model("Staff", staffSchema);
export default StaffModel;
