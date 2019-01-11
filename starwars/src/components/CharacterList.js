import React from "react";
import Character from "./Character";



const CharacterList = props => {
  const { characters } = props;

  

  return (
    <div className="character-container">
      {characters.map((character, index) => {
        return <Character character={character} key={index} />;
      })}
    </div>
  );
};

export default CharacterList;
