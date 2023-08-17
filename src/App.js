import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Profile from "./Pages/Profile";
import Error404 from "./Pages/Error404";
import ShoppingCart from "./Pages/ShoppingCart"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "yet-another-react-lightbox/styles.css";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useEffect } from "react";

library.add(fab, fas);
function App() {
 useEffect(() => {
  AOS.init();
 }, []);

 return (
  <>
   <BrowserRouter>
    <Routes>
     <Route to="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="shop" element={<Shop />} />
      <Route path="product/:objectId" element={<Product />} />
      <Route path="shoppingcart" element={<ShoppingCart />} />
      <Route
       path="profile"
       element={
        <ProtectedRoute>
         <Profile />
        </ProtectedRoute>
       }
      />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="*" element={<Error404 />} />
     </Route>
    </Routes>
   </BrowserRouter>
   <ToastContainer />
  </>
 );
}

export default App;
