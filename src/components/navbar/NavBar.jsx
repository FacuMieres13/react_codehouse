import React from "react";
import "./navbar.css";
import { CarWidget } from "../carWidget/CarWidget";
export const NavBar = () => {
  return (
    <div className="navbarContainer">
      <h1>NavBar</h1>
      <ul style={{ display: "flex", gap: "20px" }}>
        <li style={{ listStyle: "none" }}>Todas</li>
        <li style={{ listStyle: "none" }}>Urbanas</li>
        <li style={{ listStyle: "none" }}>Deportivas</li>
      </ul>
      <CarWidget />
    </div>
  );
};
