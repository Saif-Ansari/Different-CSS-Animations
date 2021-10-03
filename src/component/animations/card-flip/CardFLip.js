import React from "react";
import Card from "../../Card";
import "./card-flip.scss";
const CardFLip = () => {
  return (
    <Card title="Card Flip Animation">
      <div className="cardFlip">
        <div className="cardFlip__side cardFlip__side--front">Front Side</div>
        <div className="cardFlip__side cardFlip__side--back">Back Side</div>
      </div>
    </Card>
  );
};

export default CardFLip;
