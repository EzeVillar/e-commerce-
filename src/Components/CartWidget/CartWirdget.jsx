import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWirdget.css"

const CartWirdget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link to="/cart">
      <div>
        <FiShoppingCart color="black" size={50} />
        <div className="total-cartwirdget" >
          <span>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWirdget;
