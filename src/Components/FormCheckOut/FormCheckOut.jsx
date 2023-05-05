import { useState } from 'react';
import { addDoc,collection,updateDoc, doc} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Swal from 'sweetalert2';
import "./FormCheckOut.css"

const FormCheckOut = ({cart,getTotalPrice,setOrderId,clearCart}) => {
    const [userData, setUserDate] = useState({
        name: "",
        email:"",
        phone:"",

    });
   
    const handleSumbit = (e) => {
        e.preventDefault()
        if (!userData.name || !userData.email || !userData.phone) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, complete el formulario.',
              })
            return
          }
            let total = getTotalPrice()
            let order = {
                buyer: userData,
                items: cart,
                total
        }
    
        let orderCollection = collection( db,"orders" )
        addDoc(orderCollection, order)
            .then(res => {
                setOrderId(res.id)
                clearCart()
            })
            .catch(err => console.log(err));

            cart.map((product)=>{
                let refDoc = doc(db,"products",product.id)
                    updateDoc(refDoc,{stock:product.stock - product.quantity});
                    return null
            });
    }

  return (
    <div className='form'>
      <h1 className='title-check'>Ingrese sus datos.</h1>
        <form onSubmit={handleSumbit}>
            <input type="text" 
            placeholder='Nombre' 
            value={userData.name} 
            onChange={(e) => setUserDate({...userData,name: e.target.value})}/>
            <input type="email" 
            placeholder='Email'
            value={userData.email}
            onChange={(e) => setUserDate({...userData,email: e.target.value})}/>
            <input type="text"
            placeholder='Telefono'
            value={userData.phone}
            onChange={(e) => setUserDate({...userData,phone: e.target.value})}/>
            <button type='submit'>Comprar</button>
         </form>
    </div>
  )
}

export default FormCheckOut

