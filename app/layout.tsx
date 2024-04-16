import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/NavBar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "prabhath",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ... You can include meta tags and other head content here ... */}
      </head>
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
