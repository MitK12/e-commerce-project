import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
        🎉 Order Placed!
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Thank you for your purchase. Your order is being processed.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition font-semibold"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Confirmation;
