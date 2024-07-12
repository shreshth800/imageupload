import Image from "../models/image.model.js";
import Folder from "../models/folder.model.js";

export const createImage = async (req, res) => {
  try {
    const { name, urlEncodedString, folderId } = req.body;

    const newImage = new Image({
      name,
      urlEncodedString,
      folder: folderId,
    });
    await newImage.save();

    const folder = await Folder.findById(folderId);
    folder.images.push(newImage._id);
    await folder.save();

    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
