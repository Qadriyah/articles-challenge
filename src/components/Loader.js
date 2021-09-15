import React from "react";

const Loader = () => {
  return (
    <div className="spinner-container" data-test="spinner-container">
      <img
        src="media/circles-loader.svg"
        className="spinner"
        alt=""
        data-test="spinner"
      />
    </div>
  );
};

export default Loader;
