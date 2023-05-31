import Back from "../Back/Back";

const PersonajeDetail = ({ personaje }) => {

  return (
    <div>
      <h1>{personaje.name}</h1>
      <h2>Status:{personaje.status}</h2>
      <h3>Location: {personaje?.location?.name}</h3>
      <img src={personaje.image} alt={personaje.name} />
      <Back url="personajes"/>
    </div>
  );
};
export default PersonajeDetail;
