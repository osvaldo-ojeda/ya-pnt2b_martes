import { useContext } from "react";
import { contador } from "../context/ContadorProvider";


const Footer = () => {
const {nombre}=useContext(contador)

  return <footer>
    <h2>
      {nombre}
    </h2>
    Footer</footer>;
};
export default Footer;
