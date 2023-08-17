import React from "react";
import "../assets/css/ProductBox.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/ProductBox.css";
import FormatCurrency from "../Utilities/FormatCurrency";
export default function ProductBox(props) {
 const { image, price, name, isNew, isSale, objectId, brand } = props;

 return (
  <>
   <div className="d-flex flex-column text-center  position-relative product-box">
    <div className="image-product position-relative overflow-hidden">
     {/*---------- Product Label---------------------*/}
     {isNew && (
      <span className=" label label-new position-absolute top-0 end-0 z-3 m-1">
       New
      </span>
     )}
     {isSale && (
      <span className=" label label-sale position-absolute top-0 right-0 z-3 m-1">
       Sale
      </span>
     )}
     <img className="img-fluid" src={image} />
    </div>

    <NavLink className="stretched-link" to={`/product/${objectId}`}>
     <h6 className="mb-0 mt-2 ">{name}</h6>
    </NavLink>
    <span className="text-muted">{brand}</span>
    <h6>{FormatCurrency(price)}</h6>
   </div>
  </>

 );
}
