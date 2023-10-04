import React from "react";
import "../styles/Header.css";
import Apple from "../Images/laptop4k.jpg";

const Header = () => {
  return (
    <div>
      <div className="header flex">
        <div className="header-left">
          <h1>
            <span>MacBook</span> <span className="heading-second">Airsp</span>
          </h1>
          <p>
            One of the best things about this year’s MacBook Air refresh is the
            overall value. With a new $999 starting price, which’s is $100 less
            than the previous MacBook Air, the 2022 model represents a good
            value for Mac users in need of a new laptop.
          </p>
          <h2>
            Price <span>145$</span>
          </h2>
          <button className="buy">Buy Now</button>
        </div>
        <div className="header-right">
          <img src={Apple} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
