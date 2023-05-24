import { Link } from "react-router-dom";

const Personaje = ({ personaje }) => {
  return (
    <Link to={`/detail/${personaje.id}`}>
      <div>
        <h1>{personaje.name}</h1>
        <img src={personaje.image} alt={personaje.name} />
      </div>
    </Link>
  );
};
export default Personaje;
