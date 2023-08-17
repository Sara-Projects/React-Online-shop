import React from "react";
import "../assets/css/Header.css"
export default function Header({imageSrc, text}) {
 return (
  <>
         <div className="header mb-3">
             <div className="bg-image"> <img src={imageSrc} alt="" /></div>
             <h2 className="title">{text }</h2>

   </div>
  </>
 );
}
