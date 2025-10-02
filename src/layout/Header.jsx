import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [clickedText, setClickedText] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  // Saare links ek array me
  const links = [
    { to: "/", label: "Home" },
    { to: "/collection", label: "Collections" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="bg-black text-white flex items-center justify-between px-6 py-3 relative">
        {/* Logo */}
        <div className="logo">
          <img
            className="h-16"
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/05/logo-contest-1-e1527122253952.png?auto=format&q=60&fit=max&w=930"
            alt="logo"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setClickedText(link.label)}
              className={({ isActive }) =>
                `relative px-2 py-1 transition-all duration-500 
                 ${isActive ? "after:w-full text-blue-400" : "after:w-0"} 
                 after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                 after:bg-blue-400 after:transition-all after:duration-500 
                 after:ease-in-out`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Hamburger (Mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Sidebar Menu (Mobile) */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform transition-transform duration-500 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Top Logo + Close */}
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
            <img
              className="h-12"
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/05/logo-contest-1-e1527122253952.png?auto=format&q=60&fit=max&w=930"
              alt="logo"
            />
            <button onClick={() => setIsOpen(false)} className="text-2xl">
              <FaTimes />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col gap-6 mt-6 px-4 text-lg">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => {
                  setClickedText(link.label);
                  setIsOpen(false); // menu band ho jaye click ke baad
                }}
                className={({ isActive }) =>
                  `relative px-2 py-1 transition-all duration-500 
                   ${isActive ? "text-blue-400" : "text-white"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

     
    </>
  );
};
