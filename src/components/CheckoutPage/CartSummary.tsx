import React from "react";

interface CartSummaryProps {
  cartItems: { drug: any; quantity: number }[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.drug.price * item.quantity,
    0
  );

  return (
    <div className="p-2 border-t border-gray-300 text-right bg-green-500">
      <h2 className="m-0 mb-2.5">Cart Summary</h2>
      <p className="text-lg font-bold">Total: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default CartSummary;
