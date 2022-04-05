import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
        marginTop: "200px",
      }}
      class="spinner-border"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
