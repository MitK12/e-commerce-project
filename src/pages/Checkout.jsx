import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "Credit Card",
  });

  // Load cart
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      alert("Please fill all required fields.");
      return;
    }
    // Clear cart
    localStorage.removeItem("cart");
    navigate("/confirmation");
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Your cart is empty
        </h2>
        <p className="text-gray-600 dark:text-gray-300">Add items before checkout.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Checkout
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Billing Information</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
            required
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            rows="4"
            value={form.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
            required
          />
          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
          >
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>PayPal</option>
          </select>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition font-semibold"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Order Summary</h3>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">{item.title} x {item.quantity}</span>
              <span className="font-semibold text-gray-800 dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <hr className="border-gray-300 dark:border-gray-600"/>
          <div className="flex justify-between text-lg font-semibold text-gray-800 dark:text-white">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
