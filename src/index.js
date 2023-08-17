import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProductProvider } from "./Contexts/Products_Context";
import { ShoppingCartProvider } from "./Contexts/ShoppingCart_Context";
import {FilterProvider} from "./Contexts/Filter_Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Auth0Provider
  domain="dev-fcekxy0br3u7ff71.us.auth0.com"
  clientId="3TOD0PKCmiduIsfT9NBXBih4SRa4sWbp"
  cashLocation="localstorage"
  authorizationParams={{
   redirect_uri: window.location.origin,
  }}
 >
  <ProductProvider>
   <FilterProvider>
   <ShoppingCartProvider>
    <App />
   </ShoppingCartProvider>

   </FilterProvider>
  </ProductProvider>
 </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
