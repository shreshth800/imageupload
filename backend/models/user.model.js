import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    default: false,
    enum: ["male", "female"],
  },
  profilePic: {
    type: String,
    default: "",
  },
  rootFolder: {
    type: Schema.Types.ObjectId,
    ref: "Folder",
  },
});

const User = mongoose.model("User", userSchema);
export default User;
