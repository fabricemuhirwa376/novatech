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
      className="card overflow-hidden flex flex-col h-full cursor-pointer group"
    >
      {/* Product Image */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden group-hover:bg-gray-200 transition">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition transform duration-200"
          onError={(e) => {
            e.target.src =
              'https://via.placeholder.com/300?text=' + encodeURIComponent(product.name);
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-3 flex flex-col flex-grow">
        {/* Category Badge */}
        {product.category && (
          <div className="mb-2">
            <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded inline-block">
              {product.category}
            </span>
          </div>
        )}

        {/* Product Name */}
        <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>

        {/* Product Description */}
        {product.description && (
          <p className="text-xs text-gray-600 mb-2 line-clamp-1">
            {product.description}
          </p>
        )}

        {/* Price and Stock */}
        <div className="mt-auto pt-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xl font-bold text-accent-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-600">
              {product.stock > 0 ? `${product.stock} left` : 'Out of stock'}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0 || loading}
            className="w-full btn-primary flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
