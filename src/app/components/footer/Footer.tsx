"use client";

import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      {/* المحتوى الرئيسي */}
      <div className="max-w-6xl mx-auto text-center py-12 px-4 md:px-8 lg:px-16 space-y-6">
        <h2 className="text-3xl font-extrabold text-white">مطعم سناك هب</h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          نقدم لكم أشهى الأطباق بخبرة عالية وجودة مميزة لتستمتعوا بتجربة فريدة
          في كل مرة.
        </p>

        {/* أيقونات التواصل */}
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
      </div>

      {/* قسم الروابط والحقوق مع بوردر */}
      <div className="border-t border-gray-700 py-4 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        {/* الروابط على اليسار */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 w-full md:w-auto">
          <a className="hover:text-white transition border-b md:border-b-0 border-gray-700 py-2 md:py-0 text-center md:text-left" href="#contact">
            اتصل بنا
          </a>
          <a className="hover:text-white transition border-b md:border-b-0 border-gray-700 py-2 md:py-0 text-center md:text-left" href="#services">
            خدمة العملاء
          </a>
          <a className="hover:text-white transition border-b md:border-b-0 border-gray-700 py-2 md:py-0 text-center md:text-left" href="#about">
            من نحن
          </a>
          <a className="hover:text-white transition border-b md:border-b-0 border-gray-700 py-2 md:py-0 text-center md:text-left" href="#products">
            المنيو
          </a>
        </div>

        {/* الحقوق على اليمين */}
        <p className=" text-sm text-gray-500 text-right mt-2 md:mt-0 border-b md:border-b-0 border-gray-700 pb-2 md:pb-0 w-full md:w-auto text-center md:text-right">
          © 2025 مطعم سناك هب. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
