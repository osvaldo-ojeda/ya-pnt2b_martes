import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonajeDetail from "./PersonajeDetail";
import { useGetOneCharacterQuery } from "../../store/service/rickAndMorty";

const PersonajeContainer = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetOneCharacterQuery(id);
  return isLoading ? (
    <h1>esta cargando</h1>
  ) : (
    <PersonajeDetail personaje={data} />
  );
};
export default PersonajeContainer;
