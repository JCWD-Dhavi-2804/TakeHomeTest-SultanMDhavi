"use client";
import React from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire({
      title: "Success!",
      text: "You Are Registered!",
      icon: "success",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/login");
      }
    });
  };

  return (
    <div className="flex gap-1 justify-center items-center h-screen bg-green-600">
      <div className="flex justify-center">
        <img
          src="/images/register.png"
          alt="login"
          className="rounded-lg w-3/5"
        />
      </div>
      <div className="max-w-lg p-6 mr-10 bg-white border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl text-center text-black font-bold mb-6">
          Welcome
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-black font-medium"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm text-black font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Sign Up
          </button>
          <div className="flex flex-col mt-4">
            <p className="text-black py-2">
              Already have an account?{" "}
              <a href="/login" className="text-green-600 hover:underline">
                Log In
              </a>
            </p>
            <p className="text-black py-2">
              Wanna go back to home?{" "}
              <a href="/home" className="text-green-600 hover:underline">
                Home
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
