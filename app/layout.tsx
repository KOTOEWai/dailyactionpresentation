import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Daily Actions: Small Steps, Big Impact",
  description:
    "A scroll-based presentation on everyday environmental actions: reducing waste, saving water and energy, protecting wildlife, and cutting food waste.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans min-h-screen bg-[#F8FAF7] text-[#313D35] flex flex-col">
        {children}
      </body>
    </html>
  );
}
