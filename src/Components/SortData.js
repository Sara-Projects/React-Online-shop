import React from "react";
import { useFilterContext } from "../Contexts/Filter_Context";

export default function Sort() {
 const { sort, updateSort } = useFilterContext();
 return (

    <form>
     <select
      name="sort"
      id="sort"
      value={sort}
      onChange={updateSort}
      className="form-select form-select-sm"
      aria-label=".form-select-sm example"
     >
      <option value="price-lowest">Lowest Price</option>
      <option value="price-highest">Highest Price</option>
      <option value="name-a">Name (a-z)</option>
      <option value="name-z">Name (z-a)</option>
     </select>
    </form>

 );
}
