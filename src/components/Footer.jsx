import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="back">
      <footer className="social-link">
        <div className="link flex ">
          <ul className="flex">
            <li>
              <a href="/">
              <i class="fa-brands fa-facebook fa-beat"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/rajan.kumar55555/">
              <i class="fa-brands fa-instagram fa-beat"></i>
              </a>
            </li>
            <li>
              <a href="/"><i class="fa-brands fa-whatsapp fa-bounce"></i></a>
            </li>
            
            <li>
              <a target="_blank" href="https://github.com/rajankumar4723"><i class="fa-brands fa-github fa-flip"></i></a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/rajan-modanwal-11a73821a/"><i class="fa-brands fa-linkedin fa-beat-fade"></i></a>
            </li>
           
            <li>
              <a href="/"><i class="fa-brands fa-twitter fa-flip"></i></a>
            </li>
          </ul>
        </div>
      
          
        <p className="copy ">&copy; 2023 Create By Rajan kumar Using React.</p>
      </footer>
    </div>
  );
};

export default Footer;
