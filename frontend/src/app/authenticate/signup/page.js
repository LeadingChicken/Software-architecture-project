import React from "react";
import styleSignupPage from "@/styles/AuthPage.module.css";
import Signup from "@/components/authentication/signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const SignupPage = () => (
  <div className={styleSignupPage.container}>
    <div className={styleSignupPage.background}></div>
    <div className={styleSignupPage.content}>
      <Signup />
    </div>
    <ToastContainer />
  </div>
);

export default SignupPage;
