
const Message = ({ name, surname, email, phone, message }) => {
  return (
    <div>
      <h2>Gracias, {name} {surname}!</h2>
      <h4>Te enviaremos más información a {email}.</h4>
      <p>Teléfono de contacto: {phone}</p>
      <p>Tu mensaje:</p>
      <div style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
        {message}
      </div>
      <p>Correo enviado correctamente.</p>
    </div>
  );
};

export default Message;
