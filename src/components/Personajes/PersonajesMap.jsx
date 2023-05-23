import Personaje from "./Personaje";

const PersonajesMap = ({ personajes }) => {
  return personajes.map((personaje) => {
    return <Personaje key={personaje.id} personaje={personaje} />;
  });
};
export default PersonajesMap;
