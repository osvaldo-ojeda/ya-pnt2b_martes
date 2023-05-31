import { Link } from "react-router-dom";

const Back = ({url}) => {
  console.log("🚀 ~ file: Back.jsx:4 ~ Back ~ url:", url)
  return (
    <Link to={`/${url}`}>
      <button>back</button>
    </Link>
  );
};
export default Back;
