import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Categories & badge colors
const categories = ["All", "electronics", "jewelery", "men's clothing", "women's clothing"];
const categoryColors = {
  electronics: "bg-blue-600",
  "women's clothing": "bg-pink-600",
  "men's clothing": "bg-indigo-600",
  jewelery: "bg-yellow-600",
  default: "bg-purple-600",
};

const Products = () => {
  const {
    loading,
    filteredProducts,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
    cart,
    addToCart,
    incrementQty,
    decrementQty,
    removeItem,
    totalPrice,
    totalItems,
  } = useContext(ProductContext);

  const [isCartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-white relative">
      {/* =========================
          Filters Section + Top-right Cart
      ========================== */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative">
        {/* Left: Title + Search */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 flex-1">
          <h1 className="text-2xl font-bold text-gray-800">Products</h1>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Right: Cart summary (top-right) */}
        {cart.length > 0 && (
          <button
            onClick={() => setCartOpen(true)}
            className="absolute md:static top-0 right-0 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition flex items-center gap-2"
          >
            <ShoppingCart /> {totalItems} items - ${totalPrice.toFixed(2)}

          </button>
        )}
      </div>

      {/* =========================
          Category Filter
      ========================== */}
      <div className="flex gap-3 overflow-x-auto pb-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-medium ${
              selectedCategory === cat
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* =========================
          Sort + Price
      ========================== */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex items-center gap-2">
          <label className="font-medium text-gray-700">Sort:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Default</option>
            <option value="priceAsc">Price: Low → High</option>
            <option value="priceDesc">Price: High → Low</option>
          </select>
        </div>

        <div className="flex items-center gap-3 flex-1">
          <label className="font-medium text-gray-700 whitespace-nowrap">
            Price: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full"
          />
        </div>
      </div>

      {/* =========================
          Products Grid
      ========================== */}
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500 text-center col-span-4">No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border rounded-xl shadow hover:shadow-lg p-4 flex flex-col relative"
              >
                {/* Category Badge */}
                <span
                  className={`absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded-full ${
                    categoryColors[product.category] || categoryColors.default
                  }`}
                >
                  {product.category}
                </span>

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 object-contain mb-4 mx-auto"
                />
                <h2 className="font-medium text-gray-800 line-clamp-2">{product.title}</h2>
                <p className="text-green-600 font-bold mt-2">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </motion.div>
            ))
          )}
        </div>
      )}

      {/* =========================
          Side Cart Drawer
      ========================== */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-80 sm:w-96 h-full bg-white shadow-lg z-50 flex flex-col"
          >
            {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-bold text-lg flex items-center gap-2">
                <ShoppingCart /> Cart ({totalItems})
              </h2>
              <button onClick={() => setCartOpen(false)}>
                <X size={24} />
              </button>
          </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 items-center border-b pb-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-contain rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => decrementQty(item.id)}
                        className="p-1 border rounded-full hover:bg-gray-100"
                      >
                        <Minus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => incrementQty(item.id)}
                        className="p-1 border rounded-full hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:underline text-sm flex items-center gap-1"
                    >
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              <div className="flex justify-between font-semibold text-lg mb-3">
                <span>Total:</span>
                <span className="text-green-600">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() => {
                  setCartOpen(false);
                  navigate("/checkout");
                }}
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-medium"
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;



