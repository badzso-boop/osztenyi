import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company Logo"
          />
          <span className="ml-2 text-xl font-semibold">Your Company</span>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link to="/">Főoldal</Link>
          <Link to="/about">Rólam</Link>
          <Link to="/education">Oktatás</Link>
          <Link to="/professionalexperience">Szakma</Link>
          <Link to="/publications">Publikációk</Link>
          <Link to="/volunteering">Önkénteskedés</Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden" ref={menuRef}>
          <div className="p-4 space-y-4">
            <Link
              className="block text-gray-700 hover:text-gray-900"
              to="/"
              onClick={handleLinkClick}
            >
              Főoldal
            </Link>
            <Link
              className="block text-gray-700 hover:text-gray-900"
              to="/about"
              onClick={handleLinkClick}
            >
              Rólam
            </Link>
            <Link
              className="block text-gray-700 hover:text-gray-900"
              to="/education"
              onClick={handleLinkClick}
            >
              Oktatás
            </Link>
            <Link
              className="block text-gray-700 hover:text-gray-900"
              to="/professionalexperience"
              onClick={handleLinkClick}
            >
              Szakma
            </Link>
            <Link
              className="block text-gray-700 hover:text-gray-900"
              to="/publications"
              onClick={handleLinkClick}
            >
              Publikációk
            </Link>
            <Link
              className="block text-gray-700 hover:text-gray-900"
              to="/volunteering"
              onClick={handleLinkClick}
            >
              Önkénteskedés
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
