import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { SEO } from "../SEO";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const { pathname } = location;

  let titleData;

  if (pathname === "/home" || pathname === "/") {
    titleData = {
      title: "WebDev - Home",
      metaDescription: "Home page of Wed-dev blog",
    };
  }   else if (pathname === "/contacts") {
    titleData = {
      title: "Hux - Contacts",
      metaDescription: "all available contacts",
    };
  } else if (pathname === "/get-started/signin") {
    titleData = {
      title: "Hux - Get Started",
      metaDescription: "sign in on hux to get started",
    };
  } else if (pathname === "/get-started/signup") {
    titleData = {
      title: "Hux - Get Started",
      metaDescription: "Sign up on hux to get started",
    };
  }   else {
    titleData = {
      title: "404 Error - Page not found",
      metaDescription: "Page not found",
    };
  }

  SEO(titleData);
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
