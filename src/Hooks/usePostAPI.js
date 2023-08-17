import axios from "axios";
import React, { useState } from "react";

export default function usePostAPI() {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(false);
  const postData = async (URL, payload) => {
    setLoading(true);
  try {
   const response = await axios.post(URL, payload);
   setData(response.data);
    setLoading(false);
    console.log("usePostAPI-response:",response)
  } catch (error) {
    setError(error.message);
    setLoading(false);
    console.log("usePostAPI-error:",error)
  }
 };

 return {data,error,postData,loading};
}
