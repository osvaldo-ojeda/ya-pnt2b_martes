// import { useContext } from "react";

import useCounter from "../../customHooks/useCounter";

// import { contador } from "../../context/ContadorProvider";


const Counter = () => {
  // const { count, remove, add } = useContext(contador);
  const { count, remove, add } = useCounter();
  console.log("🚀 ~ file: Counter.jsx:11 ~ Counter ~ count:", count)
  return (
    <div>
      <button onClick={remove}>-</button>
      <h3>{count}</h3>
      <button onClick={add}>+</button>
    </div>
  );
};
export default Counter;
