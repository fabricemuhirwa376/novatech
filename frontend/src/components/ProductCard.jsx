import { useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { ShoppingCart as CartIcon } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api';

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    setLoading(true);
    try {
      // Verify product exists in backend
      await axios.get(`${API_BASE_URL}/products/${product._id}`);
      addToCart(product);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClick}
      className="bg-white overflow-hidden flex flex-col h-full cursor-pointer group shadow-md hover:shadow-xl transition duration-300 rounded-lg"
    >
      {/* Product Image - Full Top Half */}
      <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition transform duration-300"
          onError={(e) => {
            e.target.src =
              'https://via.placeholder.com/300?text=' + encodeURIComponent(product.name);
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category Badge */}
        {product.category && (
          <div className="mb-3">
            <span className="text-xs text-accent-600 bg-green-50 px-3 py-1 rounded-full inline-block font-medium">
              {product.category}
            </span>
          </div>
        )}

        {/* Product Name */}
        <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Product Description */}
        {product.description && (
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price and Stock */}
        <div className="mt-auto pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-accent-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-500 font-medium">
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>

          {/* Add to Cart Button - Full Width Green */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0 || loading}
            className="w-full bg-accent-600 hover:bg-accent-700 text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent-600"
          >
            <CartIcon size={16} />
            {loading ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
