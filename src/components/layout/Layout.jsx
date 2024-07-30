import { Outlet } from "react-router-dom";
import { Navbar } from "../navBar/NavBar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
