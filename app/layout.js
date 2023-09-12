import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Bro Code Gh",
  description:
    "The Bro Code is not just a platform for men to express themselves; it's a beacon of hope. It's an endeavor to find solutions to the struggles that men face. For far too long, the mental health and well-being of men",
  logo: "../public/WhatsApp Image 2023-08-15 at 11.31.25 PM.jpeg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
