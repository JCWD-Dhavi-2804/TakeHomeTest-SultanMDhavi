"use client";
import React, { useState } from "react";
import CartItem from "@/components/CheckoutPage/CartItem";
import CartSummary from "@/components/CheckoutPage/CartSummary";
import CheckoutForm from "@/components/CheckoutPage/Checkout";
import styles from "@/Styles/page.module.css";
import Navbar from "@/components/HomePage/Navbar";

const CheckoutPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    { drug: { id: "1", name: "Drug A", price: 20 }, quantity: 2 },
    { drug: { id: "2", name: "Drug B", price: 15 }, quantity: 1 },
  ]);

  const handleRemove = (id: string) => {
    setCartItems(cartItems.filter((item) => item.drug.id !== id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.drug.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className={styles.checkoutPage}>
      <Navbar />
      <h1>Checkout</h1>
      {cartItems.map((item) => (
        <CartItem
          key={item.drug.id}
          drug={item.drug}
          quantity={item.quantity}
          onRemove={handleRemove}
          onUpdateQuantity={handleUpdateQuantity}
        />
      ))}
      <CartSummary cartItems={cartItems} />
      <CheckoutForm cartItems={cartItems} clearCart={clearCart} />
    </div>
  );
};

export default CheckoutPage;
