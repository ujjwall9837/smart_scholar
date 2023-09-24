import React from "react";
import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";
export const Cart = () => {
  const { total, totalItems } = useSelector((state) => state.auth);

  return (
    <div className="text-white">
      <h1>Cart</h1>
      <p> {totalItems} Courses in Cart</p>
      {total > 0 ? (
        <div>
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};
export default Cart;
