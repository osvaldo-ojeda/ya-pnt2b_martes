import axios from "axios";
import { useState } from "react";
import Back from "../Back/Back";

const Register = () => {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
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
    axios
    .post("http://localhost:8080/users",data)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));


    // setData({
    //   nombre: "",
    //   apellido: "",
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={data.nombre}
          id="nombre"
          onInput={handleInput}
        />

        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          value={data?.apellido || ""}
          onInput={handleInput}
        />

        <label htmlFor="edad">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data?.email || ""}
          onInput={handleInput}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data?.password || ""}
          onInput={handleInput}
        />
        <button>enviar</button>
      </form>

      <Back url="" />
    </div>
  );
};
export default Register;
