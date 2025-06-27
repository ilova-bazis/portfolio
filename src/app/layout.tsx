import type { Metadata } from "next";
import "./globals.css";
import Top from "./top/top";
import Footer from "./footer/footer";

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
        className={`h-dvh`}
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
