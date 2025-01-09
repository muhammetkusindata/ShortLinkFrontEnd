"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "./layout/Layout";
import { use, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  /*
  const [loginOrRegister, setLoginOrRegister] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    (pathname == "/login" || pathname == "/register")&& setLoginOrRegister(true);
  }, [pathname]);
  */


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
