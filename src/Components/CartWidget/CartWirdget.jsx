import { FiShoppingCart } from "react-icons/fi";
import {Link} from "react-router-dom"

const CartWirdget = () => {
  return (
      <Link to="/cart"> 
          <div>
            <span>0</span>
            <FiShoppingCart color="black" size={50}/>
          </div>
      </Link>
  );
};

export default CartWirdget;
