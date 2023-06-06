import { useContext } from "react";
import { contador } from "../context/ContadorProvider";
import NavBar from "./NavBar";


const Header = () => {
const {nombre}=useContext(contador)
// console.log("🚀 ~ file: Header.jsx:8 ~ Header ~ obj:", obj)

  return (
    <header>
      <h1>{nombre}</h1>
      <NavBar />
    </header>
  );
};
export default Header;
