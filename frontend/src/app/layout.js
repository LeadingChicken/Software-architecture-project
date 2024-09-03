import React from 'react';
import Header from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

const RootLayout = ({ children }) => (
  <html lang="en">
    <Head>
      <title>My App</title>
      <meta name="description" content="A Next.js application with Bootstrap" />
      <meta charSet="UTF-8" />
    </Head>
    <body className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">{children}</main>
      <footer className="bg-light text-center py-3 mt-auto">© 2024 Games</footer>
    </body>
  </html>
);

export default RootLayout;
