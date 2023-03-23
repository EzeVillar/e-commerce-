import ItemCount from "../ItemCount/ItemCount"
import {useParams} from "react-router-dom"
import { products } from '../../productsMock'

const ItemDetailContainer = () => {
  const {id} = useParams()
 
    const productSelected = products.find( (element ) => element.id === Number(id))

    return (
     <div>
        <h1>{productSelected.title}</h1>
        <img src={productSelected.img} alt="" />
        <ItemCount/>
    </div>
  )
}

export default ItemDetailContainer