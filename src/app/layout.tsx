import { Open_Sans } from "next/font/google";
// Arial, sans-serif, Montserrat, Lato, Roboto, Poppins, Anton, Alegreya
import "./globals.css";
import React from 'react'
import Layout from "./";

const poppins = Open_Sans({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`relative ${poppins.className} min-w-[300px]`}>
        <Layout children={children} />
      </body>
    </html>
  );
}

