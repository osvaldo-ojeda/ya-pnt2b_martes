import { useEffect, useState } from "react";
import PersonajeDetail from "./PersonajeDetail";

const PersonajeContainer = () => {
  const [personaje, setPersonaje] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/4"
      );
      const data = await response.json();
      setPersonaje(data);
    };
    fetchData();
  }, []);
  return <PersonajeDetail personaje={personaje}/>;
};
export default PersonajeContainer;
