import React, { useContext, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const { filteredProducts } = useContext(ProductContext); // fetch products from context
  const [carouselProducts, setCarouselProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Pick first 7 products for carousel
  useEffect(() => {
    if (filteredProducts.length > 0) {
      setCarouselProducts(filteredProducts.slice(0, 7));
    }
  }, [filteredProducts]);

  // Carousel navigation
  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselProducts.length - 1 : prev - 1
    );
  };

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextProduct();
    }, 2000);

    return () => clearInterval(interval);
  }, [carouselProducts]);

  const currentProduct = carouselProducts[currentIndex] || {};

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-gradient-to-br from-black via-purple-600 to-pink-500 text-white rounded-2xl">
      {/* Left Section */}
      <div className="max-w-lg space-y-6 text-center md:text-left">
        <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm inline-block">
          🎉 New arrivals every week
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to B-Shop
        </h1>

        <p className="text-lg text-gray-100">
          Discover amazing products at unbeatable prices with lightning-fast
          delivery and exceptional customer service.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button
            onClick={() => navigate("/products")}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Shop Now →
          </button>
          <button
            onClick={() => navigate("/categories")}
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition"
          >
            Browse Categories
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-10 pt-6 justify-center md:justify-start">
          <div className="text-center">
            <p className="text-2xl font-bold">50K+</p>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">1M+</p>
            <p className="text-sm">Products Sold</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">50+</p>
            <p className="text-sm">Countries</p>
          </div>
        </div>
      </div>

      {/* Right Section - Product Carousel */}
      <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
        <div className="bg-white/10 rounded-2xl p-8 text-center shadow-lg">
          <img
            src={currentProduct.image}
            alt={currentProduct.title}
            className="w-64 mx-auto object-contain"
          />
          <h3 className="text-xl mt-4 font-semibold text-white">
            {currentProduct.title}
          </h3>

          {/* Ratings */}
          <div className="flex items-center justify-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < currentProduct.rating ? "text-yellow-400" : "text-gray-400"
                }`}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-gray-300 text-sm">
              ({currentProduct.reviews})
            </span>
          </div>

          {/* Price */}
          <p className="text-green-400 text-2xl font-bold mt-3">
            ${currentProduct.price?.toFixed(2)}
          </p>

          {/* Category Tag */}
          <p className="mt-2 text-xs bg-white/20 px-3 py-1 rounded-full inline-block">
            {currentProduct.category}
          </p>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {carouselProducts.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevProduct}
          className="absolute top-1/2 -translate-y-1/2 left-4 p-2 bg-white/30 rounded-full hover:bg-white/50 transition"
        >
          <ArrowLeft className="w-5 h-5 text-black" />
        </button>
        <button
          onClick={nextProduct}
          className="absolute top-1/2 -translate-y-1/2 right-4 p-2 bg-white/30 rounded-full hover:bg-white/50 transition"
        >
          <ArrowRight className="w-5 h-5 text-black" />
        </button>
      </div>
    </section>
  );
};

export default Home;



// import React, { useEffect, useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "Mens Casual Slim Fit",
//     price: 15.99,
//     rating: 2,
//     reviews: 430,
//     category: "men's clothing",
//     image: "/assets/images/shirt.png", // update with Axios using fetch
//   },
//   {
//     id: 2,
//     name: "Premium Sneakers",
//     price: 49.99,
//     rating: 4,
//     reviews: 820,
//     category: "shoes",
//     image: "/assets/images/shoes.png",
//   },
//   {
//     id: 3,
//     name: "Smart Watch Series 5",
//     price: 199.99,
//     rating: 5,
//     reviews: 1200,
//     category: "electronics",
//     image: "/assets/images/watch.png",
//   },
// ];

// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); 
//   const navigate=useNavigate(); //navigate hook
//   // goto the next product
//   const nextProduct = () => {
//     setCurrentIndex((prev) => (prev + 1) % products.length);
//   };
// // go to previous product
//   const prevProduct = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? products.length - 1 : prev - 1
//     );
//   };
// // auto-slide every 2sec
// useEffect( ()=>{
//   const interval=setInterval(()=>{
//     nextProduct();
//   }, 2000);
  
//   //clean up interval on unmount
//   return()=>clearInterval(interval);

// },[currentIndex] ) // Dependency ensures it smoothly moves forward

// const currentProduct = products[currentIndex];

//   return (
//     <section className="min-h-screen flex flex-col rounded-2xl md:flex-row items-center justify-between px-6 md:px-16 bg-gradient-to-br from-blue-800 via-purple-600 to-pink-500 text-white">
//       {/* Left Section */}
//       <div className="max-w-lg space-y-6 text-center md:text-left">
//         <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm inline-block">
//           🎉 New arrivals every week
//         </span>

//         <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//           Welcome to B-Shop
//         </h1>

//         <p className="text-lg text-gray-100">
//           Discover amazing products at unbeatable prices with lightning-fast
//           delivery and exceptional customer service.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//           <button 
//           onClick={()=> navigate("/products")}
//           className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
//             Shop Now →
//           </button>
//           <button 
//           onClick={()=> navigate("/categories")}
//           className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition">
//             Browse Categories
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="flex gap-10 pt-6 justify-center md:justify-start">
//           <div className="text-center">
//             <p className="text-2xl font-bold">50K+</p>
//             <p className="text-sm">Happy Customers</p>
//           </div>
//           <div className="text-center">
//             <p className="text-2xl font-bold">1M+</p>
//             <p className="text-sm">Products Sold</p>
//           </div>
//           <div className="text-center">
//             <p className="text-2xl font-bold">50+</p>
//             <p className="text-sm">Countries</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Product Carousel */}
//       <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
//         <div className="bg-white/10 rounded-2xl p-8 text-center shadow-lg">
//           <img
//             src={currentProduct.image}
//             alt={currentProduct.name}
//             className="w-64 mx-auto"
//           />
//           <h3 className="text-xl mt-4 font-semibold text-white">
//             {currentProduct.name}
//           </h3>

//           {/* Ratings */}
//           <div className="flex items-center justify-center gap-1 mt-2">
//             {Array.from({ length: 5 }).map((_, i) => (
//               <span
//                 key={i}
//                 className={`text-lg ${
//                   i < currentProduct.rating ? "text-yellow-400" : "text-gray-400"
//                 }`}
//               >
//                 ★
//               </span>
//             ))}
//             <span className="ml-2 text-gray-300 text-sm">
//               ({currentProduct.reviews})
//             </span>
//           </div>

//           {/* Price */}
//           <p className="text-green-400 text-2xl font-bold mt-3">
//             ${currentProduct.price.toFixed(2)}
//           </p>

//           {/* Category Tag */}
//           <p className="mt-2 text-xs bg-white/20 px-3 py-1 rounded-full inline-block">
//             {currentProduct.category}
//           </p>

//           {/* Carousel Dots */}
//           <div className="flex justify-center gap-2 mt-4">
//             {products.map((_, index) => (
//               <span
//                 key={index}
//                 className={`w-3 h-3 rounded-full ${
//                   index === currentIndex ? "bg-white" : "bg-gray-400"
//                 }`}
//               ></span>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevProduct}
//           className="absolute top-1/2 -translate-y-1/2 left-4 p-2 bg-white/30 rounded-full hover:bg-white/50 transition"
//         >
//           <ArrowLeft className="w-5 h-5 text-black" />
//         </button>
//         <button
//           onClick={nextProduct}
//           className="absolute top-1/2 -translate-y-1/2 right-4 p-2 bg-white/30 rounded-full hover:bg-white/50 transition"
//         >
//           <ArrowRight className="w-5 h-5 text-black" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Home;
