import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useGetAPI(url) {
 const [data, setData] = useState([]);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await axios(url);
    try {
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }
   useEffect(()=>{getData()},[])

 return {data,error,loading};

 };