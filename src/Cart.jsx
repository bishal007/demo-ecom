import React from "react";
import useStore from "./Store";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const totalCount = useStore((state) => state.getTotalCount);
  const totalPrice = useStore((state) => state.getTotalPrice);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div>
        {Object.values(cart).map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <h2>Total Items: {totalCount()}</h2>
      <h2>Total Price: ${totalPrice()}</h2>
    </div>
  );
};

export default Cart;
