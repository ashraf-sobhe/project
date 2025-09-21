"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, removeFromCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const router = useRouter();

  const total = cart.reduce((sum, p) => sum + (p.price * (p.quantity || 1)), 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !address) {
      alert("من فضلك املأ جميع الحقول");
      return;
    }

    alert("تم تأكيد الطلب بنجاح!");
    cart.forEach((p) => removeFromCart(p.id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      {/* قائمة المنتجات */}
      <div className="mb-6 space-y-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">السلة فارغة</p>
        ) : (
          cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded flex-shrink-0"
                />
              )}

              <div className="flex-1 min-w-0">
                <p className="font-bold text-lg truncate">{product.name}</p>
                <p className="text-gray-500">{product.price} ج.م</p>
                <p className="text-gray-700 font-semibold mt-1">
                  {(product.price * (product.quantity || 1)).toFixed(2)} ج.م
                </p>
                <p className="text-gray-600">الكمية: {product.quantity}</p>
              </div>
            </div>
          ))
        )}

        {cart.length > 0 && (
          <div className="flex justify-between font-bold text-xl mt-4 border-t pt-3">
            <span>الإجمالي:</span>
            <span>{total.toFixed(2)} ج.م</span>
          </div>
        )}
      </div>

      {/* فورم بيانات المستخدم */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-semibold">الاسم</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">رقم التليفون</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">العنوان</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded text-white bg-[#FFB300] hover:bg-yellow-600 font-bold text-lg transition-colors duration-200"
        >
          تأكيد الطلب
        </button>
      </form>

      {/* زر العودة للصفحة الرئيسية */}
      <button
        onClick={() => router.push("/")}
        className="mt-6 w-full py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold transition-colors duration-200"
      >
        العودة للصفحة الرئيسية
      </button>
    </div>
  );
}
