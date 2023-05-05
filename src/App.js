import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider> 
        <Navbar/>
        <div>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryName" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path ="*" element={<h1>error 404 :Not Found </h1>} />
            </Routes>
            </div>
            <Footer/>   
       </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
