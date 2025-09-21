"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex space-x-8 text-gray-800 font-medium text-lg">
      <Link href="/menu" className="hover:text-gray-600 transition">المنيو</Link>
      <Link href="/about" className="hover:text-gray-600 transition">من نحن</Link>
      <Link href="/services" className="hover:text-gray-600 transition">خدمة العملاء</Link>
      <Link href="/contact" className="hover:text-gray-600 transition">اتصل بنا</Link>
    </nav>
  );
};

export default Navbar;
