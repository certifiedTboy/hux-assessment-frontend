import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { SEO } from "../SEO";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <header className="fixed-top">
        <NavBar />
      </header>
      <main style={{ marginTop: "100px" }}>
        <AppRoutes />
      </main>
      {pathname === "/" && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default Layout;
