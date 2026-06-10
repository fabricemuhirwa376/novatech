import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, AlertCircle } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/products/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Product not found');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-accent-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/products')}
          className="flex items-center gap-2 text-accent-600 hover:text-accent-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Products
        </button>
        <div className="bg-red-100 text-red-800 p-6 rounded-lg flex items-center gap-3">
          <AlertCircle size={24} />
          <span>{error}</span>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/products')}
          className="flex items-center gap-2 text-accent-600 hover:text-accent-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="card p-8 flex items-center justify-center">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full max-h-96 object-contain"
              onError={(e) => {
                e.target.src =
                  'https://via.placeholder.com/400?text=' +
                  encodeURIComponent(product.name);
              }}
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <span className="text-sm bg-accent-100 text-accent-700 px-3 py-1 rounded-full inline-block">
              {product.category}
            </span>

            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg">{product.description}</p>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <div className="text-4xl font-bold text-accent-600 mb-2">
                ${product.price.toFixed(2)}
              </div>
              <p className="text-gray-600">Stock Available: {product.stock} units</p>
              {product.stock === 0 && (
                <p className="text-red-600 font-semibold mt-2">Out of Stock</p>
              )}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-gray-900">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={product.stock === 0}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded-lg disabled:opacity-50"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.min(product.stock, Math.max(1, parseInt(e.target.value) || 1)))
                  }
                  min="1"
                  max={product.stock}
                  disabled={product.stock === 0}
                  className="w-20 text-center border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-600 disabled:opacity-50"
                />
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={product.stock === 0}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded-lg disabled:opacity-50"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg py-3"
              >
                <ShoppingCart size={20} />
                Add {quantity} to Cart
              </button>

              {addedToCart && (
                <div className="bg-accent-100 text-accent-800 p-4 rounded-lg text-center font-semibold">
                  ✓ Added to cart!
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <h3 className="font-semibold text-gray-900">Product Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Quality Guaranteed</li>
                <li>✓ 30-Day Return Policy</li>
                <li>✓ Fast & Free Shipping in Rwanda</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;