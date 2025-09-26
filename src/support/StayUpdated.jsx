import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

const StayUpdated = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("🎉 Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Subscribe to our newsletter and never miss out on the latest product updates,
          exclusive deals, and more! 

        </p>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="relative w-full sm:w-2/3">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            <Send size={18} />
            Subscribe
          </button>
        </form>

        {/* Feedback Message */}
        {message && (
          <p className="mt-4 text-sm text-green-600 dark:text-green-400">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default StayUpdated;
