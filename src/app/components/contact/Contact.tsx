"use client";

import { FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            اتصل بنا
          </h2>
          <p className="text-gray-600 text-lg">
            نسعد باستقبالكم وطلباتكم.
          </p>
        </div>

        {/* المحتوى */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* العمود اليمين: بيانات التواصل */}
          <div className="space-y-6 order-2 md:order-1 w-full pr-0">
            {[
              {
                icon: <FaMapMarkerAlt className="text-red-600" />,
                title: "العنوان",
                text: "القاهرة - شارع التحرير - بجوار محطة المترو",
              },
              {
                icon: <FaWhatsapp className="text-green-600" />,
                title: "واتساب",
                text: "+20 100 123 4567",
              },
              {
                icon: <FaPhoneAlt className="text-orange-500" />,
                title: "اتصل بنا",
                text: "+20 200 987 6543",
              },
              {
                icon: <FaEnvelope className="text-blue-600" />,
                title: "البريد الإلكتروني",
                text: "info@restaurant.com",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                dir="rtl"
              >
                {/* الأيقونة */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                  {item.icon}
                </div>

                {/* النص */}
                <div className="text-right pl-4 ">
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* العمود الشمال: الخريطة */}
          <div className="w-full h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123456789!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sRestaurant!5e0!3m2!1sar!2seg!4v0000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
