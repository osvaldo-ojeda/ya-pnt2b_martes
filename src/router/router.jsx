import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import PersonajesContainer from "../components/Personajes/PersonajesContainer";
import PersonajeContainer from "../components/Personaje/PersonajeContainer";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/personajes",
        element: <PersonajesContainer />,
      },
      {
        path: "/detail/:id",
        element: <PersonajeContainer />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <h2>Aca iria el registro</h2>,
  },
]);

export default router;
