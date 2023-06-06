import { useState } from "react";
import Back from "../Back/Back";

const Register = () => {
  const [data, setData] = useState({
    // nombre: "",
    // apellido: "",
    // edad: "",
    // password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    const dataCopy = { ...data };
    dataCopy[name] = value;
    setData(dataCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      // nombre: "",
      // apellido: "",
      // edad: "",
      // password: "",
    });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={data?.nombre||""}
          id="nombre"
          onInput={handleInput}
        />

        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          value={data?.apellido||""}
          onInput={handleInput}
        />

        <label htmlFor="edad">Edad</label>
        <input
          type="number"
          name="edad"
          id="edad"
          value={data?.edad||""}
          onInput={handleInput}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data?.password||""}
          onInput={handleInput}
        />
        <button>enviar</button>
      </form>

      <Back url="" />
    </div>
  );
};
export default Register;
