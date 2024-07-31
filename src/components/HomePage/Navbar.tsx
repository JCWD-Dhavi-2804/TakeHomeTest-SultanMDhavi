"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className="fixed top-0 left-0 right-0 z-50 bg-white text-green-400 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* logo section */}
          <div className="flex-shrink-0">
            <img
              onClick={handleClick}
              src="/images/logo.png"
              alt="logo"
              className="w-1/2 cursor-pointer"
            />
          </div>

          {/* hamburger menu button */}
          <div className="md:flex lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-green-400 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* navlinks section */}
          <nav className="hidden lg:flex lg:space-x-6">
            <a href="/login" className="text-lg font-bold hover:text-green-500">
              Log In
            </a>
            <a
              href="/register"
              className="text-lg font-bold hover:text-green-500"
            >
              Register
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:flex lg:hidden bg-primary">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <a
              href="/login"
              className="text-md font-semibold hover:text-green-500"
            >
              Log in
            </a>
            <a
              href="/register"
              className="text-md font-semibold hover:text-green-500"
            >
              Register
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
