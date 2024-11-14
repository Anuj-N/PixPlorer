import React from "react";
import Card from "./Card";

import "./LoadingSpinner.css";

const LoadingSpinner = (props) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__overlay"}`}>
      <Card>
        <h4>Please wait, initial loading may take a minute</h4>
        <div className="lds-dual-ring"></div>
      </Card>
    </div>
  );
};

export default LoadingSpinner;
