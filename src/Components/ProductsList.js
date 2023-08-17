import React from "react";
import ProductBox from "./ProductBox";
import { useFilterContext } from "../Contexts/Filter_Context";

export default function ProductsList() {
 const { filteredProducts } = useFilterContext();
 return (
  <>

    {filteredProducts.map((product) => (
     <div
      key={product.id}
      className="col"

     >
      <ProductBox {...product} />
     </div>
    ))}
   
  </>
 );
}
