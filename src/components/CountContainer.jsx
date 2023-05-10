import { useState } from "react";
import CountButtom from "./CountButtom";

const CountContainer = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const del = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      {/* <button onClick={add}>Add</button>
      <button onClick={del}>Delete</button>
      <button onClick={reset}>Reset</button> */}
      <CountButtom name={"del"} method={del} />
      <CountButtom name={"add"} method={add} />
      <CountButtom name={"reset"} method={reset} />
      <h1>{count}</h1>
    </div>
  );
};
export default CountContainer;
