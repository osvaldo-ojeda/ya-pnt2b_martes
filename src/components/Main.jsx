import { Outlet } from "react-router-dom";
// import PersonajeContainer from "./Personaje/PersonajeContainer";
// import PersonajesContainer from "./Personajes/PersonajesContainer";

const Main = () => {
  return (
    <main>
      <Outlet />
      {/* <PersonajesContainer />
      <PersonajeContainer/> */}
    </main>
  );
};
export default Main;
