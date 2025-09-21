"use client";

import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

interface CartPopupProps {
  onClose: () => void;
}

export default function CartPopup({ onClose }: CartPopupProps) {
  const router = useRouter();
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, p) => sum + (p.price * (p.quantity || 1)), 0);

  const handleCheckout = () => {
    if (cart.length === 0) return; // السلة فارغة → لا يحدث شيء
    onClose();                     // اغلاق popup السلة
    router.push("/checkout");      // الذهاب لصفحة checkout
  };

  return (
    <div className="fixed top-16 right-5 w-[95%] sm:w-[480px] md:w-[520px] max-h-[85vh] bg-white shadow-lg rounded-xl p-4 overflow-y-auto z-50">
      {/* رأس البوب أب */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold">السلة</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800 text-xl font-bold"
        >
          ✕
        </button>
      </div>

      <div className="border-b mb-3"></div>

      {/* قائمة المنتجات */}
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">السلة فارغة</p>
      ) : (
        cart.map((product) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 p-2 border rounded-lg flex-wrap hover:shadow-md transition-shadow duration-200"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded flex-shrink-0"
              />
            )}

            <div className="flex-1 min-w-0">
              <p className="font-bold text-md truncate">{product.name}</p>
              <p className="text-gray-500">{product.price} ج.م</p>
              <p className="text-gray-700 font-semibold mt-1">
                {(product.price * (product.quantity || 1)).toFixed(2)} ج.م
              </p>
              <p className="text-gray-600">الكمية: {product.quantity}</p>
            </div>

            <div className="flex items-center border rounded overflow-hidden flex-shrink-0">
              <button
                onClick={() => decrementQuantity(product.id)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg font-bold"
              >
                -
              </button>
              <span className="px-4">{product.quantity || 1}</span>
              <button
                onClick={() => incrementQuantity(product.id)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg font-bold"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(product.id)}
              className="mt-2 sm:mt-0 sm:ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 flex-shrink-0"
            >
              حذف
            </button>
          </div>
        ))
      )}

      <div className="border-t mt-2 pt-2 flex justify-between items-center font-bold">
        <span>الإجمالي:</span>
        <span>{total.toFixed(2)} ج.م</span>
      </div>

      {/* زر تأكيد الطلب */}
      <button
        onClick={handleCheckout}
        className="mt-4 w-full py-2 rounded text-white bg-[#FFB300] hover:bg-yellow-600 font-bold text-lg"
      >
        تأكيد الطلب
      </button>
    </div>
  );
}
