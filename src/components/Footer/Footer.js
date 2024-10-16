import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "./Footer.css";
import { food, symbols } from "../../assets/assets";

function Footer() {
  const [click, setClick] = useState(null);
  return (
    <div className="footer-container">
      <div className="footer-row-1">
        <div className="footer-column-1">
          <Logo> </Logo>
          <p>
            In the new era of technology we look a in the future with certainty
            and pride to for our company and.
          </p>
          <div className="social-media">
            <img src={symbols.twitter}></img>
            <img src={symbols.insta}></img>
            <img src={symbols.fb}></img>
          </div>
        </div>
        <div className="datas">
          <div className="footer-column-2">
            <p>
              <b>Pages</b>
            </p>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Pricing</p>
            <p>Contact</p>
          </div>
          <div className="footer-column-3">
            <p>
              <b>Utility Pages</b>
            </p>
            <p>Start Here</p>
            <p>Licenses</p>
            <p>Changelog</p>
            <p>View More</p>
          </div>
        </div>

        <div className="footer-column-4">
          <p>
            <b> Follow Us On Instagram</b>
          </p>
          <br></br>
          <div className="insta-posts">
            <div className="item-1">
              <img src={food.egg}></img>
            </div>
            <div className="item-2">
              <img src={food.fries}></img>
            </div>
            <div className="item-3">
              <img src={food.pancakes}></img>
            </div>
            <div className="item-4">
              <img src={food.masalafries}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-row-2">
        <hr></hr>
        <p>Copyright © 2024 DIxay_kalgutkar. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
