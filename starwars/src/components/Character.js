import React from "react";

import "./StarWars.css";

function getHeight(height) {
  let inches = Math.ceil(height * 0.3937007874);
  let feet = Math.ceil(inches * 0.083333);
  let remainder = inches % 12;
  return `${feet}'${remainder}`;
}

const Character = props => {
  const { character } = props;

  return (
    
      <div className="character-item">
        <h1>{character.name}</h1>
        <h3>Character Attributes</h3>
        <p>Gender: {character.gender}</p>
        <p>Height: {getHeight(character.height)}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Eye Color: {character.eye_color}</p>
      </div>
    
  );
};

export default Character;
