import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((current) => !current);
    };

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
            <nav className="mx-auto flex h-[70px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={handleMenuToggle}
                    aria-label="Toggle navigation menu"
                    className="flex items-center justify-center text-2xl text-gray-800 md:hidden"
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Brand */}
                <a
                    href="#home"
                    onClick={handleNavClick}
                    className="flex items-center gap-2"
                >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 text-[11px] font-bold text-white">
                        DS
                    </div>

                    <span className="text-[18px] font-bold tracking-tight">
                        <span className="text-gray-900">Dev </span>

                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                            Stack
                        </span>
                    </span>
                </a>


                {/* Desktop navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors ${link.name === "Home"
                                    ? "text-pink-500"
                                    : "text-gray-500 hover:text-pink-500"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Authentication buttons */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <button
                        type="button"
                        className="text-sm font-medium text-gray-600 transition-colors hover:text-pink-500"
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
                    >
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* Mobile navigation */}
            {isMenuOpen && (
                <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={handleNavClick}
                                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${link.name === "Home"
                                        ? "bg-pink-50 text-pink-500"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-pink-500"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}


                    </div>
                </div>
            )}


        </header>


    );
};

export default Navbar;