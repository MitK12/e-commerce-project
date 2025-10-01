import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, Moon, Sun, Trash2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { ProductContext } from "../context/ProductContext";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Categories", path: "/categories" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const logInMenu = [
  { name: "Login", path: "/login" },
  { name: "Signup", path: "/signup" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [cartOpen, setCartOpen] = useState(false); // Cart dropdown
  const { theme, toggleTheme } = useTheme();
  const { cart, totalItems, totalPrice, removeItem, searchTerm, setSearchTerm } =
    useContext(ProductContext);

  const baseStyle =
    "relative flex flex-col items-center gap-1 transition duration-300 font-medium text-gray-800 hover:text-purple-600";
  const activeStyle = "text-purple-600 font-semibold";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/products")}
        >
          <ShoppingCart className="text-white w-9 h-9 bg-purple-600 p-2 rounded-lg shadow-md" />
          <span className="font-bold text-lg text-gray-800">B-Shop</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:gap-6 lg:gap-8 text-base">
          {menuItems.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
            />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            {theme === "light" ? (
              <Moon className="w-6 h-6 text-gray-900" />
            ) : (
              <Sun className="w-6 h-6 text-yellow-500" />
            )}
          </button>

          {/* Cart Icon */}
          <div className="relative">
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ShoppingCart className="w-7 h-7 text-gray-900" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Cart Dropdown */}
            {cartOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
                <h3 className="font-semibold text-lg mb-2">Cart Summary</h3>
                {cart.length === 0 ? (
                  <p className="text-gray-600">Your cart is empty</p>
                ) : (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-800">{item.title}</p>
                          <p className="text-gray-600 text-sm">
                            {item.quantity} x ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                    <div className="border-t border-gray-300 pt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => {
                        setCartOpen(false);
                        navigate("/checkout");
                      }}
                      className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition font-semibold mt-2"
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Login/Signup */}
          <ul className="hidden md:flex gap-5 text-sm font-medium">
            {logInMenu.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-200 hover:bg-gray-100 transition"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center gap-4 py-4">
            {menuItems.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${baseStyle} text-lg ${isActive ? activeStyle : ""}`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
            {logInMenu.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${baseStyle} text-lg ${isActive ? activeStyle : ""}`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Search */}
          <div className="px-4 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


