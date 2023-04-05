import React, { useState } from "react";

const Form = () => {
  const [userData, setUserDate] = useState({ name: "", email: "", number: "" });

  const handleChange = (e) => {
    setUserDate({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length < 2) {
      console.log("nombre no valido");
      setError(true)
      setErrorMessage("El nombre no puede tener menos de 2 caracteres")
      return;
    }
  };

  const [error, setError] = useState(false)
  const[errorMessage, setErrorMessage] = useState("")

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Ingrese su mail"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrese su teléfono"
          name="number"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {
        error ? <h1>{errorMessage}</h1> : null
      }
    </div>
  );
};

export default Form;
