import { useEffect, useState } from "react";
import PersonajesMap from "./PersonajesMap";
import { useGetAllCharactersQuery } from "../../store/service/rickAndMorty";

const PersonajesContainer = () => {
  const {data, isError, isLoading} = useGetAllCharactersQuery();
  // console.log("🚀 caracter:", data)
  // const [personajes, setPersonajes] = useState([]);

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => setPersonajes(data.results));
  // }, []);

  return isLoading? <h1>esta cargando </h1> :<PersonajesMap personajes={data.results} />;
};
export default PersonajesContainer;
