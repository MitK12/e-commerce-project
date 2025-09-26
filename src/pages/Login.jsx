import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill in both fields.");
      return;
    }

    // Demo login validation
    if (
      formData.email === "demo@example.com" &&
      formData.password === "password123"
    ) {
      alert("🎉 Logged in successfully!");
      setError("");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-2">
          Sign in to your account
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
          Or{" "}
          <a
            href="/signup"
            className="text-purple-600 hover:underline font-medium"
          >
            create a new account
          </a>
        </p>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email address
            </label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-900 dark:text-white"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-900 dark:text-white"
                required
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              Remember me
            </label>
            <a
              href="/forgot-password"
              className="text-sm text-purple-600 hover:underline"
            >
              Forgot your password?
            </a>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm font-medium text-center">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-300">
          <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">
            Demo Credentials:
          </h3>
          <p>
            <span className="font-medium">Email:</span> demo@example.com
          </p>
          <p>
            <span className="font-medium">Password:</span> password123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;




// const Login = () => {
//   return (
//     <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
//       <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
//         <form className="space-y-5">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
//             Login
//           </button>
//         </form>
//         <p className="text-sm text-gray-600 text-center mt-4">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-purple-600 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
