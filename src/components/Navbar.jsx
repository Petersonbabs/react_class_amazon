import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "2rem ",
          background: "#eee"
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/profile">My account</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
};

export default Navbar;
