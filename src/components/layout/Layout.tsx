import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
