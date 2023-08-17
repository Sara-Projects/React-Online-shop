import React, { useContext, useEffect } from "react";
import { useReducer } from "react";
import filter_reducer from "../Reducers/filter_reducer";
import { useProductsContext } from "./Products_Context";
const FilterContext = React.createContext();
const initialState = {
 filteredProducts: [],
 allProducts: [],
 unCheckedInput: null,
 sort: "price-lowest",
 filters: {
  text: "",
  color: "all",
  size: "all",
  brand: "all",
  category: "all",
  shipping: false,
 },
 checkedInputs: {},
};
export const FilterProvider = ({ children }) => {
 const { products } = useProductsContext();
 const [state, dispatch] = useReducer(filter_reducer, initialState);
 const updateSort = (e) => {
  const sortValue = e.target.value;
  dispatch({ type: "UPDATE_SORT", payload: sortValue });
 };

 const updateFilters = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  if (name === "shipping") {
   value = e.target.checked;
  }
  dispatch({ type: "TOGGLE_CHECKBOX", payload: { name, value } });
  dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
 };
 const clearFilters = () => {
  dispatch({ type: "CLEAR_FILTERS" });
 };
 // Load all products for the first time
 useEffect(() => {
  dispatch({ type: "LOAD_PRODUCTS", payload: products });
  console.log("useEffect sensitive to products only");
 }, [products]);

 useEffect(() => {
  dispatch({ type: "FILTER_PRODUCTS", payload: products });
  dispatch({ type: "SORT_PRODUCTS", payload: products });
  console.log("useEffect sensitive to products and filter and sort");
 }, [products, state.sort, state.filters]);

 return (
  <FilterContext.Provider
   value={{ ...state, updateSort, updateFilters, clearFilters, dispatch }}
  >
   {children}
  </FilterContext.Provider>
 );
};

export const useFilterContext = () => {
 return useContext(FilterContext);
};
