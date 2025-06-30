import React from "react";
import "./Toy.css"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { RiArrowRightUpFill } from "react-icons/ri";





const Toy = () => {
  useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);

  return (
    <div>
      
    </div>
  </div>
  <div style={{textAlign:'center',marginTop:'80px'}}>
  <button className="btn6">see more photo</button></div>
</div>

<footer className="toy-footer">
      <div className="footer-top">
        <div className="footer-logo">ToyStore</div>

        <ul className="footer-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Catalog</a></li>
          <li><a href="#">Delivery</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>

        <div className="footer-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <div className="footer-left">
          Created with love by <a href="#">Elastic Themes</a>
        </div>
        <div className="footer-right">
          Powered by <a href="#">Webflow</a> · 
          <a href="#">Style Guide</a> · 
          <a href="#">Licensing</a>
        </div>
      </div>
    </footer>


</div>
  );
};

export default Toy;
