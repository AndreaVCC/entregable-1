import React, { useState } from "react";
import Card from "./Card";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(false);
  const [errors, setErrors] = useState([]);

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegex = /^\d{9}$/;
  const messageRegex = /^(?!\s*$).+/; // Asegura que el mensaje no esté vacío o solo tenga espacios en blanco

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    if (name.length < 3 || name.trim() !== name) {
      newErrors.push("El nombre debe tener al menos 3 caracteres");
    }

    if (surname.length < 3 || surname.trim() !== surname) {
      newErrors.push("El apellido debe tener al menos 3 caracteres");
    }

    if (!emailRegex.test(email)) {
      newErrors.push("Por favor ingresa un correo válido.");
    }

    if (!phoneRegex.test(phone)) {
      newErrors.push("El teléfono debe tener 9 dígitos.");
    }

    if (!messageRegex.test(message) || message.trim().length < 1) {
      newErrors.push("El mensaje no puede estar vacío o contener caracteres inválidos.");
    } else if (message.length > 200) {
      newErrors.push("El mensaje no puede exceder los 200 caracteres.");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setFlag(false);
    } else {
      setErrors([]);
      setFlag(true);
    }
  };

  return (
    <div className="custom-form-container">
      <form onSubmit={handleSubmit} className="custom-form">
        <h2 className="custom-form-title">Formulario de Contacto</h2>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="custom-form-input"
        />
        <input
          type="text"
          placeholder="Ingresa tu apellido"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="custom-form-input"
        />
        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="custom-form-input"
        />
        <input
          type="tel"
          placeholder="Ingresa tu teléfono (9 dígitos)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={9}
          className="custom-form-input"
        />
        <textarea
          placeholder="Ingresa tu mensaje (máximo 200 caracteres)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={200}
          className="custom-form-textarea"
        />
        <button type="submit" className="custom-form-button">Enviar</button>
      </form>

      {errors.length > 0 && (
        <div className="custom-error-message">
          <p>Por favor chequea que la información sea correcta:</p>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {flag && (
        <Card
          name={name}
          surname={surname}
          email={email}
          phone={phone}
          message={message}
        />
      )}
    </div>
  );
};

export default Form;
