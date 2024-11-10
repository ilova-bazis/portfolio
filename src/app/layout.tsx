import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
