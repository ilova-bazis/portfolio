import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Top from "./top/top";
import Footer from "./footer/footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Farzon Nosiri Portfolio",
  description: "This is Farzon Nosiri Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} h-dvh`}
      >
         <div className='container p-4 sm:mx-auto'>
         <Top />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
