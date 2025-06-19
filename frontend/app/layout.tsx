import "./globals.css";
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intervue",
  description: "AI - Powered platform to prepare mock interview.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
