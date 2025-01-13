"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "./layout/Layout";
import { use, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
import { SessionProvider } from 'next-auth/react';

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

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F4EDD3]`}
      >
        <Provider store={store}>
          <SessionProvider>
            <Layout>{children}</Layout>
          </SessionProvider>
        </Provider>
      </body>
    </html>
  );
}
