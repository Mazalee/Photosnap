import React from "react";
import NavLeft from "./NavLeft";

const Navbar = () => {
  return (
    <div className="nav-div">
      <nav className="wrapper">
        <NavLeft />
        <div className="nav-right">
          <button className=" btn btn-large btn-tab">get an invite</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
