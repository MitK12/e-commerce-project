import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "electronics", "jewelery", "men's clothing", "women's clothing"];
// Category → Badge Colors
const categoryColors = {
                    electronics: "bg-blue-600",
                    "women's clothing": "bg-pink-600",
                    "men's clothing": "bg-indigo-600",
                    jewelery: "bg-yellow-600",
                    default: "bg-purple-600", // fallback
                  };
const Products = () => {
  const {loading,filteredProducts,searchTerm,setSearchTerm,selectedCategory,
          setSelectedCategory, sortBy, setSortBy,priceRange, setPriceRange,
/*Cart */ cart,addToCart,incrementQty,decrementQty,removeItem,totalItems,
          totalPrice,getProgressBarColor,showBanner,setShowBanner} = useContext(ProductContext);
  {/* to make th badge clickable */}
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 relative">
      {/* Loading State */}
      {loading && (
        <p className="text-center text-lg text-red-600 font-bold">Wait. Products on loading...</p>
      )}

      {/* Interactive Cart Banner */}

      <AnimatePresence>
        {showBanner && cart.length > 0 && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-11/12 max-w-lg p-4"
          >
            {/* cart header*/}
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-purple-800 flex items-center gap-2">
                <ShoppingCart size={30} /> Cart ({totalItems} items)
              </span>
              <button  
                    onClick={() => setShowBanner(false)}
                    className="font-bold text-red-600">
                <X size={30} />
              </button>
            </div>

            <ul className="max-h-60 overflow-y-auto space-y-3">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-3 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                   {/* Item details */}
                  <div className="flex-1 flex flex-col">
                    <span className="font-medium text-green-600">{item.title}</span>
                     
                     {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => decrementQty(item.id)}
                        className="p-1 border rounded-full hover:bg-gray-100"
                      >
                        <Minus size={20} />
                      </button>
                      <span className="text-gray-700">{item.quantity}</span>
                      <button
                        onClick={() => incrementQty(item.id)}
                        className="p-1 border rounded-full hover:bg-gray-100"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                  </div>
                   {/* Price and Remove button */}
                  <div className="flex flex-col items-end">
                    <span className="text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:underline mt-1"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-3 ${getProgressBarColor()} transition-all duration-500`}
                  style={{
                    width: `${Math.min((totalPrice / 1000) * 100, 100)}%`,
                  }}
                ></div>
              </div>
              <p className="text-xs text-cyan-600 mt-1 text-right">
                ${totalPrice.toFixed(2)} / $1000
              </p>
            </div>

            {/* Total and Checkout */}
            <div className="mt-4 flex justify-between font-semibold text-gray-800">
              <span>Total:</span>
              <span className="font-bold text-green-600">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition font-medium">
              Checkout
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left side filter  Section */}
        <aside className="space-y-6 md:col-span-1">
          <div className="space-y-2">
            <label className="block font-medium text-cyan-700">Search</label>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium text-cyan-700">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block font-medium text-cyan-700">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Default</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block font-medium text-cyan-700">
              Price Range (${priceRange[0]} - ${priceRange[1]})
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
        </aside>

        {/* Products Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500 text-center col-span-3">No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
              >
                {/* Image wrapper with badge*/}
                <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full object-contain"
                  />
                  {/* Category Badge */}
                  <span
                    className={`absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded-full ${
                      categoryColors[product.category] || categoryColors.default
                    }`}
                  >
                    {product.category}
                  </span>
                </div>



                {/* Add to cart*/}
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-gray-500 text-sm">${product.price.toFixed(2)}</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition w-full justify-center"
                    >
                      <ShoppingCart size={20} /> Add to Cart
                    </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
















