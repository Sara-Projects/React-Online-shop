import React from "react";
import { useCartContext } from "../Contexts/ShoppingCart_Context";
import FormatCurrency from "../Utilities/FormatCurrency";
export default function ShoppingCart() {
 const { removeItemFromCart, addItemToCart, calculateTotalAmount, cartItems } =
  useCartContext();

 return (
  <>
   <div className="vh-50 container ">
    <div className="row">
     <table className="table table-striped text-center my-4">
      <thead>
       <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
       </tr>
      </thead>
      <tbody>
       {cartItems.map((item) => (
        <tr key={item.id}>
         <td> {item.name}</td>
         <td>{FormatCurrency(item.price)}</td>
         <td> {item.count}</td>
         <td> {FormatCurrency(item.count * item.price)}</td>
         {/* <button onClick={() => addItemToCart(item)}>Add</button> */}
         <td>
          <button
           className="btn btn-danger btn-sm"
           onClick={() => removeItemFromCart(item.id)}
          >
           Remove
          </button>
         </td>
        </tr>
       ))}
      </tbody>
      <tfoot>
       <tr>
        <td colSpan="5">
         Total Amount:{" "}
         <span className="fw-bold ms-2">
          {FormatCurrency(calculateTotalAmount())}
         </span>
        </td>
       </tr>
      </tfoot>
     </table>
    </div>
   </div>
  </>
 );
}
