import { useContext } from "react";
import { contador } from "../context/ContadorProvider";
import NavBar from "./NavBar";


const Header = () => {
const {count}=useContext(contador)

  return (
    <header>
      <NavBar />
      <span className="count">{count}</span>
    </header>
  );
};
export default Header;
