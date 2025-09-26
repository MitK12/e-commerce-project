import { Users, ShoppingBag, Globe, Award, Star, TruckIcon, RepeatIcon, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 to-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About B-Shop</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Your trusted partner in online shopping, delivering quality products
            and exceptional service since 2014.
          </p>
          <div className="flex justify-center gap-4">
            <button 
                onClick={() => navigate("/products")}
                className="bg-white text-purple-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
              Shop Now
            </button>
            <button 
                onClick={() => navigate("/contact")}
                className="border border-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-purple-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <Users className="w-10 h-10 mx-auto text-purple-600" />
          <h3 className="text-2xl font-bold mt-3">50K+</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div>
          <ShoppingBag className="w-10 h-10 mx-auto text-purple-600" />
          <h3 className="text-2xl font-bold mt-3">1M+</h3>
          <p className="text-gray-600">Products Sold</p>
        </div>
        <div>
          <Globe className="w-10 h-10 mx-auto text-purple-600" />
          <h3 className="text-2xl font-bold mt-3">50+</h3>
          <p className="text-gray-600">Countries Served</p>
        </div>
        <div>
          <Award className="w-10 h-10 mx-auto text-purple-600" />
          <h3 className="text-2xl font-bold mt-3">10+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
      </section>

      {/* Story + Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Our Story */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2014, B-Shop started as a small online store with a
            simple mission: to make quality products accessible to everyone,
            everywhere.
          </p>
          <p className="text-gray-700 mb-4">
            What began as a passion project has grown into a global e-commerce
            platform serving millions of customers across 50+ countries. We've
            built our success on the foundation of trust, quality, and
            exceptional customer service.
          </p>
          <p className="text-gray-700">
            Today, we continue to innovate and expand our product range while
            maintaining our core values of transparency, reliability, and
            customer satisfaction.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="bg-gradient-to-r from-purple-700 to-pink-500 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p className="mb-6">
            To provide exceptional online shopping experiences through
            innovative technology, quality products, and outstanding customer
            service.
          </p>
          <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
          <p>
            To become the world's most trusted and customer-centric e-commerce
            platform, making quality products accessible to everyone.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 mb-12">
            The principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Value Card */}
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <Users className="w-10 h-10 mx-auto text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Customer First</h3>
              <p className="text-gray-600 text-sm">
                We put our customers at the heart of everything we do, ensuring
                their satisfaction is our top priority.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <ShoppingBag className="w-10 h-10 mx-auto text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Trust & Security</h3>
              <p className="text-gray-600 text-sm">
                Your data and payments are protected with industry-leading
                security measures.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <Award className="w-10 h-10 mx-auto text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We continuously innovate to bring you the latest products and
                cutting-edge shopping experiences.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <Globe className="w-10 h-10 mx-auto text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                Serving customers worldwide with fast, reliable shipping and
                localized support.
              </p>
            </div>
          </div>
        </div>
      </section>
       {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className=" max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose B-Shop? </h2>
          <p className="text-gray-600 mb-12">We're committed to providing the best shopping experience </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            {/* Shipping Card */}
            <div className=" bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              < TruckIcon className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">
                Free shipping on orders over $100 with fast and reliable delivery worldwide.
              </p>
            </div>

            <div className=" bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <RepeatIcon className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">
                Your payment information is protected with bank-level security and encryption.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <ShieldCheck className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Ease Return</h3>
              <p className="text-gray-600 text-sm">
               30-day hassle-free return policy with free return shipping for your convenience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <Star className="w-10 h-10 mx-auto text-blue-600  mb-4" />
              <h3 className="font-semibold text-lg mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm">
                We only sell high-quality products from trusted brands with satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>
       {/* Ready to Shoping */}

       <section className="relative bg-gradient-to-r from-blue-700 to-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-xl md:text-4xl font-bold mb-4">Ready to Start Shopping? </h1>
          <p className="text-sm md:text-xl mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers and discover amazing products today
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-purple-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
              Browse Products
            </button>
            <button className="border border-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-purple-700 transition">
              Explore Categories
            </button>
          </div>
        </div>
      </section>
     


    </div>
  );
};

export default About;







// const About = () => {
//   const team = [
//     { name: "John Doe", role: "CEO", image: "https://via.placeholder.com/150" },
//     { name: "Jane Smith", role: "Designer", image: "https://via.placeholder.com/150" },
//     { name: "Alex Brown", role: "Developer", image: "https://via.placeholder.com/150" },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
//       {/* Company Info */}
//       <section className="text-center space-y-4">
//         <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
//         <p className="max-w-2xl mx-auto text-gray-600">
//           ShopEase is your trusted e-commerce platform providing top-quality
//           products at unbeatable prices. Our mission is to make shopping
//           seamless and enjoyable for everyone.
//         </p>
//       </section>

//       {/* Team Section */}
//       <section>
//         <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
//           Meet Our Team
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {team.map((member, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center border rounded-lg p-6 shadow hover:shadow-lg transition"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-24 h-24 rounded-full mb-4"
//               />
//               <h4 className="font-semibold text-gray-800">{member.name}</h4>
//               <p className="text-gray-500 text-sm">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
