"use client";
import React from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import "./Login.css";

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire({
      title: "Success!",
      text: "Login Successful!",
      icon: "success",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/home");
      }
    });
  };

  return (
    <div className="login-container">
      <div className="login-image-container">
        <img src="/images/login.webp" alt="login" className="login-image" />
      </div>
      <div className="login-form-container">
        <h2 className="login-title">Log In!</h2>
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
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="login-links">
            <p className="link-text">
              Don&apos;t have an account?{" "}
              <a href="/register" className="link">
                Sign Up
              </a>
            </p>
            <p className="link-text">
              Wanna go back to home?{" "}
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

export default LoginPage;
