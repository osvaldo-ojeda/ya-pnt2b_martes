import { useEffect, useState } from "react";
import PersonajesMap from "./PersonajesMap";

const PersonajesContainer = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((data) => setPersonajes(data.results));
  }, []);

  return <PersonajesMap personajes={personajes} />;
};
export default PersonajesContainer;
