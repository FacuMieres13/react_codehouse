import React from "react";
import "./navBar.css";
import { CarWidget } from "../carWidget/CarWidget";
import Logo from "/public/media/Logo.png";
export const NavBar = () => {
  return (
    <div className="navbarContainer">
      <a href="">
        <img className="logo-img" src={Logo} alt="" srcset="" />
      </a>
      <ul style={{ display: "flex", gap: "20px" }}>
        <a href="">
          <li style={{ listStyle: "none" }}>Todas</li>
        </a>
        <a href="">
          <li style={{ listStyle: "none" }}>Urbanas</li>
        </a>
        <a href="">
          <li style={{ listStyle: "none" }}>Deportivas</li>
        </a>
      </ul>
      <CarWidget />
    </div>
  );
};
