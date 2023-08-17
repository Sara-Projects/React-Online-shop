import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Download from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import imgsm1 from "../assets/images/small1.jpg";
import imgsm2 from "../assets/images/small2.jpg";
import imgsm3 from "../assets/images/small3.jpg";
import imgsm4 from "../assets/images/small4.jpg";
import imgsm5 from "../assets/images/small5.jpg";
import imgsm6 from "../assets/images/small6.jpg";
import imglg1 from "../assets/images/large1.jpg";
import imglg2 from "../assets/images/large2.jpg";
import imglg3 from "../assets/images/large3.jpg";
import imglg4 from "../assets/images/large4.jpg";
import imglg5 from "../assets/images/large5.jpg";
import imglg6 from "../assets/images/large6.jpg";
import "../assets/css/LightBox.css"
export default function LightBox() {
 const [index, setIndex] = useState(-1);
 const slides = [
  { src: imglg1 },
  { src: imglg2 },
  { src: imglg3 },
  { src: imglg4 },
  { src: imglg5 },
  { src: imglg6 },
 ];

 return (
  <>
   <div className="row row-cols-3 g-2 m-0" id="footer-gallery">
    <div
     className="col"
     role="button"
     onClick={() => {
      setIndex(0);
     }}
    >
     <img className="img-fluid" src={imgsm1} alt="image small 1" />
    </div>
    <div
     className="col"
     role="button"
     onClick={() => {
      setIndex(1);
     }}
    >
     <img className="img-fluid" src={imgsm2} alt="image small 2" />
    </div>
    <div
     className="col"
     role="button"
     onClick={() => {
      setIndex(2);
     }}
    >
     <img className="img-fluid" src={imgsm3} alt="image small 3" />
    </div>
    <div
     className="col"
     role="button"
     onClick={() => {
      setIndex(3);
     }}
    >
     <img className="img-fluid" src={imgsm4} alt="image small 4" />
    </div>
    <div
     className="col"
     role="button"
     onClick={() => {
      setIndex(4);
     }}
    >
     <img className="img-fluid" src={imgsm5} alt="image small 5" />
    </div>
    <div
     className="col"
     role="button"
     onClick={() => {
      setIndex(5);
     }}
    >
     <img className="img-fluid" src={imgsm6} alt="image small 6" />
    </div>
   </div>

   <Lightbox
    open={index >= 0}
    close={() => setIndex(-1)}
    slides={slides}
    index={index}
    plugins={[Download, Fullscreen, Thumbnails, Zoom, Slideshow]}
   />
  </>
 );
}
