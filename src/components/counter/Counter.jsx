import { useContext } from "react";
import { contador } from "../../context/ContadorProvider";

const Counter = () => {
  const { count, remove, add } = useContext(contador);
  return (
    <div>
      <button onClick={remove}>-</button>
      <h3>{count}</h3>
      <button onClick={add}>+</button>
    </div>
  );
};
export default Counter;
