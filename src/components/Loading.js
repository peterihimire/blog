import React from "react";
import loadingGif from "../images/loading.gif";

const loading = () => {
  return (
    <div className="loading">
      {/* <h4>projects data loading...</h4> */}
      <img src={loadingGif} alt="loading gif" />
    </div>
  );
};

export default loading;
