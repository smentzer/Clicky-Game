import React from "react";
import "./style.css";



//pass the image into each card so all 16 are rendered
const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.image.replace(".png", "")} onClick={() => props.shuffleCharacter(props.characters)} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default CharacterCard;




