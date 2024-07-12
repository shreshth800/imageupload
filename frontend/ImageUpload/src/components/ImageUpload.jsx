import React, { useState } from "react";
import axios from "axios";

const ImageUpload = ({ folderId, fetchFolder }) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      //   const base64String = reader.result?.split(",")[1];
      setImage(reader.result);
      setImageName(file.name);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = async () => {
    if (!image) {
      alert("Please select an image.");
      return;
    }

    try {
      const formData = {
        name: imageName || "Untitled Image",
        urlEncodedString: image,
        folderId: folderId,
      };

      const response = await axios.post("/api/images", formData);
      console.log("Image uploaded successfully:", response.data);

      fetchFolder(folderId);

      setImage(null);
      setImageName("");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <div className="w-2/3 m-4">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="file"
          accept=".jpg,.jpeg,.png,.gif"
          onChange={handleImageChange}
        />
      </div>
      <div className="ml-4">
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={handleImageUpload}
          type="button"
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
