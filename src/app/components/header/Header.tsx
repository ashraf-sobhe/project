"use client";

import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import CartPopup from "../cart/CartPopup";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

const NavbarLinks = [
  { name: "المنيو", href: "#products" },
  { name: "من نحن", href: "#about" },
  { name: "خدمة العملاء", href: "#services" },
  { name: "اتصل بنا", href: "#contact" },
];

export default function Header() {
  const { cart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between h-14">
        {/* اللوجو - يمين */}
        <Logo />

        {/* روابط الهيدر - وسط */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6 font-medium text-gray-800 text-lg">
          {NavbarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-gray-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* السلة + الهامبرجر - يسار */}
        <div className="flex items-center gap-4">
          {/* أيقونة السلة */}
          <div
            className="relative cursor-pointer"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <FaShoppingCart size={24} className="opacity-70 text-gray-800" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cart.reduce((acc, p) => acc + (p.quantity || 1), 0)}
              </span>
            )}
          </div>

          {/* الهامبرجر للموبايل */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Popup السلة */}
        {cartOpen && <CartPopup onClose={() => setCartOpen(false)} />}
      </div>

      {/* قائمة الموبايل */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-6 flex flex-col items-stretch mt-2 space-y-3">
          {NavbarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block w-full py-3 text-lg font-semibold text-gray-800 hover:bg-gray-100 rounded-lg text-center transition"
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
