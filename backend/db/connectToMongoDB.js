import mongoose from "mongoose";

const connectToMongoDB = async () => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectToMongoDB;
