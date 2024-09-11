import React from "react";
import styleLoginPage from "@/styles/AuthPage.module.css";
import Login from "@/components/authentication/login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const LoginPage = () => (
  <div className={styleLoginPage.container}>
    <div className={styleLoginPage.background}></div>
    <div className={styleLoginPage.content}>
      <Login />
    </div>
    <ToastContainer />
  </div>
);

export default LoginPage;
