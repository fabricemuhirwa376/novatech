import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Laptop, Tv, Headphones, Zap, Shield } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api';

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/products`);
      setProducts(response.data.slice(0, 6));
      setError(null);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Map categories to icons
  const getCategoryIcon = (category) => {
    const iconMap = {
      'Phones': <Smartphone size={32} />,
      'Laptops': <Laptop size={32} />,
      'TVs': <Tv size={32} />,
      'Audio': <Headphones size={32} />,
      'Accessories': <Zap size={32} />,
    };
    return iconMap[category] || <Shield size={32} />;
  };

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-600 to-accent-700 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to NovaTech RW</h1>
          <p className="text-lg md:text-xl text-green-100 mb-8">
            Premium Electronics for Modern Life - Find Everything You Need
          </p>
          <button
            onClick={() => navigate('/products')}
            className="bg-white hover:bg-gray-100 text-accent-600 font-bold py-3 px-8 rounded-lg transition duration-200 text-lg"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="card p-6 text-center hover:shadow-lg hover:border-accent-600 transition duration-200 group"
            >
              <div className="text-accent-600 mb-3 flex justify-center group-hover:scale-110 transition transform">
                {getCategoryIcon(category)}
              </div>
              <h3 className="font-semibold text-sm text-gray-900 group-hover:text-accent-600 transition">
                {category}
              </h3>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Featured Products</h2>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card h-80 bg-gray-200 animate-pulse" />
              ))}
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-800 p-4 rounded-lg text-center">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product._id}
                  onClick={() => handleProductClick(product._id)}
                >
                  <ProductCard product={product} onClick={() => handleProductClick(product._id)} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-accent-600 text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
              <p className="text-green-100">
                Free shipping on orders over $50
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
              <p className="text-green-100">
                Your transactions are protected
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-green-100">
                We're here to help anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
