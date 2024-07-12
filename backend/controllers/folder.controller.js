import Folder from "../models/folder.model.js";

export const createFolder = async (req, res) => {
  try {
    const { name, parentFolderId } = req.body;
    const newFolder = new Folder({
      name,
      parentFolder: parentFolderId || null,
    });
    await newFolder.save();

    if (parentFolderId) {
      const parentFolder = await Folder.findById(parentFolderId);
      parentFolder.subFolders.push(newFolder._id);
      await parentFolder.save();
    }

    res.status(201).json(newFolder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFolderContents = async (req, res) => {
  try {
    const { folderId } = req.params;
    const folder = await Folder.findById(folderId).populate(
      "subFolders images"
    );
    if (!folder) {
      return res.status(404).json({ error: "Folder not found" });
    }
    res.json(folder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
