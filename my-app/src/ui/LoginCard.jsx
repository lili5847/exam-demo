import React, { useState } from "react";

function LoginCard({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle login/registration logic
    console.log(`${isLogin ? "Login" : "Register"} with:`, { email, password });
    // For demonstration purposes, let's close the modal after submission
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50"
      onDoubleClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-2xl shadow-lg w-96"
        onDoubleClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {isLogin ? "Login" : "Register"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border p-3 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          )}
          
          <button
            type="submit"
            className="w-full bg-pink-700 hover:bg-pink-800 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-pink-700 hover:text-pink-900 font-medium"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;