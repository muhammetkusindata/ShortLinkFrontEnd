"use client";
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useSession } from 'next-auth/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const themeColor1 = useSelector((state: RootState) => state.themeColor.themeColor1);
  const textColor1 = useSelector((state: RootState) => state.textColor.textColor1);

  const { data: session, status } = useSession();

  return (
    <div>
      <Header/>
      <div className='container mx-auto'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout