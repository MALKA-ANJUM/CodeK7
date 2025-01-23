import { useState } from "react";
import Logo from "../../assets/K7 CodeLabs Logo.png";
import './Navbar.css';
import HoverImg from '../../assets/architecture-after (2).svg'

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
                    className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0 shadow-md md:shadow-none transition-transform transform ${
                        isActive ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    }`}
                >
                    <li onClick={removeActive} className="px-2 hover-item">
                        <a href="#home" className="text-gray-800">
                            <span>Home</span>
                            <embed src={HoverImg} className="hover-img" />
                        </a>
                    </li>
                    <li onClick={removeActive} className="px-2 hover-item">
                        <a href="#aboutus" className="text-gray-800">
                            
                            <span>About Us</span>
                            <embed src={HoverImg} className="hover-img" type="" />
                        </a>
                    </li>
                    <li onClick={removeActive} className="px-2 hover-item">
                        <a href="#clients" className="text-gray-800 ">
                            <span>Clients</span>
                            <embed src={HoverImg} className="hover-img" type="" />
                        </a>
                    </li>
                    <li onClick={removeActive} className="px-2 hover-item">
                        <a href="#portfolio" className="text-gray-800 ">
                            
                            <span>Portfolio</span>
                            <embed src={HoverImg} className="hover-img" type="" />
                        </a>
                    </li>
                    <li onClick={removeActive} className="px-2 hover-item">
                        <a href="#contact" className="text-gray-800">
                            
                            <span>Contact</span>
                            <embed src={HoverImg} className="hover-img" type="" />
                        </a>
                    </li>
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
