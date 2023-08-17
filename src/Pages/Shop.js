import React, { useEffect } from "react";
import { useProductsContext } from "../Contexts/Products_Context";
import ProductBox from "../Components/ProductBox";
import ToastError from "../Components/ToastError";
import Loading from "../Components/Loading";
import Header from "../Components/Header";
import imageHeader from "../assets/images/Header-shop.jpg";
import SortData from "../Components/SortData";
import SearchBar from "../Components/SearchBar";
import FilterSidebar from "../Components/FilterSidebar";
import ProductList from "../Components/ProductsList";
export default function Shop() {
 const { products, products_loading, products_error } = useProductsContext();
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 if (products_loading) return <Loading />;
 if (products_error) return <ToastError>Fetch Data Error</ToastError>;
 return (
  <>
   <Header
    imageSrc={imageHeader}
    text={"Unveil an Unmatched Collection of Trendsetting Shoes"}
   />
   <div className="container">
    <div className="row justify-content-between mb-3 mb-lg-5 g-3">
     <div className="col-12 col-sm-6 col-lg-4">
      <SearchBar />
     </div>
     <div className="col-12 col-sm-4 col-lg-3 ">
      <SortData />
     </div>
    </div>
    <div className="row justify-content-between">
     <div className="col-12 col-lg-3 ">
      <FilterSidebar />
     </div>
     <div className="col-12 col-lg-9 ">
      <div className="row row-cols-2 row-cols-md-3 g-4 ">
       <ProductList />
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
