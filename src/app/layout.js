import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jenish portfolio",
  description:
    "Discover the creative work of Jenish, a talented UI/UX designer and graphics designer. Explore innovative design solutions and captivating visuals crafted to enhance user experiences and brand aesthetics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Jenis lodaliya - portfolio</title>
        <meta
          name="description"
          content="This is an awesome site built with Next.js"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="XgWrNxHg2msuxMLcn-dqEvus638STdErY7Ozt3rPJDQ"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
