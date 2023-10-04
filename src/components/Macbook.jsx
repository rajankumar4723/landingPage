import React from "react";
import "../styles/Macbook.css";
import Apple from "../Images/laptop4k.jpg";
import laptop2 from "../Images/laptop2.jpg";
import laptop3 from "../Images/laptop3.jpg";
import laptop4 from "../Images/laptop4.jpg";
import laptop5 from "../Images/laptop3.jpg";

const Macbook = () => {
  return (
    <div>
      <div className="cards-section flex">
        <div className="cards">
          <img src={Apple} alt="" />
          <h1>
            Price <span>189$</span>
          </h1>
          <button>Buy</button>
        </div>
        <div className="cards">
          <img src={laptop2} alt="" />
          <h1>
            Price <span>500$</span>
          </h1>
          <button>Buy</button>
        </div>
        <div className="cards">
          <img src={laptop3} alt="" />
          <h1>
            Price <span>229$</span>
          </h1>
          <button>Buy</button>
        </div>
        <div className="cards">
          <img src={laptop4} alt="" />
          <h1>
            Price <span>139$</span>
          </h1>
          <button>Buy</button>
        </div>
        <div className="cards">
          <img src={laptop5} alt="" />
          <h1>
            Price <span>300$</span>
          </h1>
          <button>Buy</button>
        </div>
        <div className="cards">
          <img src={Apple} alt="" />
          <h1>
            Price <span>444$</span>
          </h1>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Macbook;
