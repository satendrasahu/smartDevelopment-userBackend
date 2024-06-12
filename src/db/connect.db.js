import mongoose from "mongoose";

export const fetchCollectionListInDatabase = async () => {
  try {
    const collections = await mongoose.connection.db.collections();
    if (collections.length === 0) {
      console.log("No collections found in the database.");
      collectionList = [];
    } else {
      return collections.map((collection) => collection.collectionName);
    }
  } catch (err) {
    console.error("Error listing collections:", err);
    throw err;
  }
};



const connectDatabase = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGODB_URI);
    if (result) {
      console.log("Database connected successfully");
      return { collectionsList: await fetchCollectionListInDatabase() };
    }
  } catch (error) {
    console.log("not connected with databases", error.message);
  }
};

export default connectDatabase;
