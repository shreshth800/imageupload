import mongoose from "mongoose";
const { Schema } = mongoose;

const folderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parentFolder: {
      type: Schema.Types.ObjectId,
      ref: "Folder",
      default: null,
    },
    subFolders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Folder",
      },
    ],
    images: [
      {
        type: Schema.Types.ObjectId,
        ref: "Image",
      },
    ],
  },
  { timestamps: true }
);

const Folder = mongoose.model("Folder", folderSchema);

export default Folder;
