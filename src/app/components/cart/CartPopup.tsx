"use client";

import { useCart } from "../../context/CartContext";

const CartPopup = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg p-4 z-50 rounded-md">
      <h3 className="text-lg font-semibold mb-2">السلة</h3>

      {cart.length === 0 ? (
        <p className="text-gray-500">السلة فارغة</p>
      ) : (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-1"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} × {item.price} جنيه
                </p>
              </div>
              <button
                className="text-red-600 hover:text-red-800 font-bold"
                onClick={() => removeFromCart(item.id)}
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <>
          <p className="font-semibold mt-2">الإجمالي: {total} جنيه</p>
          <button
            className="mt-2 w-full bg-red-600 text-white py-1 rounded hover:bg-red-700"
            onClick={clearCart}
          >
            تفريغ السلة
          </button>
        </>
      )}
    </div>
  );
};

export default CartPopup;
