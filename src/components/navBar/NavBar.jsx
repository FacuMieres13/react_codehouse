import CartWidget from "../cartWidget/CartWidget";
import Logo from "/public/Media/EokaStoreLogo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <>
        <div className="containerNavbar">
          <Link style={{ color: "beige" }} to="/">
            <img className="img-logo" src={Logo} alt="Logo Eoka Store" />
          </Link>
          <ul className="categories">
            <Link to="/">All Games</Link>
            <Link to="/category/shooters">Shooters</Link>
            <Link to="/category/strategy">Strategy</Link>
            <Link to="/category/adventure">Adventure</Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
