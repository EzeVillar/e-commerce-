import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";


function App() {
  return (
    <div>
      <Navbar /> 
      <ItemListContainer greeting={"Bienvenido"} />
      <ProductCard title="producto1" price={2000} isRed={false} />
      <ProductCard title="producto2" price={2000} isRed={true} />
      <ProductCard title="producto3" isRed={true} />
      <Footer />
    </div>
  );
}

export default App;
