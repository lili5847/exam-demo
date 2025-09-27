import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // track loading
  const [error, setError] = useState(null);     // track error

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Products</h2>

      {/* Error State */}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? // SKELETON PLACEHOLDERS
            Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 shadow animate-pulse"
              >
                <div className="w-full h-40 bg-gray-300 rounded-md"></div>
                <div className="h-4 bg-gray-300 rounded mt-3 w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded mt-2 w-1/3"></div>
              </div>
            ))
          : // REAL DATA
            products.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl p-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain rounded-md"
                />
                <h3 className="mt-3 text-sm font-medium">{product.title}</h3>
                <p className="text-gray-600 mt-1">${product.price}</p>
                <p className="text-yellow-500 mt-1">⭐ {product.rating?.rate}</p>
              </div>
            ))}
      </div>
    </div>
  );
}
