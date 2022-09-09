import axios from "axios";
import React, { useEffect, useState } from "react";
import App from "../App.css";

const CharacterItem = ({ url, residents }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);

  return (
    <>
      <div className="cardCharacter">
        <h1>{character.name}</h1>
        <img src={character.image} alt="" />
        <p>
          <b>Type: </b>
          {character.type ? character.type : "Unknown"}
        </p>
        <p>
          <b>Dimension: </b>
          {character.dimension ? character.dimension : "Unknown"}
        </p>
      </div>
    </>
  );
};

export default CharacterItem;
