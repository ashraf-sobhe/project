"use client";

import Image from "next/image";
import { FaUtensils, FaHeart, FaLeaf } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-6 md:px-12 lg:px-20">
  <div className="max-w-6xl mx-auto">
    {/* العنوان الرئيسي */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
      من نحن
    </h2>

    {/* المحتوى */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* النصوص */}
      <div>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          في مطعمنا نؤمن أن الطعام ليس مجرد وجبة، بل تجربة تجمع بين الجودة،
          الطعم الأصيل، والجو العائلي. نحرص دائمًا على تقديم أفضل المكونات
          الطازجة لنصنع لكم لحظات مليئة بالبهجة والرضا.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <FaUtensils className="text-red-600 text-4xl mb-2 mx-auto md:mx-0" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              جودة عالية
            </h3>
            <p className="text-gray-600 text-sm">
              نقدم أطباقًا معدة بعناية من أفضل المكونات الطازجة يوميًا.
            </p>
          </div>

          <div>
            <FaHeart className="text-red-500 text-4xl mb-2 mx-auto md:mx-0" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              شغف بالضيافة
            </h3>
            <p className="text-gray-600 text-sm">
              نعامل ضيوفنا كعائلة ونحرص على تقديم تجربة مليئة بالحب والاهتمام.
            </p>
          </div>

          <div>
            <FaLeaf className="text-green-600 text-4xl mb-2 mx-auto md:mx-0" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              صحة وطبيعة
            </h3>
            <p className="text-gray-600 text-sm">
              وصفاتنا مستوحاة من الطبيعة وتجمع بين الطعم اللذيذ والفائدة.
            </p>
          </div>
        </div>
      </div>

      {/* الصور */}
      <div className="flex gap-4 justify-center">
        {/* الصورة الأولى */}
        <div className="relative w-40 h-60 md:w-64 md:h-96 overflow-hidden rounded-lg shadow-lg translate-y-4">
          <Image
            src="/about.jpg"
            alt="عن مطعمنا"
            fill
            className="object-cover object-left"
            priority
          />
        </div>

        {/* الصورة الثانية */}
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
