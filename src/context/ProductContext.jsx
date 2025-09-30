import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /** Cart State */
  const [cart, setCart] = useState([]);
  const [showBanner, setShowBanner] = useState(false);

  /** Filters State */
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  /** Fetch products from API */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  /** Load cart from localStorage */
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  /** Save cart to localStorage */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /** Cart Functions */
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowBanner(true);
  };

  const incrementQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  /** Cart Totals */
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  /** Progress Bar Color */
  const getProgressBarColor = () =>
    totalPrice <= 500
      ? "bg-blue-600"
      : totalPrice <= 1000
      ? "bg-green-600"
      : "bg-red-600";

  /** Filtered Products */
  const filteredProducts = products
    .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === "priceAsc") return a.price - b.price;
      if (sortBy === "priceDesc") return b.price - a.price;
      return 0;
    });

  return (
    <ProductContext.Provider
      value={{
        loading,
        products,
        filteredProducts,

        /** Filters */
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        setSortBy,
        priceRange,
        setPriceRange,

        /** Cart */
        cart,
        addToCart,
        incrementQty,
        decrementQty,
        removeItem,
        totalItems,
        totalPrice,
        getProgressBarColor,
        showBanner,
        setShowBanner,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

