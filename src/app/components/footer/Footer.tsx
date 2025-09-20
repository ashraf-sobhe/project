"use client";

import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* العنوان */}
        <h2 className="text-3xl font-extrabold text-white">مطعم سناك هب</h2>

        {/* النص */}
        <p className="text-gray-400 max-w-2xl mx-auto">
          نقدم لكم أشهى الأطباق بخبرة عالية وجودة مميزة لتستمتعوا بتجربة فريدة
          في كل مرة.
        </p>

        {/* الأيقونات */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-600 transition"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* حقوق الملكية */}
        <p className="text-sm text-gray-500">
          © 2025 مطعم سناك هب. جميع الحقوق محفوظة.
        </p>

        {/* الروابط */}
        <div className="flex justify-center gap-8 flex-wrap mt-4 text-sm text-gray-400">

          
          <a href="#contact" className="hover:text-white transition">
            اتصل بنا
          </a>
          <a href="#services" className="hover:text-white transition">
            خدمة العملاء
          </a>
           <a href="#about" className="hover:text-white transition">
            من نحن
          </a>
          <a href="#products" className="hover:text-white transition">
            المنيو
          </a>
        </div>
      </div>
    </footer>
  );
}
