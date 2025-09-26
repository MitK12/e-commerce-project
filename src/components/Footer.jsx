import { Facebook, Twitter, Instagram, Github, ShoppingCart, Phone, Mail, MapPin } from "lucide-react";
import StayUpdated from "../support/StayUpdated";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto">
        {/* Main content section */}
        <div className="  flex flex-col md:flex-row justify-between mb-8">
          {/* Brand description */}

          <div className="mb-6 mt-6 md:mb-0 md:w-1/3">
            <h2 className="text-lg font-semibold mb-2 text-blue-500">
              <ShoppingCart />
            </h2>
            <p className="text-sm mb-4">
              for quality products at great prices. Shop with confidence and enjoy fast, reliable delivery.
            </p>
            
            {/* Contact information */}
            <div className="space-y-1 text-sm">
              <a 
                href="mailto:support@birhanu.et" 
                className="block hover:text-blue-600 transition-colors"
              >
              <p className="flex"><Mail className="text-green-600 pr-2"/>support@YoungCoders.et
              </p>

              </a>
              <a 
                href="tel:+2519999999" 
                className="block hover:text-blue-600 transition-colors"
              >
              <p className="flex">  <Phone className="text-green-600 pr-2"/> +251 999 9999</p>

              </a>
              <a 
                href="https://www.addisababa.com" 
                className="block hover:text-blue-600 transition-colors"
              >
               <p className="flex"> < MapPin  className="text-green-600 pr-2"/> Addis Ababa, Ethiopia</p>
              </a>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:w-2/3">
            {/* Shop column */}
            <div>
              <h3 className="font-semibold mb-3 mt-6">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Clothing</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Books</a></li>
              </ul>
            </div>
            
            {/* Support column */}
            <div>
              <h3 className="font-semibold mb-3 mt-6">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Returns</a></li>
              </ul>
            </div>
            
            {/* Company column */}
            <div>
              <h3 className="font-semibold mb-3 mt-6">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* stay updated*/}
      <StayUpdated />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        {/* Divider */}

        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} B-Shop. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className=" flex justify-center space-x-6 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            aria-label="Facebook"

          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
