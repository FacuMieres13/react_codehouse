import "./navbar.css";
import Logo from "/media/Logo.png";
import { CarWidget } from "../carWidget/CarWidget";
export const NavBar = () => {
  return (
    <div className="navbarContainer">
      <a href="#">
        <img className="logo-img" src={Logo} alt="" />
      </a>
      <ul style={{ display: "flex", gap: "40px" }}>
        <li style={{ listStyle: "none" }}>Más Jugados</li>
        <li style={{ listStyle: "none" }}>Categorías</li>
        <li style={{ listStyle: "none" }}>Reseñas</li>
      </ul>
      <CarWidget />
    </div>
  );
};
