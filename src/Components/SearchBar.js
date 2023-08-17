import React from "react";
import { useFilterContext } from "../Contexts/Filter_Context";

export default function SearchBar() {
  const { filters: { text }, updateFilters } = useFilterContext();
 return (
  <>
     <input
       id="search-bar"
    placeholder="Type Product Name"
    type="text"
    name="text"
    className="form-control"
    value={text}
    aria-label="Search"
    onChange={updateFilters}
   />
  </>
 );
}
