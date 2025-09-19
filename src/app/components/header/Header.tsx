"use client";

import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import CartPopup from "../cart/CartPopup";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

const NavbarLinks = [
  { name: "الصفحة الرئيسية", href: "/" },
  { name: "المنيو", href: "/products" },
  { name: "من نحن", href: "/about" },
  { name: "اتصل بنا", href: "/contact" },
];

export default function Header() {
  const { cart, removeFromCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#f5f5dc] shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* السلة - يسار */}
        <div className="relative cursor-pointer" onClick={() => setCartOpen(!cartOpen)}>
          <FaShoppingCart size={26} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.reduce((acc, p) => acc + (p.quantity || 1), 0)}
            </span>
          )}
        </div>

        {/* روابط الهيدر - وسط */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6 font-medium text-gray-800">
          {NavbarLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-gray-600">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* اللوجو - يمين */}
        <Logo />

        {/* الهامبرجر للموبايل */}
        <button className="md:hidden ml-4" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Popup السلة */}
        {cartOpen && <CartPopup products={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />}
      </div>

      {/* قائمة الموبايل */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f5dc] px-4 pb-4 flex flex-col items-start mt-2">
          {NavbarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 font-medium text-gray-800 hover:text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
