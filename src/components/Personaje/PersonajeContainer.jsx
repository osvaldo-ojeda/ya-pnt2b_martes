import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonajeDetail from "./PersonajeDetail";

const PersonajeContainer = () => {
  const { id } = useParams();
  // console.log("🚀param:", id);
  const [personaje, setPersonaje] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setPersonaje(data);
    };
    fetchData();
  }, []);
  return <PersonajeDetail personaje={personaje} />;
};
export default PersonajeContainer;
