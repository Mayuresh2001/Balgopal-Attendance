import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar" style={{ backgroundColor: "midnightblue", height: "50px" }}>
      <div className="text-white">
        <ul style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
          <li>
            <Link className="text-white" to={"/"}>Home</Link>
          </li>
          <li>
            <Link className="text-white" to={"/Login"}>Login</Link>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
