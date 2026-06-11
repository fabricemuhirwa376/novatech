import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Star, Truck, Shield, RefreshCw, Headphones } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api';

const categories = [
  { name: 'Smartphones', icon: '📱', bg: 'bg-blue-50', border: 'border-blue-200' },
  { name: 'Laptops', icon: '💻', bg: 'bg-purple-50', border: 'border-purple-200' },
  { name: 'Audio', icon: '🎧', bg: 'bg-yellow-50', border: 'border-yellow-200' },
  { name: 'Monitors', icon: '🖥️', bg: 'bg-red-50', border: 'border-red-200' },
  { name: 'Accessories', icon: '🖱️', bg: 'bg-green-50', border: 'border-green-200' },
  { name: 'Tablets', icon: '📟', bg: 'bg-pink-50', border: 'border-pink-200' },
];

const badges = [
  { icon: <Truck size={28} className="text-green-600" />, title: 'Free Shipping', desc: 'On orders over 50,000 RWF' },
  { icon: <Shield size={28} className="text-green-600" />, title: 'Secure Payment', desc: 'Your transactions are protected' },
  { icon: <RefreshCw size={28} className="text-green-600" />, title: 'Easy Returns', desc: '30-day return policy' },
  { icon: <Headphones size={28} className="text-green-600" />, title: '24/7 Support', desc: 'We are here to help anytime' },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`${API_BASE_URL}/products`)
      .then(res => setProducts(res.data.slice(0, 8)))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Banner */}
      <div
        className="relative w-full h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Rwanda's #1 Electronics Store
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Premium gadgets delivered to your door in Kigali
          </p>
          <Link
            to="/products"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-lg text-lg transition duration-200 shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Flash Sale Banner */}
      <div className="bg-red-600 text-white text-center py-3 font-bold text-lg tracking-wide">
        🔥 FLASH SALE — Up to 40% OFF on selected items! Limited time only.
      </div>

      {/* Trust Badges */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              {b.icon}
              <div>
                <p className="font-semibold text-gray-900 text-sm">{b.title}</p>
                <p className="text-gray-500 text-xs">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/products?category=${cat.name}`}
              className={`${cat.bg} ${cat.border} border-2 rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md transition`}
            >
              <span className="text-4xl">{cat.icon}</span>
              <span className="text-sm font-semibold text-gray-700 text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link to="/products" className="text-green-600 hover:underline font-medium">
            View All →
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-green-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-xl shadow hover:shadow-lg transition group">
                <Link to={`/products/${product._id}`}>
                  <div className="relative overflow-hidden rounded-t-xl bg-gray-100 h-48">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400?text=${encodeURIComponent(product.name)}`;
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded font-bold">
                      NEW
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                    <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex text-yellow-400 text-xs mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <p className="text-green-600 font-bold text-lg">
                      RWF {product.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
                <div className="px-4 pb-4">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Banner */}
      <div
        className="relative mt-10 h-48 flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">New Arrivals Every Week</h2>
          <Link to="/products" className="bg-white text-green-700 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Explore Now
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;