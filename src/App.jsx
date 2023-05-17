import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
const App = () => {
  // const obj = {
  //   nombre: "osvaldito",
  //   apellido: "ojeda",
  // };

  // const nombre=obj.nombre
  // const apellido=obj.apellido
  // --------
  // const { nombre } = obj;
  // const { apellido } = obj;
  // --------
  // const { apellido, nombre, edad } = obj;

  // console.log("🚀 --------------------------------------------🚀");
  // console.log("🚀 ~ nombre", nombre);
  // console.log("🚀 ~ apellido", apellido);
  // console.log("🚀 ~ edad", edad);
  // console.log("🚀 --------------------------------------------🚀");
  // --------------------
  // const array = ["Santiago", "Osvaldito", "Valentin"];
  // const nombre0=array[0]
  // const nombre1=array[1]
  // const nombre2=array[2]
  // // ------------------
  // const [nombre0]=array
  // const [nombre1]=array
  // const [nombre2]=array[2]
  // // ------------------
  // const [nombre1, nombre2, nombre0] = array;
  // const [nombre1, nombre2, nombre0]=["Santiago", "Osvaldito","Valentin"]

  // console.log("🚀 ----------------------------------------------🚀");
  // console.log("🚀 ~ nombre0:", nombre0);
  // console.log("🚀 ~ nombre1:", nombre1);
  // console.log("🚀 ~ nombre2:", nombre2);
  // console.log("🚀 ----------------------------------------------🚀");

  return (
    <>
      <Header /> 
      <Main />
      <Footer/>
    </>
  );
};
export default App;
