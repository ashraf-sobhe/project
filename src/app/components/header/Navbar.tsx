"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex space-x-8 text-gray-800 font-medium">
      <Link href="/menu">المنيو</Link>
      <Link href="/about">من نحن</Link>
      <Link href="/services">خدمة العملاء</Link>
      <Link href="/contact">اتصل بنا</Link>
    </nav>
  );
};

export default Navbar;
