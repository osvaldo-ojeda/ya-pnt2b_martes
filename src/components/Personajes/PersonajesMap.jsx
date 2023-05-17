import Personaje from "./Personaje";

const PersonajesMap = ({ personajes }) => {
  // console.log("personajes map")

  return personajes.map((personaje) => {
    return <Personaje key={personaje.id} personaje={personaje} />;
  });
};
export default PersonajesMap;
