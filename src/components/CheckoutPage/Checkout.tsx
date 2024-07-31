import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import styles from "@/styles/Checkout.module.css";

interface CheckoutFormProps {
  cartItems: { drug: any; quantity: number }[];
  clearCart: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  cartItems,
  clearCart,
}) => {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout data:", form, "Cart items:", cartItems);
    clearCart();
    Swal.fire({
      title: "Success!",
      text: "Your order has been placed.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      router.push("/home");
    });
  };

  return (
    <form className={styles.checkoutForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={form.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={form.postalCode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={form.cardNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="expirationDate">Expiration Date</label>
        <input
          type="text"
          id="expirationDate"
          name="expirationDate"
          value={form.expirationDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={form.cvv}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckoutForm;
