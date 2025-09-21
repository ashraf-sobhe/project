import type { Metadata } from "next";
import { Cairo } from "next/font/google"; 
import "./globals.css";
import Header from "./components/header/Header"; 
import { CartProvider } from "./context/CartContext"; 

// استدعاء خط Cairo من Google Fonts
const cairo = Cairo({
  subsets: ["latin", "arabic"], // مهم عشان العربي يشتغل كويس
  variable: "--font-cairo",
  weight: ["300", "400", "600", "700"], // الأوزان اللي عاوزها
});

export const metadata: Metadata = {
  title: "SnackHub",
  description: "مطعم SnackHub - المنيو والخدمة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl"> 
      <body className={`${cairo.variable} antialiased`}>
        <CartProvider>
          <Header />  
          <main>{children}</main>  
        </CartProvider>
      </body>
    </html>
  );
}
