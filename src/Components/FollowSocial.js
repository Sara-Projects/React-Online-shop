import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FollowSocial({ colorText, fontSize }) {
 return (
  <>
   <span className="me-4 fw-bold vertical-align-top">Follow Us</span>
   <a
    target="_blank"
    href="https://www.linkedin.com/in/sara-sajjadnia-9024821b8"
   >
    <FontAwesomeIcon
     icon="fa-brands fa-square-facebook"
     className={`${colorText} ${fontSize} me-3`}
    />
   </a>
   <a
    target="_blank"
    href="https://www.linkedin.com/in/sara-sajjadnia-9024821b8"
   >
    <FontAwesomeIcon
     icon="fa-brands fa-linkedin"
     className={`${colorText} ${fontSize} me-3`}
    />
   </a>
   <a
    target="_blank"
    href="https://www.linkedin.com/in/sara-sajjadnia-9024821b8"
   >
    <FontAwesomeIcon
     icon="fa-brands fa-square-whatsapp"
     className={`${colorText} ${fontSize} me-3`}
    />
   </a>
   <a
    target="_blank"
    href="https://www.linkedin.com/in/sara-sajjadnia-9024821b8"
   >
    <FontAwesomeIcon
     icon="fa-brands fa-telegram"
     className={`${colorText} ${fontSize} me-3`}
    />
   </a>
   <a
    target="_blank"
    href="https://www.linkedin.com/in/sara-sajjadnia-9024821b8"
   >
    <FontAwesomeIcon
     icon="fa-brands fa-square-instagram"
     className={`${colorText} ${fontSize} `}
    />
   </a>
  </>
 );
}
