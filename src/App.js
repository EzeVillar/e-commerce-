import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Login from "./Components/Login/Login";
import Form from "./Components/Form/Form";
import CartContextProvider from "./context/CartContext";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider> 
        <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/login" element={<Login/>}></Route>
            <Route path="formulario" element={<Form/>}></Route>
            <Route path ="*" element={<h1>error 404 :Not Found </h1>} />
          </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
