import { Link } from "react-router-dom";

const Back = ({url}) => {
  return (
    <Link to={`/${url}`}>
      <button>back</button>
    </Link>
  );
};
export default Back;
