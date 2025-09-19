"use client";

import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import CartPopup from "../cart/CartPopup";

const NavbarLinks = [
  { name: "اتصل بنا", href: "/contact" },
  { name: "خدمة العملاء", href: "/services" },
  { name: "من نحن", href: "/about" },
  { name: "المنيو", href: "/menu" },
];

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="w-full bg-[#f5f5dc] shadow-md relative">
      {/* ديسكتوب: ترتيب عادي | موبايل: flex-row-reverse عشان اللوجو يفضل يمين */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between md:flex-row flex-row-reverse">
        
        {/* يمين: اللوجو */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* وسط: روابط التنقل (ديسكتوب فقط) */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6 font-medium text-gray-800">
          {NavbarLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gray-600">
              {link.name}
            </a>
          ))}
        </nav>

        {/* شمال: */}
        <div className="flex items-center">
          {/* أيقونة السلة - ديسكتوب */}
          <div
            className="relative cursor-pointer hidden md:block"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <FaShoppingCart size={26} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* الهامبرجر + السلة - موبايل */}
          <div className="flex md:hidden items-center space-x-4">
            {/* الهامبرجر */}
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* السلة في الموبايل */}
            <div
              className="relative cursor-pointer"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <FaShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Popup السلة */}
      {cartOpen && <CartPopup />}

      {/* قائمة الموبايل */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f5dc] px-4 pb-4 flex flex-col items-start">
          {NavbarLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 font-medium text-gray-800 hover:text-gray-600"
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
