import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
interface Properties {
  children: React.ReactNode;
}
const DigiLayout = ({ children }: Properties) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DigiLayout;
