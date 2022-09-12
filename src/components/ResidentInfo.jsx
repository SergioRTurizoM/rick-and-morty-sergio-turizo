import axios from "axios";
import React, { useEffect, useState } from "react";
import App from "../App.css";

const CharacterItem = ({ url }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);

  console.log(character);

  return (
    <>
      <div className="cardCharacter">
        <img class="profilePhoto" src={character.image} alt="" />
        <p class="characterName">{character.name}</p>
        <p class="dataStatus"><b class="circleLive" style={{backgroundColor: character.status === "Alive" ? "green": character.status === "Dead" ? "red" : "gray"}}></b><b class="infoStatus"></b>{character.status ? character.status : "Unknown"} </p>
        <b class="infoCharacter">TYPE: </b>
        <p class="dataCharacter">{character.type ? character.type : "Unknown"}</p>
        <b class="infoCharacter">ORIGIN: </b>
        <p class="dataCharacter">{character.origin?.name ? character.origin?.name : "Unknown"}</p>
        <b class="infoCharacter">EPISODES: </b>
        <p class="dataCharacter">{character?.episode?.length ? character?.episode?.length : "Unknown"}</p>
      </div>
    </>
  );
};

export default CharacterItem;