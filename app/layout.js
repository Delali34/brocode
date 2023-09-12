import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Bro Code Gh",
  description: "Youtube channel",
  logo: "../public/WhatsApp Image 2023-08-15 at 11.31.25 PM.jpeg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
