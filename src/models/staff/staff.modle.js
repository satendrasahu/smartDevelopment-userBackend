import mongoose from "mongoose";
import { usersType } from "../../utils/common.constant.js";
const { Schema, model } = mongoose;

const staffSchema = new Schema(
  {
    userType: { type: String, enum: usersType, default: "admin" },
    ref_userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    permissions: {
      type: Map,  // Use Map for dynamic keys
      of: [String],  // The values of the Map are arrays of strings
      required: true,
    }
  },
  { timestamps: true }
);

const StaffModel = model("Staff", staffSchema);
export default StaffModel;
