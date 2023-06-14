import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const remove = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };

  return {
    count,
    remove,
    add,
  };
};

export default useCounter;
