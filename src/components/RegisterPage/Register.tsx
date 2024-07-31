"use client";
import React from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import "./Register.css";

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
    <div className="register-container">
      <div className="register-image-container">
        <img
          src="/images/register.png"
          alt="login"
          className="register-image"
        />
      </div>
      <div className="register-form-container">
        <h2 className="register-title">Welcome</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="text" name="email" id="email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-input"
            />
          </div>
          <button type="submit" className="register-button">
            Sign Up
          </button>
          <div className="register-links">
            <p className="link-text">
              Already have an account?{" "}
              <a href="/login" className="link">
                Log In
              </a>
            </p>
            <p className="link-text">
              Wanna back to home?{" "}
              <a href="/home" className="link">
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
