import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Swal from 'sweetalert2'
import { useState } from "react"
import FormCheckOut from "../FormCheckOut/FormCheckOut"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import "./cart.css"

const Cart = () => {
  
  const { cart,clearCart, getTotalPrice, deleteProductById} = useContext(CartContext)
  
  const precioTotal = getTotalPrice()

  const [showForm, setShowForm] = useState(false);
  const [orderId,setOrderId] = useState(null);

  const clear = () =>{
    Swal.fire({
      title: '¿Seguro quieres borrar el carrito?',
      showDenyButton: true,
      confirmButtonText: 'Si,quiero vacíar.',
      denyButtonText: `No, no quiero vacíar.`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Se vacío el carrito!', '', 'success')
        clearCart()
      } else if (result.isDenied) {
        Swal.fire('El carrito no se modifico.', '', 'info')
      }
    })
  }

  if(orderId){
    return(
      <div className="cart-order">
        <h2 >¡Gracias por su compra!</h2>
        <h4>El comprobante es : {orderId}</h4>
        <Button variant="contained" size="small"> 
          <Link  className="cart-seguir" to="/" >Seguir viendo</Link> 
        </Button> 
      </div>
    )
  }

  return (
      <div>
        {
          !showForm ? (
            <div style={{width:"100%",display:"flex",justifyContent:"space-evenly"}} >
            {
              cart.map ((elemento) => {
                return <div className="caja-cart" key={elemento.id}>
                <h2>{elemento.title}</h2>
                <img src={elemento.img} alt="" style={{width:"200px"}}/>
                <h3>Unidades:{elemento.quantity}</h3>
                <Button onClick={() =>deleteProductById(elemento.id)} variant="contained" color="error" size="small" >Eliminar</Button>
                <h2>{elemento.price}</h2>
              </div>
            })
          }
            <h1>El total es : {precioTotal} </h1>
            {
              cart.length > 0 && (<div>
                <Button  onClick={()=> setShowForm(true)}  variant="contained" color="success" >Finalizar la compra</Button>
                <Button onClick={(clear)}  variant="contained" color="error" >Limpiar carrito</Button>
                </div>)}
              </div>
          ) : <FormCheckOut cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart}/>
        }
  
      </div>
    
  )
}

export default Cart