import React from "react";
import Card from "../../Card";
import "./basicText.scss";
const BasicText = () => {
  return (
    <Card title="Basic Text Animation">
      <div className="basic-text-animation">
        <h2>Basic Text to Animate Left</h2>
        <h3>Basic Text to Animate Right</h3>
      </div>
    </Card>
  );
};

export default BasicText;
