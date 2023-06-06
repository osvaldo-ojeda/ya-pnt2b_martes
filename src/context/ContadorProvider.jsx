import { createContext, useState } from "react";

export const contador = createContext({});

const { Provider } = contador;

const ContadorProvider = ({ children }) => {


  const contador={
    nombre:"KUKA"
  }
  return <Provider value={contador}>{children} </Provider>;
};

export default ContadorProvider;
