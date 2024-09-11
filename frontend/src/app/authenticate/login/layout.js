"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/store/store"; // Đường dẫn tới store

import "@/app/globals.css";
const AuthLayout = ({ children }) => (
  <Provider store={store}>
    <html lang="en">
      <body className="d-flex flex-column vh-100">
        {/* <AddBootstrap /> */}
        <main className="flex-grow-1 overflow-auto">{children}</main>
      </body>
    </html>
  </Provider>
);

export default AuthLayout;
