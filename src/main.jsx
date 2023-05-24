import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PersonajesContainer from "./components/Personajes/PersonajesContainer.jsx";
import PersonajeContainer from "./components/Personaje/PersonajeContainer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<PersonajesContainer/>
      },
      {
        path:"/detail/:id",
        element:<PersonajeContainer/>
      }
    ]
  },
  {
    path: "/login",
    element: <h2>Aca iria el login</h2>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
