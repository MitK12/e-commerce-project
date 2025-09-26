import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "electronics",
      title: "Electronics",
      description: "Discover amazing electronics products",
      initial: "E",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "jewelery",
      title: "Jewelery",
      description: "Discover amazing jewelery products",
      initial: "J",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: "mens-clothing",
      title: "Men's Clothing",
      description: "Discover amazing men's clothing products",
      initial: "M",
      color: "bg-green-100 text-green-600",
    },
    {
      id: "womens-clothing",
      title: "Women's Clothing",
      description: "Discover amazing women's clothing products",
      initial: "W",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-green-500">
          Product Categories
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our wide range of product categories and find exactly what you're looking for
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group bg-white dark:bg-gray-50 rounded-2xl shadow-md hover:shadow-xl p-6 transition-transform transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            onClick={() => navigate(`/products/category/${category.id}`)}
          >
            {/* Category Icon / Initial */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 ${category.color}`}
            >
              {category.initial}
            </div>

            {/* Category Content */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-purple-500 mb-2">
              {category.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-500 flex-grow">
              {category.description}
            </p>

            {/* Explore Button */}
            <div className="mt-6 flex items-center justify-between">
              <span className="text-purple-600 font-medium group-hover:underline">
                Explore
              </span>
              <ArrowRight className="text-purple-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* View All Products */}
      <div className="mt-16 text-center bg-gradient-to-br from-orange-500 to-blue-500 pt-6 pb-6 rounded-2xl">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Can't find what you're looking for?
        </p>
        <button
          onClick={() => navigate("/products")}
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
        >
          View All Products
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Categories;



// const Categories = () => {
//   const categories = [
//     { name: "Electronics", image: "https://via.placeholder.com/300" },
//     { name: "Fashion", image: "https://via.placeholder.com/300" },
//     { name: "Home Appliances", image: "https://via.placeholder.com/300" },
//     { name: "Beauty", image: "https://via.placeholder.com/300" },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
//           >
//             <img
//               src={category.image}
//               alt={category.name}
//               className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
//             />
//             <div className="p-4 text-center">
//               <h3 className="font-semibold text-gray-800">{category.name}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;
