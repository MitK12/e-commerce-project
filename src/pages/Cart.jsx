import { useState, useEffect } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const incrementQty = (id) => {
    setCart(cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQty = (id) => {
    setCart(cart.map((item) => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item));
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          Your cart is empty. Add some products to get started!
        </p>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1 px-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-300">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decrementQty(item.id)}
                      className="p-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-2 text-gray-700 dark:text-gray-300">{item.quantity}</span>
                    <button
                      onClick={() => incrementQty(item.id)}
                      className="p-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-semibold text-gray-800 dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:underline mt-2 flex items-center gap-1"
                  >
                    <Trash2 size={16} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-full md:w-96 bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Cart Summary</h3>
            <div className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">Items:</span>
              <span className="font-semibold text-gray-800 dark:text-white">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">Total:</span>
              <span className="font-semibold text-gray-800 dark:text-white">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition font-semibold mt-4">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
