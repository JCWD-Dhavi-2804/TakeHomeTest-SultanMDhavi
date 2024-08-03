import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

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
    <form
      className="p-5 border border-gray-300 mt-5 bg-green-500"
      onSubmit={handleSubmit}
    >
      <div className="mb-2.5">
        <label htmlFor="fullName" className="block mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
          className="w-full p-2 box-border text-black"
        />
      </div>
      <div className="mb-2.5">
        <label htmlFor="address" className="block mb-1">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full p-2 box-border text-black"
        />
      </div>
      <div className="mb-2.5">
        <label htmlFor="city" className="block mb-1">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={form.city}
          onChange={handleChange}
          required
          className="w-full p-2 box-border text-black"
        />
      </div>
      <div className="mb-2.5">
        <label htmlFor="postalCode" className="block mb-1">
          Postal Code
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={form.postalCode}
          onChange={handleChange}
          required
          className="w-full p-2 box-border text-black"
        />
      </div>
      <div className="mb-2.5">
        <label htmlFor="cardNumber" className="block mb-1">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={form.cardNumber}
          onChange={handleChange}
          required
          className="w-full p-2 box-border text-black"
        />
      </div>
      <div className="mb-2.5">
        <label htmlFor="expirationDate" className="block mb-1">
          Expiration Date
        </label>
        <input
          type="text"
          id="expirationDate"
          name="expirationDate"
          value={form.expirationDate}
          onChange={handleChange}
          required
          className="w-full p-2 box-border text-black"
        />
      </div>
      <div className="mb-2.5">
        <label htmlFor="cvv" className="block mb-1">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={form.cvv}
          onChange={handleChange}
          required
          className="w-full p-2 box-border text-black"
        />
      </div>
      <button
        type="submit"
        className="bg-green-700 text-white border-none p-2.5 cursor-pointer hover:bg-green-800"
      >
        Submit
      </button>
    </form>
  );
};

export default CheckoutForm;
