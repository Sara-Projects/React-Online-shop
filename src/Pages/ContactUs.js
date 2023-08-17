import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import { Icon } from "leaflet";
import locationIcon from "../assets/images/location-icon.png";
import MessageUs from "../Components/MessageUs";
import "../assets/css/ContactUs.css";
import handlePhoneClick from "../Utilities/handlePhoneClick";
import { NavLink } from "react-router-dom";
import imageHeader from "../assets/images/Header-contactus2.jpg";
import Header from "../Components/Header";
import FollowSocial from "../Components/FollowSocial";
export default function ContactUs() {
 const position = [-31.911538, 115.848064];
 const icon = new Icon({ iconUrl: locationIcon, iconSize: [80, 80] });
 return (
  <>
   <Header imageSrc={imageHeader} text={"Contact Us"} />
   <MapContainer
    center={position}
    zoom={15}
    scrollWheelZoom={false}
    className="vh-100"
   >
    <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={icon}>
     <Tooltip>Comfort Shoes Office</Tooltip>
    </Marker>
   </MapContainer>
   <div className="container my-4">
    <div className="row row-cols-1 row-cols-md-2 justify-content-evenly g-5">
     <div className="col ">
      <h5 className="mb-3 fs-5 fw-bold ">Send Us a Message</h5>
      <MessageUs componentId="contact-us" />
     </div>
     <div className="col">
      <h5 className="mb-3 fs-5 fw-bold ">Cantact Details</h5>
      <p className="my-2 hstack align-items-start">
       <FontAwesomeIcon icon="fa-solid fa-location-dot" className="fs-3 me-2 " />
       <span>Corporate Office :<br />
       Doon House, B-275(A), First floor Sector-57, Shushant Lok 3 Near Hong
       Kong Bazzar, Gurugram Pin 122001, Haryana.</span>
      </p>
      <p className="my-2 hstack align-items-center">
       <FontAwesomeIcon icon="fa-solid fa-square-phone" className="fs-3 me-1" />
       <NavLink className="" onClick={handlePhoneClick}>Call +919122588799</NavLink>
      </p>
      <p className="my-4 ">
             <FollowSocial colorText={"text-pink"} fontSize={"fs-2"} />
      </p>
     </div>
    </div>
   </div>
  </>
 );
}
