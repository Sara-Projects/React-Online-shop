import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";
import "../assets/css/Navbar.css";
import { useCartContext } from "../Contexts/ShoppingCart_Context";
export default function Navbar() {
 const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
  useAuth0();
 const [isSticky, setIsSticky] = useState(false);
 const { cartItems } = useCartContext();
 const location = useLocation();
 let isProduct = false;
 let isCart = false;

 isProduct = location.pathname.includes("/product/");
 isCart = location.pathname.includes("/shoppingcart");

 useEffect(() => {
  const handleScroll = () => {
   if (window.scrollY > 200) {
    setIsSticky(true);
   } else {
    setIsSticky(false);
   }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);
 return (
  <>
   <nav
    className={`navbar navbar-expand-md bg-dark ${
     isProduct || isCart || isSticky
      ? "container-fluid sticky "
      : "container-md navbar-container"
    }`}
   >
    <div className="collapse navbar-collapse " id="navbarNav">
     <ul className="navbar-nav ms-lg-auto">
      <li className="nav-item me-3">
       <NavLink className="nav-link " to="/">
        Home
       </NavLink>
      </li>
      <li className="nav-item  me-3">
       <NavLink className="nav-link" to="/shop">
        Shop
       </NavLink>
      </li>

      <li className="nav-item  me-3">
       <NavLink
        className="nav-link "
        to="/contactus"
        tabIndex="-1"
        //  aria-disabled="true"
       >
        Contact Us
       </NavLink>
      </li>
      <li className="nav-item  me-3">
       <NavLink
        className="nav-link "
        to="aboutus"
        tabIndex="-1"
        //  aria-disabled="true"
       >
        About Us
       </NavLink>
      </li>
      <li className="nav-item  me-3">
       <NavLink className="nav-link" to="/profile">
        Profile
       </NavLink>
      </li>
     </ul>
     {!isAuthenticated && (
      <NavLink
       className=" btn-custom btn-custom--pink d-none d-md-block me-3 ms-auto "
       onClick={loginWithRedirect}
      >
       Login
      </NavLink>
     )}

     {isAuthenticated && (
      <>
       <div className="d-none d-lg-block text-light me-1 ms-lg-auto">
        <FontAwesomeIcon icon="fa-solid fa-user" className="me-1 " />
        {`Hi, ${user.name}`}
       </div>
       <div className="ms-md-auto ms-lg-0 position-relative">
        <NavLink
         type="button"
         className="btn btn-link fs-4 link-light position-relative"
         to="/shoppingcart"
        >
         <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
         <span className=" badge " id="badge-bascket">
          {cartItems.length}
         </span>
        </NavLink>
       </div>
       <NavLink
        className="
           btn-custom btn-custom--pink d-none d-md-block me-3"
        onClick={() => {
         logout({ logoutParams: { returnTo: window.location.origin } });
        }}
       >
        Logout
       </NavLink>
      </>
     )}
    </div>

    <button
     className="navbar-toggler"
     type="button"
     data-bs-toggle="offcanvas"
     data-bs-target="#offcanvasExample"
     aria-controls="offcanvasExample"
    >
     <span className="navbar-toggler-icon"></span>
    </button>

    {!isAuthenticated && (
     <div className="ms-auto d-md-none">
      <button
       type="button"
       className="btn btn-link fs-4 link-light"
       onClick={loginWithRedirect}
      >
       <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />
      </button>
     </div>
    )}

    {isAuthenticated && (
     <div className="ms-auto d-md-none">
      <NavLink
       type="button"
       className=" btn-custom btn-custom--pink fs-6 px-2 py-1 me-2"
       onClick={() => {
        logout({ logoutParams: { returnTo: window.location.origin } });
       }}
      >
       Logout
      </NavLink>
     </div>
    )}
   </nav>

   <div
    className="offcanvas offcanvas-start "
    tabIndex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
   >
    <div className="offcanvas-header">
     <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
     <button
      type="button"
      className="btn-close text-reset "
      data-bs-dismiss="offcanvas"
      aria-label="Close"
     ></button>
    </div>
    <div className="offcanvas-body">
     <div>
      <div className="list-group list-group-flush ">
       <NavLink
        className="list-group-item list-group-item-action"
        aria-current="page"
        to="/"
       >
        Home
       </NavLink>

       <NavLink
        className="list-group-item list-group-item-action"
        aria-current="page"
        to="shop"
       >
        Shop
       </NavLink>
       <NavLink
        className="list-group-item list-group-item-action"
        aria-current="page"
        to="contactus"
       >
        Contact Us
       </NavLink>
       <NavLink
        className="list-group-item list-group-item-action"
        aria-current="page"
        to="aboutus"
       >
        About Us
       </NavLink>
       <NavLink
        className="list-group-item list-group-item-action"
        aria-current="page"
        to="profile"
       >
        Profile
       </NavLink>
       {isAuthenticated && (
        <NavLink
         className="list-group-item list-group-item-action"
         aria-current="page"
         to="/shoppingcart"
        >
         Shopping Cart
        </NavLink>
       )}
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
