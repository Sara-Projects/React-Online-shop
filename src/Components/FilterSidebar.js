import React from "react";
import "../assets/css/FilterSidebar.css";
import { useFilterContext } from "../Contexts/Filter_Context";
import { useProductsContext } from "../Contexts/Products_Context";
import GetUniqueValues from "../Utilities/GetUniqueValues";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FilterSidebar() {
 const {
  filters: { shipping },
  checkedInputs,
  updateFilters,
  clearFilters,
 } = useFilterContext();

 const { products } = useProductsContext();
 const uniqueCategories = GetUniqueValues("category", products);
 const uniqueBrands = GetUniqueValues("brand", products);
 const uniqueSizes = GetUniqueValues("size", products);
 const uniqueColors = GetUniqueValues("color", products);
 console.log("----------------render filterdidbar----------------");
 return (
  <>
   {/* <!-- Section Shop Sidebar--> */}
   <button
    className="btn btn-pink d-lg-none mb-3"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasFilters"
    aria-controls="offcanvasFilters"
   >
    <FontAwesomeIcon icon="fa-solid fa-filter" />
   </button>
   <div
    className="offcanvas-lg offcanvas-end"
    tabIndex="-1"
    id="offcanvasFilters"
    aria-labelledby="offcanvasFiltersLabel"
   >
    <div className="offcanvas-header">
     <button
      type="button"
      className="btn-close ms-auto mt-md-5"
      data-bs-dismiss="offcanvas"
      data-bs-target="#offcanvasFilters"
      aria-label="Close"
     ></button>
    </div>
    <div className="offcanvas-body">
     <div className="mb-0">
      <div className="row gy-4 gx-5">
       <div className="col-12 mt-lg-0">
        <button className="btn btn-pink" onClick={clearFilters}>
         Clear All Filters
        </button>
       </div>
       <div className="col-sm-6 col-lg-12 ">
        {/* <!-- Categories--> */}
        <h6 className="text-header ">Categories</h6>
        <div className="text-subline mb-3"></div>
        {uniqueCategories.map((cat, i) => {
         return (
          <div key={i} className="custom-control">
           <input
            className="custom-control-input"
            id={cat}
            name="category"
            value={cat}
            type="checkbox"
            checked={checkedInputs[cat]}
            onChange={updateFilters}
           />
           <label className="custom-control-label" htmlFor={cat}>
            {cat}
           </label>
          </div>
         );
        })}
       </div>
       <div className="col-sm-6 col-lg-12 ">
        {/* <!-- Brands--> */}
        <h6 className="text-header">Brands</h6>
        <div className="text-subline mb-3"></div>
        {uniqueBrands.map((brand, i) => {
         return (
          <div key={i} className="custom-control">
           <input
            className="custom-control-input"
            id={`brand${i}`}
            name="brand"
            value={brand}
            type="checkbox"
            checked={checkedInputs[brand]}
            onChange={updateFilters}
           />
           <label className="custom-control-label" htmlFor={`brand${i}`}>
            {brand}
           </label>
          </div>
         );
        })}
       </div>
       <div className="col-sm-6 col-lg-12 ">
        {/* <!-- Colors--> */}
        <h6 className="text-header">Colors</h6>
        <div className="text-subline mb-3"></div>
        {uniqueColors.map((color, i) => {
         return (
          <div key={i} className="custom-control">
           <input
            className="custom-control-input"
            id={`color${i}`}
            name="color"
            value={color}
            type="checkbox"
            checked={checkedInputs[color]}
            onChange={updateFilters}
           />
           <label className="custom-control-label" htmlFor={`color${i}`}>
            {color}
           </label>
          </div>
         );
        })}
       </div>
       <div className="col-sm-6 col-lg-12 ">
        {/* <!-- Sizes--> */}
        <h6 className="text-header">Sizes</h6>
        <div className="text-subline mb-3"></div>
        {uniqueSizes
         .sort((a, b) => {
          return parseInt(a, 10) < parseInt(b, 10) ? -1 : 1;
         })
         .map((size, i) => {
          return (
           <div key={i} className="custom-control">
            <input
             className="custom-control-input"
             id={`size${i}`}
             name="size"
             value={size}
             type="checkbox"
             checked={checkedInputs[size]}
             onChange={updateFilters}
            />
            <label className="custom-control-label" htmlFor={`size${i}`}>
             {size}
            </label>
           </div>
          );
         })}
       </div>
       <div className="col-sm-6 col-lg-12 mb-5 ">
        <h6 className="text-header">Shipping</h6>

        <div className="text-subline mb-3"></div>

        <div className="custom-control">
         <input
          className="custom-control-input"
          id="shipping"
          name="shipping"
          role="switch"
          checked={shipping}
          type="checkbox"
          onChange={updateFilters}
         />
         <label className="custom-control-label" htmlFor="shipping">
          Free Shipping
         </label>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>

  </>
 );
}
