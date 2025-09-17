"use client";

import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

const NavbarLinks = [
  { name: "اتصل بنا", href: "/contact" },
   { name: "خدمة العملاء", href: "/services" },
  { name: "من نحن", href: "/about" },
  { name: "المنيو", href: "/menu" },
];

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#f5f5dc] shadow-md">
      <div className="container mx-auto px-4 py-1.5 flex items-center justify-between">

        {/* اليسار: أيقونة السلة */}
        <div className="relative cursor-pointer">
          <FaShoppingCart size={26} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        {/* الوسط: روابط التنقل (Desktop) */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-800">
          {NavbarLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gray-600">
              {link.name}
            </a>
          ))}
        </nav>

        {/* أيقونة الهامبرجر للموبايل */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* اليمين: اللوجو */}
        <div className="flex items-center">
          <Logo />
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة */}
{menuOpen && (
  <div className="md:hidden bg-[#f5f5dc] px-4 pb-4 flex flex-col items-start">
    {NavbarLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className="block py-2 font-medium text-gray-800 hover:text-gray-600 text-left"
        onClick={() => setMenuOpen(false)}
      >
        {link.name}
      </a>
    ))}
  </div>
)}
    </header>
  );
};

export default Header;
