import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import usePostAPI from "../Hooks/usePostAPI";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";
export default function MessageUs({ componentId }) {
 const {
  register,
  reset,
  handleSubmit,
  formState: { errors },
 } = useForm();
 const { data, error, postData, loading } = usePostAPI();
 const onSubmit = (formData) => {
  postData("https://venustglass.backendless.app/api/data/messageus", formData);
  console.log(formData);
  reset(); // reset after form submit
 };
 useEffect(() => {
  data &&
   toast.success("Message is sent", {
    position: "bottom-right",
    hideProgressBar: true,
    autoClose: 2000,
   });
 }, [data]);

 useEffect(() => {
  toast.error(error, { position: "bottom-right" });
 }, [error]);

 return (
  <>
   <form noValidate className="row g-2" onSubmit={handleSubmit(onSubmit)}>
    <div className="col-12 position-relative">
     <input
      className={`form-control${
       componentId === "footer" ? "-footer" : "-contact-us"
      }`}
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
    <div className="col-12 position-relative ">
     <input
      className={`form-control${
       componentId === "footer" ? "-footer" : "-contact-us"
      }`}
      type="text"
      name="name"
      id="name"
      placeholder="Your Name"
      {...register("name", {
       required: "Name is required",
       maxLength: {
        value: 20,
        message: "Name should be maximum 20 characters",
       },
      })}
      aria-invalid={errors.name ? "true" : "false"}
     />
     {errors.name && (
      <p className="error-message" role="alert">
       {errors.name?.message}
      </p>
     )}
    </div>
    <div className="col-12 position-relative">
     <textarea
      name="textAreaMessage"
      className={`form-control${
       componentId === "footer" ? "-footer" : "-contact-us"
      }`}
      placeholder="Your Message"
      id="textAreaMessage"
      {...register("textAreaMessage", {
       required: "Message is required",
       validate: (value) =>
        value.trim().split(/\s+/).length <= 500 || "Maximum word limit reached",
      })}
      aria-invalid={errors.textAreaMessage ? "true" : "false"}
     ></textarea>

     {errors.textAreaMessage && (
      <p className="error-message" role="alert">
       {errors.textAreaMessage?.message}
      </p>
     )}
    </div>
    <div className="col-12 ">
     <input
      type="submit"
      value="Send"
      className={`btn  ${
       componentId === "footer"
        ? "w-100 subscrib-btn"
        : "w-25 send-btn-contact-us"
      }`}
     />
    </div>
   </form>
  </>
 );
}
