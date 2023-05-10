import { useState } from "react";
import CountContainer from "./components/CountContainer";

const App = () => {
  // const num = [0, 1, 2];
  // const [cero, uno, dos] = num;
  // console.log("🚀 ---------------------------------------🚀")
  // console.log("🚀 ~ ", cero)
  // console.log("🚀 ~", uno)
  // console.log("🚀 ~ ", dos)
  // console.log("🚀 ---------------------------------------🚀")

  // const count=useState("")
  // console.log("🚀 -----------------------------------------🚀")
  // console.log("🚀 ~ file: App.jsx:6 ~ App ~ count:", count)
  // console.log("🚀 -----------------------------------------🚀")

  // const [nombreEstado, setNombreEstado]=useState("initial state")
  // const [count, setCount] = useState(0);
  // let count=0
  // const add = () => {
  //   setCount(count+1)
  //   console.log(count)
  // };

//  let contador=1
//  contador++
//  contador+=1
//  contador=contador+1
//  contador+1



  return (
    <div>
      {/* <button onClick={add}>add</button>
      <h1>{count}</h1> */}
      <CountContainer/>
    </div>
  );
};
export default App;
