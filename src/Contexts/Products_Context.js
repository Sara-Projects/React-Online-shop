//Contexts/products_Context.js
import React, { useContext, useEffect } from "react";
import { useReducer } from "react";
import products_reducer from "../Reducers/products_reducer";
import axios from "axios";
const ProductsContext = React.createContext();
const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(products_reducer, initialState);


  const fetchProducts = async (url) => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" });
    try {
      const response = await axios(url);
      const products = response.data;
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "GET_PRODUCTS_ERROR" });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: "GET_SINGLE_PRODUCT_BEGIN" });
    try {
      const response = await axios(url);
      const single_product = response.data;
      dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: single_product });

      console.log(response);
    } catch (error) {
      dispatch({ type: "GET_SINGLE_PRODUCT_ERROR" });
      console.log("Err  :" + error);
    }
  };

  useEffect(() => {
    fetchProducts(process.env.REACT_APP_PRODUCTS_URL); 
  }, []);
  return (
    <ProductsContext.Provider
      value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
