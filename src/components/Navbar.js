import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "midnightblue" , height:"50px" }}>
      <div className="text-white">
      <div style={{display:"flex",  flexDirection: "row", gap:"12px"}}>
          <Link className="text-white" to={"/"}>Home</Link>
           <Link className="text-white" to={"/Login"}>Login</Link>
        </div> 
        
      </div>
    </div>
  );
};

export default Navbar;
