
import { useContext } from "react";
import { contador } from "../../context/ContadorProvider";
import Back from "../Back/Back";

const PersonajeDetail = ({ personaje }) => {
  const {nombre}=useContext(contador)

  return (
    <div>
      <h1>{personaje.name}</h1>
      <h2>{nombre}</h2>
      <h2>Status:{personaje.status}</h2>
      <h3>Location: {personaje?.location?.name}</h3>
      <img src={personaje.image} alt={personaje.name} />
      <Back url="personajes"/>
    </div>
  );
};
export default PersonajeDetail;
