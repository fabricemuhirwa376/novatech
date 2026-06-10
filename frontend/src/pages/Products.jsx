import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Search, X } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api';

const Products = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || ''
  );
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, searchTerm]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = {};
      if (selectedCategory) {
        params.category = selectedCategory;
      }
      if (searchTerm) {
        params.search = searchTerm;
      }
      const response = await axios.get(`${API_BASE_URL}/products`, {
        params,
      });
      setProducts(response.data);
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

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    if (value) {
      navigate(`?search=${encodeURIComponent(value)}`);
    } else {
      navigate('/products');
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category) {
      navigate(`?category=${encodeURIComponent(category)}`);
    } else {
      navigate('/products');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="input-field pl-10"
            />
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:block ${showMobileFilters ? 'block' : 'hidden'}`}>
            <div className="card p-6 sticky top-20">
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h2 className="text-xl font-bold">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              <h3 className="font-bold text-lg mb-4 text-gray-900">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('')}
                  className={`w-full text-left px-4 py-2 rounded font-semibold transition ${
                    selectedCategory === ''
                      ? 'bg-accent-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-4 py-2 rounded font-semibold transition ${
                      selectedCategory === category
                        ? 'bg-accent-600 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {(selectedCategory || searchTerm) && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setSelectedCategory('');
                      setSearchTerm('');
                      navigate('/products');
                    }}
                    className="w-full btn-secondary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
              </h1>
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden btn-secondary flex items-center gap-2"
              >
                <Search size={18} />
                Filters
              </button>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="card h-80 bg-gray-200 animate-pulse" />
                ))}
              </div>
            ) : error ? (
              <div className="bg-red-100 text-red-800 p-4 rounded-lg text-center">
                {error}
              </div>
            ) : products.length === 0 ? (
              <div className="bg-gray-100 text-gray-700 p-8 rounded-lg text-center">
                <p className="text-lg font-semibold">No products found</p>
                <p className="text-gray-600">
                  {searchTerm
                    ? `No results for "${searchTerm}"`
                    : 'Try adjusting your filters'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product._id}
                    onClick={() => handleProductClick(product._id)}
                  >
                    <ProductCard
                      product={product}
                      onClick={() => handleProductClick(product._id)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
