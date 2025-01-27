import { useState, useEffect } from "react";
import Logo from "../../assets/K7 CodeLabs Logo -01.png";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 sm:px-10 lg:px-20 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 sm:h-12" />
        </Link>

        <button
          className="md:hidden flex items-center justify-center focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 transition-transform ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M4 6h16M4 12h16M4 18h16" 
              }
            />
          </svg>
        </button>

        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((nav) => (
            <li key={nav.id} className="group relative">
              <Link
                to={nav.id}
                className="text-gray-800 hover:text-primary transition font-medium"
              >
                {nav.title}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="#getQuote"
              className="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg shadow hover:shadow-lg transition"
              >
              Get a Quote
            </a>
          </li>
        </ul>

        <div
          className={`fixed inset-y-0 right-0 w-3/4 sm:w-1/2 bg-white shadow-lg transform transition-transform md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-gray-800"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col items-start p-6 space-y-6">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <Link
                  to={nav.id}
                  className="text-gray-800 hover:text-primary transition font-medium"
                  onClick={closeMenu}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#getQuote"
                className="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg shadow hover:shadow-lg transition"
                onClick={closeMenu}
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
