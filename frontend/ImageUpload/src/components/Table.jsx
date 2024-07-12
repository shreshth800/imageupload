import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import axios from "axios";
import ImageUpload from "./ImageUpload";
import FolderCreation from "./FolderCreation";
import ImagePreview from "./ImagePreview";

export function TableMain() {
  const [currentFolder, setCurrentFolder] = useState(null);
  const [folders, setFolders] = useState([]);
  const [images, setImages] = useState([]);
  const [parentFolder, setParentFolder] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetchFolder(null);
  }, []);

  const fetchFolder = async (folderId) => {
    try {
      const response = await axios.get(
        `/api/folders/${folderId || "6690ede8662a627434eb5081"}`
      );
      setCurrentFolder(response.data);
      setFolders(response.data.subFolders);
      setImages(response.data.images);
      setParentFolder(response.data.parentFolder);
    } catch (error) {
      console.error("Error fetching folder:", error);
    }
  };

  const handleFolderClick = (folderId) => {
    fetchFolder(folderId);
  };

  const handleParentClick = () => {
    fetchFolder(parentFolder);
  };

  const handleImagePreview = (url) => {
    setImageUrl(url);
  };

  const handleClosePreview = () => {
    setImageUrl(null);
  };

  return (
    <div className="overflow-x-auto m-1">
      <Table className="rounded-lg overflow-hidden ">
        <Table.Body className="divide-y">
          {parentFolder && (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                ...
              </Table.Cell>
              <Table.Cell>
                <button
                  onClick={handleParentClick}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Back
                </button>
              </Table.Cell>
            </Table.Row>
          )}
          {folders.map((folder) => (
            <Table.Row
              key={folder._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {folder.name}
              </Table.Cell>
              <Table.Cell>
                <button
                  onClick={() => handleFolderClick(folder._id)}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Open
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
          {images.map((image) => (
            <Table.Row
              key={image._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {image.name}
              </Table.Cell>
              <Table.Cell>
                <button
                  onClick={() => handleImagePreview(image.urlEncodedString)}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  View
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <FolderCreation
        currentFolderId={currentFolder?._id}
        fetchFolder={fetchFolder}
      />
      <ImageUpload folderId={currentFolder?._id} fetchFolder={fetchFolder} />
      <ImagePreview imageUrl={imageUrl} onClose={handleClosePreview} />
    </div>
  );
}

export default TableMain;
