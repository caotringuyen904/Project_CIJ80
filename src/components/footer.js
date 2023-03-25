import React from "react";

const Footer = () => {
  return (
    <div
      classname="footer"
      style={{ padding: "25px", backgroundColor: "#1C1C1E", color: "#F0F8FF", position:"relative" }}
    >
      <div className="container">
        <div className="row" style={{textAlign:"center"}}>
          {/*Colum1 */}
          <div className="col">
            <h4>About</h4>
            <ul className="list-unstyle">
              <li>Infomation</li>
              <li>News</li>
              <li>Stores</li>
            </ul>
          </div>
          {/*Colum2 */}
          <div className="col">
            <h4>Support</h4>
            <ul className="list-unstyle">
              <li>Shipping</li>
              <li>Payment </li>
              <li>Return</li>
              <li>Hotline</li>

            </ul>
          </div>
          {/*Colum3 */}
          <div className="col">
            <h4>Account</h4>
            <ul className=" list-unstyle">
              <li>Member</li>
              <li>Infomation</li>
              <li>Comnine</li>
              <li>Coupons</li>
            </ul>
          </div>
          {/*Colum4 */}
          <div className="cool">
            <h4> Follow Us</h4>
            <ul className="list-unstyle">
              <i class="fab fa-facebook-f"> Facebook</i>
              <i class="fab fa-twitter"> Twitter</i>
              <i class="fab fa-instagram"> Instagram</i>
              <i class="fab fa-linkedin-in"> Linkedin</i>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="cool-sm">
            &copy;{new Date().getFullYear()} UNIQLO FASHION | All right reserved
            | Term & Conditions | Privacy | Sercurity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;