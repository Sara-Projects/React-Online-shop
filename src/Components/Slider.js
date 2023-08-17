import React, { useEffect, useRef } from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import useGetAPI from "../Hooks/useGetAPI";
import Loading from "./Loading";
import ToastError from "./ToastError";
import { NavLink } from "react-router-dom";
import "../assets/css/Slider.css";
// register Swiper custom elements
export default function Slider() {
 const {
  data: slidesData,
  error,
  loading,
 } = useGetAPI(process.env.REACT_APP_SLIDER_URL);
  useEffect(() => { register(); },[])
 if (loading) return <Loading />;
 if (error) return <ToastError>Fetch Slide Error </ToastError>;
 return (
  <>
   <swiper-container
    id="mySwiper"
     pagination="true"
    pagination-clickable="true"
    navigation="true"
    space-between="30"
    loop="true"
    effect="fade"
    //  navigation-next-El="swiper-button-next-new"
    //  navigation-prev-El="swiper-button-prev-new"
   >
    {slidesData.map((slide) => {
     return (
      <swiper-slide className="bg-danger" key={slide.objectId}>
       <div className=" slide-text vstack m-3">
        <h3 className="mb-4">{slide.headLine}</h3>
        <h5 className="d-none d-md-block">{slide.textLine1}</h5>
        <h5 className="d-none d-md-block">{slide.textLine2}</h5>
        <NavLink
         to="/shop"
         className="btn-custom btn-custom--purple mt-md-5 m-auto"
        >
         Shop Now
        </NavLink>
       </div>

       <img
        src={slide.image}
        alt=""
        className="img-fluid min-vh-100"
        loading="lazy"
       />
      </swiper-slide>
     );
    })}
   </swiper-container>
  </>
 );
}
