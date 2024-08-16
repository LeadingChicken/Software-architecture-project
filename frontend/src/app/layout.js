import React from 'react';
import Header from '@/components/Header';

const RootLayout = ({ children }) => (
  <html>
    <head />
    <body>
      <Header/>
      <main>{children}</main>
      <footer>© 2024 Games</footer>
    </body>
  </html>
);

export default RootLayout;
