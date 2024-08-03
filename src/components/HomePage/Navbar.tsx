import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white text-green-600 shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo section */}
          <div className="cursor-pointer" onClick={handleClick}>
            <img src="/images/logo.png" alt="logo" className="w-1/2" />
          </div>

          {/* Navlinks section */}
          <nav className="hidden lg:flex gap-6">
            <a
              href="/checkout"
              className="text-lg font-bold text-green-600 hover:text-green-800"
            >
              Checkout
            </a>
            <a
              href="/login"
              className="text-lg font-bold text-green-600 hover:text-green-800"
            >
              Log In
            </a>
            <a
              href="/register"
              className="text-lg font-bold text-green-600 hover:text-green-800"
            >
              Register
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
