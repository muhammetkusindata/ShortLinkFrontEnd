"use client";
import React from 'react'
import Footer from './Footer';
import Header from './Header';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const themeColor1=useSelector((state:RootState)=>state.themeColor.themeColor1);
  const textColor1=useSelector((state:RootState)=>state.textColor.textColor1);
  return (
    <div>
        <Header textColor={textColor1} themeColor={themeColor1}/>
        <div className='container mx-auto red-500'>{children}</div>
        <Footer textColor={textColor1} themeColor={themeColor1}/>
    </div>
  )
}

export default Layout