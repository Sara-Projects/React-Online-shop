import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { useProductsContext } from "../Contexts/Products_Context";
import ToastError from "../Components/ToastError";
import "../assets/css/Product.css";
import { useCartContext } from "../Contexts/ShoppingCart_Context";
import FormatCurrency from "../Utilities/FormatCurrency";
export default function Product() {
 const { objectId } = useParams();
 const {
  single_product_loading,
  single_product_error,
  single_product,
  fetchSingleProduct,
 } = useProductsContext();
 const { addItemToCart } = useCartContext();
 const [quantity, setQuantity] = useState(1);
 useEffect(() => {
  fetchSingleProduct(`${process.env.REACT_APP_PRODUCT_URL}/${objectId}`);
 }, [objectId]);
 if (single_product_loading) return <Loading />;
 if (single_product_error) return <ToastError>Fetch Data Error</ToastError>;
 return (
  <>
   <div className="container mt-5">
    <div className="row  g-4">
     <div className="col-12 col-lg-5">
      <img className="img-fluid" src={single_product.image} alt="" />
     </div>
     <div className="col-12 col-lg-7 mb-4">
      <div className="row ">
       <div className="col-12">
        <p className="fst-italic mb-0 text-muted">{single_product.brand}</p>
       </div>
       <div className="col-12">
        <h2 className=" fw-bold lh-lg m-0">{single_product.name}</h2>
       </div>
       <div className="col-12">
        <div className="accordion accordion-flush mb-2" id="accordionProduct">
         <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
           <button
            className="accordion-button collapsed text-muted lh-lg"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
           >
            DESCRIPTION
           </button>
          </h2>
          <div
           id="flush-collapseOne"
           className="accordion-collapse collapse"
           aria-labelledby="flush-headingOne"
           data-bs-parent="#accordionProduct"
          >
           <div className="accordion-body">
            <p className="col-12 ">{single_product.description}</p>
           </div>
          </div>
         </div>
         <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
           <button
            className="accordion-button collapsed text-muted lh-lg"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
           >
            SIZE
           </button>
          </h2>
          <div
           id="flush-collapseThree"
           className="accordion-collapse collapse"
           aria-labelledby="flush-headingThree"
           data-bs-parent="#accordionProduct"
          >
           <div className="accordion-body">
            <p className="col-12">{single_product.size}</p>
           </div>
          </div>
         </div>

         <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
           <button
            className="accordion-button collapsed text-muted lh-lg"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
           >
            SHIPPING
           </button>
          </h2>
          <div
           id="flush-collapseTwo"
           className="accordion-collapse collapse"
           aria-labelledby="flush-headingTwo"
           data-bs-parent="#accordionProduct"
          >
           <div className="accordion-body">
            <div className="col-12">{`${
             single_product.shipping ? "Free Shipping" : "Postage Cost: $10"
            } `}</div>
           </div>
          </div>
         </div>
        </div>
       </div>
       <div className="col-12">
        <h5 className="fs-2 text-center mb-4">
         {FormatCurrency(single_product.price)}
        </h5>
       </div>
       <div className="col-12 col-md-6 hstack gap-3 mb-4 justify-content-center">
        <label className="d-none d-md-block">Quantity:</label>
        <button
         className="btn-counter btn"
         onClick={() => {
          setQuantity(quantity < 50 ? quantity + 1 : quantity);
         }}
        >
         +
        </button>
        <span className="py-2 px-4 border border-1 rounded-2">{quantity}</span>
        <button
         className="btn btn-counter"
         onClick={() => {
          setQuantity(quantity > 1 ? quantity - 1 : quantity);
         }}
        >
         -
        </button>
       </div>
       <div className="col-12 col-md-5 text-center">
        <NavLink
         role="button"
         className="btn-custom btn-custom--pink fw-bold "
         onClick={() => {
          addItemToCart(single_product, quantity);
         }}
        >
         ADD TO CART
        </NavLink>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
