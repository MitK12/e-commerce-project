import { useState, useEffect, useContext } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const {theme, toggleTheme} = useTheme(); //theme 





  // Load cart
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Update localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   document.documentElement.classList.toggle("dark", !darkMode);
  // };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const baseStyle = "relative flex flex-col items-center gap-1 transition duration-300 font-medium text-gray-800 dark:text-gray-200 hover:text-purple-600";
  const activeStyle = "text-red-600 dark:text-purple-600 font-semibold";
  
  const {searchTerm, setSearchTerm}=useContext(ProductContext); //


  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <ShoppingCart className="text-white w-9 h-9 bg-purple-600 p-2 rounded-lg shadow-md" />
          <span className="font-bold text-lg text-gray-800 dark:text-gray-200">B-Shop</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          {menuItems.map(({ name, path }) => (
            <li key={path}>
              <NavLink to={path} className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}>{name}</NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="search"
              placeholder="Search products..."
              className="border border-gray-300 dark:border-gray-700 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-200 w-64"
              
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Dark Mode */}
          <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
                {theme === "light" ? (
                  <Moon className="w-6 h-6 text-gray-800" />
                ) : (
                  <Sun className="w-6 h-6 text-yellow-400" />
                )}
          </button>



          {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
              {theme === "light" ? ( <Moon className="w-6 h-6 text-gray-800" />) 
                                 : ( <Sun className="w-6 h-6 text-yellow-400" />
              )}
          </button> */}


          {/* <button onClick={toggleTheme} 
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}

          {/* Cart with dropdown */}
          <div className="relative">
            <button onClick={() => setCartOpen(!cartOpen)} className="relative">
              <ShoppingCart className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full px-2 py-0.5">{cartCount}</span>
              )}
            </button>

            {cartOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50">
                <h3 className="font-semibold text-lg dark:text-white mb-2">Cart Summary</h3>
                {cart.length === 0 ? (
                  <p className="text-gray-600 dark:text-gray-300">Your cart is empty</p>
                ) : (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-800 dark:text-white">{item.title}</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{item.quantity} x ${item.price.toFixed(2)}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-2 flex justify-between font-semibold dark:text-white">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => { setCartOpen(false); navigate("/checkout"); }}
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
                <NavLink to={path} className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ""}`}>{name}</NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col items-center gap-4 py-4">
            {menuItems.map(({ name, path }) => (
              <li key={path}>
                <NavLink to={path} onClick={() => setIsOpen(false)} className={({ isActive }) => `${baseStyle} text-lg ${isActive ? activeStyle : ""}`}>{name}</NavLink>
              </li>
            ))}
            {logInMenu.map(({ name, path }) => (
              <li key={path}>
                <NavLink to={path} onClick={() => setIsOpen(false)} className={({ isActive }) => `${baseStyle} text-lg ${isActive ? activeStyle : ""}`}>{name}</NavLink>
              </li>
            ))}
          </ul>

          <div className="px-4 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <input
                type="search"
                placeholder="Search products..."
                className="border border-gray-300 dark:border-gray-700 rounded-md pl-10 pr-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




// import { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { Search, ShoppingCart, Menu, X, Moon, Sun, Plus, Minus, Trash2 } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const menuItems = [
//   { name: "Home", path: "/", hasUnderline: true },
//   { name: "Products", path: "/products" },
//   { name: "Categories", path: "/categories" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// const logInMenu = [
//   { name: "Login", path: "/login" },
//   { name: "Signup", path: "/signup" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [cart, setCart] = useState([]);
//   const [showCartDropdown, setShowCartDropdown] = useState(false);

//   const dropdownRef = useRef(null);

//   // Load cart from localStorage
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) setCart(JSON.parse(storedCart));
//   }, []);

//   // Save cart to localStorage
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowCartDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle("dark", !darkMode);
//   };

//   const baseStyle =
//     "relative flex flex-col items-center gap-1 transition duration-300 font-medium text-gray-800 dark:text-gray-200 hover:text-purple-600";
//   const activeStyle = "text-red-600 dark:text-purple-600 font-semibold";

//   const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const incrementQty = (id) => {
//     setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
//   };
//   const decrementQty = (id) => {
//     setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item));
//   };
//   const removeItem = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <ShoppingCart className="text-white w-9 h-9 bg-purple-600 p-2 rounded-lg shadow-md" />
//           <span className="font-bold text-lg text-gray-800 dark:text-gray-200">B-Shop</span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 text-sm">
//           {menuItems.map(({ name, path, hasUnderline }) => (
//             <li key={path}>
//               <NavLink
//                 to={path}
//                 className={({ isActive }) =>
//                   `${baseStyle} ${isActive ? activeStyle : ""} ${
//                     hasUnderline && isActive ? "border-b-2 border-purple-600 pb-1" : ""
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Right Section */}
//         <div className="flex items-center gap-5 relative">
//           {/* Search */}
//           <div className="relative hidden md:block">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600" />
//             <input
//               type="search"
//               placeholder="Search products..."
//               className="border border-gray-300 dark:border-gray-600 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-64 dark:bg-white dark:text-gray-200"
//             />
//           </div>

//           {/* Dark Mode */}
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-full bg-gray-100 dark:bg-white text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
//           >
//             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>

//           {/* Cart */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={() => setShowCartDropdown(!showCartDropdown)}
//               className="relative"
//             >
//               <ShoppingCart className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
//                   {cartCount}
//                 </span>
//               )}
//             </button>

//             {/* Animated Dropdown */}
//             <AnimatePresence>
//               {showCartDropdown && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.25 }}
//                   className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-4 z-50"
//                 >
//                   <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
//                     Cart Items
//                   </h4>

//                   {cart.length ? (
//                     <ul className="space-y-3 max-h-64 overflow-y-auto">
//                       {cart.map(item => (
//                         <li key={item.id} className="flex gap-3 items-center text-sm">
//                           {/* Product Image */}
//                           <img
//                             src={item.image}
//                             alt={item.title}
//                             className="w-12 h-12 object-cover rounded"
//                           />
//                           {/* Product Info */}
//                           <div className="flex-1 flex flex-col">
//                             <span className="font-medium">{item.title}</span>
//                             <div className="flex items-center gap-2 mt-1">
//                               <button
//                                 onClick={() => decrementQty(item.id)}
//                                 className="p-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
//                               >
//                                 <Minus size={14} />
//                               </button>
//                               <span>{item.quantity}</span>
//                               <button
//                                 onClick={() => incrementQty(item.id)}
//                                 className="p-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
//                               >
//                                 <Plus size={14} />
//                               </button>
//                             </div>
//                           </div>
//                           {/* Price & Remove */}
//                           <div className="flex flex-col items-end">
//                             <span>${(item.price * item.quantity).toFixed(2)}</span>
//                             <button
//                               onClick={() => removeItem(item.id)}
//                               className="text-red-500 hover:underline mt-1"
//                             >
//                               <Trash2 size={14} />
//                             </button>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
//                   )}

//                   {cart.length > 0 && (
//                     <>
//                       <div className="mt-4 flex justify-between font-semibold text-gray-800 dark:text-white">
//                         <span>Total:</span>
//                         <span>${totalPrice.toFixed(2)}</span>
//                       </div>
//                       <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition font-medium">
//                         Checkout
//                       </button>
//                     </>
//                   )}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Login */}
//           <ul className="hidden md:flex gap-5 text-sm font-medium">
//             {logInMenu.map(({ name, path }) => (
//               <li key={path}>
//                 <NavLink
//                   to={path}
//                   className={({ isActive }) =>
//                     `${baseStyle} ${isActive ? activeStyle : ""}`
//                   }
//                 >
//                   {name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
