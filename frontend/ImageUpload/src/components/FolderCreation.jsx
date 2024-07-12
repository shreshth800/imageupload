import React, { useState } from "react";
import axios from "axios";

const FolderCreation = ({ currentFolderId, fetchFolder }) => {
  const [newFolderName, setNewFolderName] = useState("");

  const handleNewFolderChange = (e) => {
    setNewFolderName(e.target.value);
  };

  const handleAddFolder = async () => {
    if (!newFolderName) return;

    try {
      const response = await axios.post("/api/folders", {
        name: newFolderName,
        parentFolderId: currentFolderId,
      });

      fetchFolder(currentFolderId);
      setNewFolderName("");
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center transform -translate-x-2 mt-5">
      <div className="flex items-center justify-center mb-5">
        <div className="w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            value={newFolderName}
            onChange={handleNewFolderChange}
            placeholder="Folder Name"
          />
        </div>
      </div>
      <div className="transform translate-x-3">
        <div className="w-36">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            onClick={handleAddFolder}
            type="button"
          >
            New Folder
          </button>
        </div>
      </div>
    </div>
  );
};

export default FolderCreation;
