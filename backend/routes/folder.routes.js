import express from "express";
import {
  createFolder,
  getFolderContents,
} from "../controllers/folder.controller.js";

const router = express.Router();

router.post("/", createFolder);
router.get("/:folderId", getFolderContents);

export default router;
