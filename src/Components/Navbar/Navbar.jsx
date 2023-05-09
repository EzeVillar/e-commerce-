import { Button } from "@mui/material";
import CartWirdget from "../CartWidget/CartWirdget";
import styles from "./NavBar.module.css";
import {Link} from "react-router-dom";

const Navbar = ({children}) => {
  return (
    <div>
        <div className={styles.containerNavbar}>
           <Link to="/"> <img src="https://res.cloudinary.com/dx1yhtrla/image/upload/v1680217966/prueba_xmvzpx.png" alt="Logo"/> </Link>
                <ul className={styles.containerList}>
                  <Button variant="contained"> <Link to="/category/botines" className={styles.list}>Botines</Link> </Button>
                  <Button variant="contained"> <Link to="/category/pelotas" className={styles.list}>Pelotas</Link> </Button>  
                  <Button variant="contained"> <Link to="/category/camisetas" className={styles.list}>Camisetas</Link> </Button>  
                </ul>
                <CartWirdget />
              </div>
          </div>
    );
};

export default Navbar;
