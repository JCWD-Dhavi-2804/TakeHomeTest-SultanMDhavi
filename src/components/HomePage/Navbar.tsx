"use client";
import { useRouter } from "next/navigation";
import "./Navbar.css";

const Navbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* logo section */}
          <div className="navbar-logo" onClick={handleClick}>
            <img src="/images/logo.png" alt="logo" />
          </div>

          {/* navlinks section */}
          <nav className="navbar-links">
            <a href="/checkout" className="navbar-link">
              Checkout
            </a>
            <a href="/login" className="navbar-link">
              Log In
            </a>
            <a href="/register" className="navbar-link">
              Register
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
