import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const Nav = () => {
  return (
    <div className="position-absolute bottom-0 left-0 w-full BG-C457B9D text-center flex justify-center">
      <Link to="/" className="m-3">
        főoldal
      </Link>
      <Link to="/about" className="m-3">
        rólam
      </Link>
      <Link to="/contact" className="m-3">
        kapcsolat
      </Link>
      <Link to="/education" className="m-3">
        oktatás és képzés
      </Link>
      <Link to="/professionalexperience" className="m-3">
        szakmai tapasztalat
      </Link>
      <Link to="/publications" className="m-3">
        Publikációk
      </Link>
      <Link to="/volunteering" className="m-3">
        Önkénteskedés
      </Link>
      <Link to="/work" className="m-3">
        Munkatapasztalat
      </Link>
    </div>
  );
};

export default Nav;
