"use client";
import React from "react";
import Header from "@/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/store/store"; // Đường dẫn tới store
import AddBootstrap from "./addBootstrap";

import './globals.css';
const RootLayout = ({ children }) => (
  <Provider store={store}>
    <html lang="en">
      <Head>
        <title>My App</title>
        <meta
          name="description"
          content="A Next.js application with Bootstrap"
        />
        <meta charSet="UTF-8" />
      </Head>
      <body className="d-flex flex-column vh-100">
        <Header />
        {/* <AddBootstrap /> */}
        <main className="flex-grow-1 overflow-auto">{children}</main>
        <footer className="bg-dark text-center text-light">
          © 2024 Games
        </footer>
      </body>
    </html>
  </Provider>
);

export default RootLayout;
