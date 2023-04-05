import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../firebaseConfig"
import { collection, getDocs,query,where } from "firebase/firestore"



const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#82b4dd",
};

const ItemListContainer = () => {
 const{categoryName} = useParams();
 
 const [items, setItems] = useState([]);



  useEffect(() => {
    const itemsCollection = collection(db,"products")
    
    let consulta = undefined

      if(categoryName) {
        const q = query(itemsCollection, where("category", "==",categoryName));
        consulta = getDocs(q);
      } else {      
        consulta = getDocs(itemsCollection)
       }  
       consulta.then((res)=> {
        let products = res.docs.map((elemento)=> {
          return {
            ...elemento.data(),
            id: elemento.id
          };
        });
        setItems(products)
      });
      },[categoryName]);

  if( items.length === 0){
    return  <ClipLoader
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
