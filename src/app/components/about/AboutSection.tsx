"use client";

import Image from "next/image";
import { FaUtensils, FaHeart, FaLeaf } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 bg-white border border-gray-300">
      {/* wrapper مع paddings داخلية واضحة */}
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* العنوان الرئيسي */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
          من نحن
        </h2>

        {/* المحتوى */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* النصوص */}
          <div className="px-2 md:px-4">
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              في مطعمنا نؤمن أن الطعام ليس مجرد وجبة، بل تجربة تجمع بين الجودة،
              الطعم الأصيل، والجو العائلي. نحرص دائمًا على تقديم أفضل المكونات
              الطازجة لنصنع لكم لحظات مليئة بالبهجة والرضا.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {/* جودة عالية */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 mb-4 shadow-md">
                  <FaUtensils className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  جودة عالية
                </h3>
                <p className="text-gray-600 text-sm">
                  نقدم أطباقًا معدة بعناية من أفضل المكونات الطازجة يوميًا.
                </p>
              </div>

              {/* شغف بالضيافة */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 mb-4 shadow-md">
                  <FaHeart className="text-pink-500 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  شغف بالضيافة
                </h3>
                <p className="text-gray-600 text-sm">
                  نعامل ضيوفنا كعائلة ونحرص على تقديم تجربة مليئة بالحب
                  والاهتمام.
                </p>
              </div>

              {/* صحة وطبيعة */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-4 shadow-md">
                  <FaLeaf className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  صحة وطبيعة
                </h3>
                <p className="text-gray-600 text-sm">
                  وصفاتنا مستوحاة من الطبيعة وتجمع بين الطعم اللذيذ والفائدة.
                </p>
              </div>
            </div>
          </div>

          {/* الصور */}
          <div className="flex gap-4 justify-start px-2 md:px-4">
            <div className="relative w-40 h-60 md:w-64 md:h-96 overflow-hidden rounded-lg shadow-lg translate-y-4">
              <Image
                src="/about.jpg"
                alt="عن مطعمنا"
                fill
                className="object-cover object-left"
                priority
              />
            </div>

            <div className="relative w-40 h-60 md:w-64 md:h-96 overflow-hidden rounded-lg shadow-lg -translate-y-4">
              <Image
                src="/about.jpg"
                alt="عن مطعمنا"
                fill
                className="object-cover object-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
