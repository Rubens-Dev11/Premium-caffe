import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/Components/Home/NavBar/Navbar";
import Footer from "@/Components/Home/Footer/Footer";

const jost = Jost({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alowishus Delicious Coffee - Premium Coffee Store",
  description:
    "Explore Alowishus Delicious Coffee's premium range of coffee beans, blends, and brewing accessories. Shop high-quality coffee products and elevate your coffee experience with rich flavors and perfect aromas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
