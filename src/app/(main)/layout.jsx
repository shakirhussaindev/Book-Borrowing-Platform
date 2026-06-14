import BookNews from '@/components/shared/BookNews';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <BookNews/>
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;