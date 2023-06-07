import { createContext, useState } from "react";

export const contador = createContext({});

const { Provider } = contador;

const ContadorProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const remove = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  const contador = {
    count,
    remove,
    add,
  };
  return <Provider value={contador}>{children} </Provider>;
};

export default ContadorProvider;
