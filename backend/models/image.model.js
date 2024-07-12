import mongoose from "mongoose";
const { Schema } = mongoose;

const imageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    urlEncodedString: {
      type: String,
      required: true,
    },
    folder: {
      type: Schema.Types.ObjectId,
      ref: "Folder",
      required: true,
    },
  },
  { timestamps: true }
);

const Image = mongoose.model("Image", imageSchema);

export default Image;
