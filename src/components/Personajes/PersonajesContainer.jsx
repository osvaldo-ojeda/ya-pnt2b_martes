import { useEffect, useState } from "react";
import PersonajesMap from "./PersonajesMap";

const PersonajesContainer = () => {
  const [personajes, setPersonajes] = useState([]);
  //   useEffect(callback,dependencia);// la dependencia podria no estar
  useEffect(() => {
    // console.log("efecto");
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPersonajes(data.results));
  },[]);

  // console.log("personajesContainer")

  return <PersonajesMap personajes={personajes}/>;
};
export default PersonajesContainer;
