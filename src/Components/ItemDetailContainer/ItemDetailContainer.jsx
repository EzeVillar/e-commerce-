import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { getDoc, collection, doc} from "firebase/firestore"
import { db } from "../../firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const {agregarAlCarrito,getQuantityById} = useContext( CartContext)

  const [productSelected,setProductSelected] = useState({})

  useEffect(()=>{

    const itemCollection = collection(db, "products")
    const ref = doc (itemCollection, id)
    getDoc(ref)
    .then(res => {
      setProductSelected({
        ...res.data(),
        id: res.id
      })
    })

  },[id])
  

  const onAdd = (cantidad)=>{

    let producto = {
      ...productSelected,
      quantity: cantidad

    }
    
    agregarAlCarrito(producto)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Producto agregado!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  let quantity = getQuantityById(Number(id))

  return (
    <div>
      <h1>{productSelected.title}</h1>
      <img src={productSelected.img} alt=""/>
      <h3>{productSelected.description}</h3>
      <ItemCount stock={productSelected.stock} onAdd={onAdd} initial={quantity} />
    </div>
  );
};

export default ItemDetailContainer;