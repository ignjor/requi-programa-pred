import React from "react";

const ImagenesTerr = ({ src, onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target.className === "overlay") {
      onClose();
    }
  };

  return (
    <div
      className="overlay"
      onClick={handleClickOutside}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <img
        src={src}
        alt="Territorio"
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      />
    </div>
  );
};

export default ImagenesTerr;