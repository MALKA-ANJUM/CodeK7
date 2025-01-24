import { useState } from "react";
import Logo from "../../assets/K7 CodeLabs Logo.png";
import HoverImg from '../../assets/architecture-after (2).svg'
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    const removeActive = () => {
        setIsActive(false);
    };

    return (
        <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50 ">
            <nav className="container mx-auto w-4/5 flex justify-between items-center">
                <a href="#home" className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-20" />
                </a>

                <div className="md:hidden flex items-center">
                    <button
                        className="hamburger flex flex-col space-y-1"
                        onClick={toggleActiveClass}
                    >
                        <span className="w-6 h-0.5 bg-black"></span>
                        <span className="w-6 h-0.5 bg-black"></span>
                        <span className="w-6 h-0.5 bg-black"></span>
                    </button>
                </div>

                <ul
                    className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0 shadow-md md:shadow-none transition-transform transform ${isActive ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                        }`}
                >
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins relative font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-0"
                                } text-black`}
                        >
                            <Link to={`${nav.id}`}>{nav.title}</Link>
                            <embed src={HoverImg} className="hover-img absolute hidden group-hover:block " type="" />
                        </li>
                    ))}

                    <li onClick={removeActive} className="px-4">
                        <a
                            href="#getQuote"
                            className="px-4 py-2 border rounded hover:text-white"
                            style={{
                                borderColor: "var(--primary)",
                                color: "var(--primary)",
                                hoverBackgroundColor: "var(--primary)",
                            }}
                        >
                            Get a quote
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
