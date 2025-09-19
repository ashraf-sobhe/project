// app/components/hero/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { FaTruck, FaUtensils, FaMoneyBillWave } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
      dir="rtl"
    >
      {/* Overlay بجريدينت */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

      {/* المحتوى */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        {/* العنوان */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-snug"
        >
          مطعم <span className="text-red-500">سناك هب</span>
        </motion.h1>

        {/* الوصف */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed"
        >
          حيث يلتقي الطعم الأصيل مع الجودة الفاخرة.  
          تجربة طعام فريدة، خدمة سريعة، وأجواء لا تُنسى.
        </motion.p>

        {/* المميزات */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
        >
          <div className="flex flex-col items-center">
            <FaTruck className="text-4xl sm:text-5xl mb-3 text-red-400" />
            <p className="text-lg font-medium">توصيل سريع</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUtensils className="text-4xl sm:text-5xl mb-3 text-green-400" />
            <p className="text-lg font-medium">أكلات متنوعة</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMoneyBillWave className="text-4xl sm:text-5xl mb-3 text-yellow-400" />
            <p className="text-lg font-medium">أسعار مناسبة</p>
          </div>
        </motion.div>

        {/* زر CTA */}
        <motion.a
          href="/menu"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg"
        >
          اطلب الآن 🚀
        </motion.a>
      </div>
    </section>
  );
}
