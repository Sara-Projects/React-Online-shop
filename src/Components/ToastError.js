import React from 'react'
import { toast } from "react-toastify";
export default function ToastError({children}) {

  return (
    toast.error(children, {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
  )
}
