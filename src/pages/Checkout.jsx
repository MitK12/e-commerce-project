import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Checkout = () => {
  const { cart, totalPrice, totalItems } = useContext(ProductContext);
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // ✅ Later: send order to backend (Node/Firebase/Stripe etc.)
    alert("Order placed successfully!");

    // redirect back to home/products
    navigate("/");
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 🟢 Cart Summary */}
          <div className="lg:col-span-1 bg-white shadow rounded-lg p-6 h-fit">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
            <ul className="divide-y divide-gray-200 mb-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between py-3 text-sm">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total ({totalItems} items)</span>
              <span className="text-green-600">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* 🟢 Shipping & Payment */}
          <form
            onSubmit={handlePlaceOrder}
            className="lg:col-span-2 bg-white shadow rounded-lg p-6 space-y-6"
          >
            {/* Shipping Info */}
            <div>
              <h2 className="font-semibold text-lg mb-3">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="px-4 py-2 border rounded-lg w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="px-4 py-2 border rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  required
                  className="px-4 py-2 border rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Address"
                  required
                  className="px-4 py-2 border rounded-lg w-full md:col-span-2"
                />
              </div>
            </div>

            {/* Payment (dummy for now) */}
            <div>
              <h2 className="font-semibold text-lg mb-3">Payment Method</h2>
              <select className="px-4 py-2 border rounded-lg w-full">
                <option>Cash on Delivery</option>
                <option>Credit / Debit Card</option>
                <option>PayPal</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-medium"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;




