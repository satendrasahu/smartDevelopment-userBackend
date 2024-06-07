import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGODB_URI);

    if (result) {
      console.log("Database connected successfully");
    }
  } catch (error) {
    console.log("not connected with databases", error.message);
  }
};

export default connectDatabase;
