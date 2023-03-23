import "./ProductCard.css";

const ProductCard = ({ title, price = 0, isRed,login }) => {
  const saludar = (nombre) => {
    console.log("hola" + nombre);
  };

  // saludar("pepe")

  return (
    <div>
      <h1 classname={isRed ? "red" : "blue"}> {title} </h1>
      <h2>{price}</h2>
      <button onClick={saludar}>Saludar</button>
      <button onClick={login}>Ingresar</button>
    </div>
  );
};

export default ProductCard;
