import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, server } from "../redux/store";
import { CartItem } from "../types/types";

const cartitems = [];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18); 1
const shippingCharges = 200;
const discount = 3434
const total = subtotal + tax + shippingCharges
const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false)
  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal: ${subtotal}</p>
        <p>Shipping Charges: ${shippingCharges}</p>
        <p>Tax: ${Tax}</p>
        <p>Discount: <em> - ${discount}</em> </p>
        <p><b>Total: ${total}</b></p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
      </aside>
    </div>
  );
};

export default Cart