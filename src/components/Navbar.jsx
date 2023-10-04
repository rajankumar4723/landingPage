import React from "react";
import "../styles/Navbar.css";
import Image from "../Images/BHARAT.png";
import Apple from "../Images/laptopApple.jpg";

const Nabar = () => {
  return (
    <div>
      <nav className="flex main">
        <div className="logo">
          <img src={Image} alt="My Image" />
        </div>
        <div className="nav-links">
          <ul className="flex">
            <li>
              <a href="/">
                <i class="fa fa-house"></i> Home
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa fa-address-card"></i> About
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa fa-laptop"></i> Serviecs
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa fa-phone"></i> Contact
              </a>
            </li>
            <li>
              <button className="btn-primary">
                <i class="fa-sharp fa-solid fa-user-plus"></i> Sign
              </button>
            </li>
            <li>
              <button className="btn-secondary">
                <i class="fa fa-user"></i> Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nabar;
