import React, { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // const location = useLocation();
  // const [isLoginFormVisible, setLoginFormVisible] = useState(false);

  // const handleUserIconHover = () => {
  //   setLoginFormVisible(true);
  // };

  const handleUserIconLeave = () => {
    setLoginFormVisible(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-wrapper container">
        <nav>
          <a href="/" className="link">
            <span className="bars">
              <FaBars />
            </span>
            <p className="depart">All Departments</p>
            <span className="bars">
              <RxTriangleDown />
            </span>
          </a>

          <div className="nav-links container"></div>

          <div className="navbar-con">
            <span className="user">
              <FaRegUser />
            </span>
            <span className="heart">
              <FaRegHeart />
            </span>
            <span className="basket">
              <BsFillBasket2Fill />
            </span>
          </div>

          <div className="linking">
            <Link
              to="/login"
              className={`log-in ${
                location.pathname === "/login" ? "active" : ""
              }`}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className={`sign-up ${
                location.pathname === "/signup" ? "active" : ""
              }`}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
