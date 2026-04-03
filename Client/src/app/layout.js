import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});


export const metadata = {
  title: "Uomo Nextjs Ecommerce App",
  description: "A modern and stylish ecommerce application built with Next.js, offering a seamless shopping experience for users. Explore a wide range of products, enjoy fast performance, and experience the future of online shopping with Uomo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
