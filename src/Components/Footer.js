import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LightBox from "./LightBox";
import NewsLetter from "./NewsLetter";
import MessageUS from "./MessageUs";
import "../assets/css/Footer.css";
import handlePhoneClick from "../Utilities/handlePhoneClick";
import FollowSocial from "./FollowSocial";
export default function Footer() {
 return (
  <footer className="container-fluid ">
   <div className="row footer-top">
    <div className="col-12">
     <div className="container">
      <div className="row justify-content-center py-5 gy-5 ">
       <div className="col-12 col-md-6 col-lg-3 ">
        <h5 className="footer-title">Address</h5>
        <div className="footer-text">
         <p className="my-2">
          <FontAwesomeIcon
           icon="fa-solid fa-location-dot"
           className="fs-5 me-1"
          />
          Corporate Office :<br />
          Doon House, B-275(A), First floor Sector-57, Shushant Lok 3 Near Hong
          Kong Bazzar, Gurugram Pin 122001, Haryana.
         </p>
         <p className="my-2">
          <FontAwesomeIcon
           icon="fa-solid fa-square-phone"
           className="fs-5 me-1"
          />
          <NavLink onClick={handlePhoneClick}>Call +919122588799</NavLink>
         </p>
        </div>
       </div>
       <div className="col-12 col-md-6 col-lg-3 d-none d-md-block ">
        <h5 className="footer-title ">Gallery</h5>
        <LightBox />
       </div>
       <div className="col-12 col-md-6 col-lg-3 ">
        <h5 className="footer-title">Message Us</h5>
        <MessageUS componentId="footer" />
       </div>
       <div className="col-12 col-md-6 col-lg-3  ">
        <h5 className="footer-title">Newsletter</h5>
        <NewsLetter />
       </div>
      </div>
     </div>
    </div>
   </div>

   <div className="row footer-bottom">
    <div className="col-12">
     <div className="container">
      <div className="row text-center py-2">
       <div className="col-12 footer-text">
        <FollowSocial colorText={"text-light"} fontSize={"fs-5"} />
       </div>
      </div>
     </div>
    </div>
   </div>
  </footer>
 );
}
