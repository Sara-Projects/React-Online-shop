import React from "react";
import Header from "../Components/Header";
import imageHeader from "../assets/images/Header-aboutus.jpg";
export default function AboutUs() {
 return (
  <>

   <Header imageSrc={imageHeader} text={"Our Story"} />
   <div className="container">
    <div className="row row-cols-1 row-cols-md-2 my-4 justify-content-center">
     <div className="col ">
      <h3 className="d-none d-md-block fw-bold">
       Discover Our Story and Quality Comfort Shoes:
      </h3>
      <h5 className="d-md-none fw-bold">
       Discover Our Story and Quality Comfort Shoes:
      </h5>
      <p className="lh-lg ">
       In the bustling city of Soleville, a group of passionate shoemakers
       shared a vision - to create the most comfortable shoes ever. They
       journeyed far, drawing inspiration from nature and ancient craftspeople,
       infusing love and dedication into every stitch. Soon, their shoes became
       renowned for comfort and elegance, earning a devoted following worldwide.
       With sustainability at heart, they continued innovating, always staying
       true to their roots. Today, their legacy lives on through our website,
       offering a gateway to a world of comfort and style. Step into our
       enchanting story and experience walking on clouds with our quality
       comfort shoes.
      </p>
     </div>

     <div className="col">
      <img
       src="https://iili.io/HZDx47j.jpg"
       alt="about us image"
       className="img-fluid d-none d-md-block"
      />
     </div>
    </div>
   </div>
  </>
 );
}
