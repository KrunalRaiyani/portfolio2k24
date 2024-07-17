import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jenish portfolio",
  description:
    "Discover the creative work of Jenish, a talented UI/UX designer and graphics designer. Explore innovative design solutions and captivating visuals crafted to enhance user experiences and brand aesthetics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="XgWrNxHg2msuxMLcn-dqEvus638STdErY7Ozt3rPJDQ"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
