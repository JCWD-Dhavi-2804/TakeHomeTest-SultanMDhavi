import React from "react";
import styles from "@/Styles/CartItem.module.css";

interface CartItemProps {
  drug: any;
  quantity: number;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  drug,
  quantity,
  onRemove,
  onUpdateQuantity,
}) => {
  return (
    <div className={styles.cartItem}>
      <h4>{drug.name}</h4>
      <p>Price: ${drug.price}</p>
      <p>Total: ${drug.price * quantity}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => onUpdateQuantity(drug.id, Number(e.target.value))}
      />
      <button onClick={() => onRemove(drug.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
