import React from "react";

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
    <div className="flex items-center justify-between p-2 border-b border-gray-300 bg-green-500">
      <h4 className="m-0">{drug.name}</h4>
      <p>Price: ${drug.price}</p>
      <p>Total: ${drug.price * quantity}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => onUpdateQuantity(drug.id, Number(e.target.value))}
        className="w-24 text-black text-center"
      />
      <button
        onClick={() => onRemove(drug.id)}
        className="bg-red-500 text-white border-none px-2 py-1 cursor-pointer hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
