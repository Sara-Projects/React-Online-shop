import React from "react";
import { useProductsContext } from "../Contexts/Products_Context";
import ProductBox from "./ProductBox";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";
import ToastError from "./ToastError";
export default function FeaturedProducts() {
 const { featured_products, products_loading, products_error } =
  useProductsContext();
 if (products_loading) return <Loading />;
 if (products_error) return <ToastError>Fetch Data Error</ToastError>;
 return (
  <>
   <div className="container">
    <div className="row my-4">
     <div className="col-12 d-flex align-items-center ">
      <hr className="flex-grow-1" />
      <h4 className="mx-4 fw-bold">Recommended Products</h4>
      <hr className="flex-grow-1" />
     </div>
    </div>
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 ">
     {featured_products.map((product) => (
      <div
       key={product.id}
       className="col"
       data-aos="flip-left"
       data-aos-offset="200"
       data-aos-duration="1000"
      >
       <ProductBox {...product} />
      </div>
     ))}
    </div>
    <div className="row my-5">
     <div className="col-12 text-center">
      <NavLink to="/shop" className=" btn-custom btn-custom--purple">
       View More
      </NavLink>
     </div>
    </div>
   </div>
  </>
 );
}
