import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import usePostAPI from "../Hooks/usePostAPI";
import Loading from "../Components/Loading"
import { toast } from "react-toastify";
export default function NewsLetter() {
 const {
   register,
 reset,
  handleSubmit,
  formState: { errors },
 } = useForm();
 const { data, error, postData, loading } = usePostAPI();
 const onSubmit = (formData) => {
   postData(process.env.REACT_APP_NEWS_LETTER_URL, formData);
   reset(); // reset after form submit

 };
 useEffect(() => {

  data && toast.success("Subscribe is successful",{position: "bottom-right",hideProgressBar: true,autoClose: 2000});
 }, [data]);
  
 useEffect(() => {
 
 toast.error(error,{position: "bottom-right"});
}, [error]);


 return (
  <>
   <form noValidate className="row g-2" onSubmit={handleSubmit(onSubmit)}>
    <div className="col-12 position-relative ">
     <input
      className="form-control-footer"
      type="email"
      name="email"
      id="email"
      placeholder="Your Email Address"
      {...register("email", {
       required: "Email is required",
       pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Email address is not valid!!",
       },
      })}
      aria-invalid={errors.email ? "true" : "false"}
     />
     {errors.email && (
      <p className="error-message" role="alert">
       {errors.email?.message}
      </p>
     )}
    </div>
    <div className="col-12">
     <input
      type="submit"
      value="subscribe"
      className="btn w-100 subscrib-btn"
     />
    </div>
   </form>
  </>
 );
}
