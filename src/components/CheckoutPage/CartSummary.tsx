import React from "react";
import styles from "@/Styles/CartSummary.module.css";

interface CartSummaryProps {
  cartItems: { drug: any; quantity: number }[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.drug.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartSummary}>
      <h2>Cart Summary</h2>
      <p>Total: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default CartSummary;
