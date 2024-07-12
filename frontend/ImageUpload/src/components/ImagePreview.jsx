import React from "react";

const ImagePreview = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;
  console.log(imageUrl);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={onClose}
    >
      <div className="relative">
        <img src={imageUrl} alt="Preview" className="max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default ImagePreview;
