import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import "./ItemCount.css"

const ItemCount = ( {stock,initial=1,onAdd}) => {
  const [contador, setContador] = useState(initial);


  useEffect(()=>{
    setContador(initial)
  }, [initial])

  const sumar = () => {
    if(contador < stock) {
      setContador(contador +1 )
    }
  };

  const restar = () => {
    if(contador > 1) {
      setContador(contador - 1)
    }
  };



  return (
    <div >
      <h2>Cantidad: {contador}</h2>
        <div className="bottones-item" > 
         <Button size="small" variant="contained" onClick={sumar}>Sumar</Button> 
          <Button size="small" variant="contained" color="error" onClick={restar}>Restar</Button>
          <Button size="small" variant="contained" color="success" onClick={ () => onAdd(contador)}>Agregar al carrito</Button>
        </div>
    </div>
  );
};

export default ItemCount;
