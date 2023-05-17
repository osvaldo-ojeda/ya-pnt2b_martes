import { useEffect, useState } from "react";
const PersonajeContainer = () => {
  const [personaje, setPersonaje] = useState({});
  useEffect(() => {
    // (async () => {
    //   const response = await fetch(
    //     "https://rickandmortyapi.com/api/character/4"
    //   );
    //   console.log("response", response);
    // })();
    const fetchData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/4"
      );
      const data = await response.json();
      setPersonaje(data);
    };
    fetchData();
  }, []);
  console.log("perfsonaje", personaje);

  return <div>PersonajeContainer</div>;
};
export default PersonajeContainer;
