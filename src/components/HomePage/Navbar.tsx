"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./Navbar.css";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    router.push("/home");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
