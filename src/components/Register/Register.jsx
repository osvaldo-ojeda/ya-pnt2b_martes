import { useState } from "react";
import Back from "../Back/Back";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const handleNombreInput = (e) => {
    // console.log(e.target.value);
    // console.dir(e.target);
    setNombre(e.target.value);
  };

  const handleApellidoInput = (e) => {
    setApellido(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      nombre,
      apellido,
    };
    console.log("🚀 obj:", obj);
    setNombre("")
    setApellido("")
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          id="nombre"
          onInput={handleNombreInput}
        />

        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          value={apellido}
          onInput={handleApellidoInput}
        />

        <label htmlFor="edad">Edad</label>
        <input type="number" name="edad" id="edad" />

        <input type="password" name="password" placeholder="Password" />
        <button>enviar</button>
      </form>

      <Back url="" />
    </div>
  );
};
export default Register;
