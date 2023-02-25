import CartWirdget from "../CartWidget/CartWirdget";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://res.cloudinary.com/dx1yhtrla/image/upload/v1677319536/2d7083ff2ceb0767830b4e93d85336db_vswak2.png"
        alt=""
        style={{ width: "3%", objectFit: "cover" }}
      />
      <ul className={styles.containerList}>
        <li className={styles.list}>Remeras</li>
        <li className={styles.list}>Botines </li>
        <li className={styles.list}>Pelotas</li>
      </ul>
      <CartWirdget />
    </div>
  );
};

export default Navbar;
