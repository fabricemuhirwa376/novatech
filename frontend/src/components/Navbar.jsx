import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { cartItems } = useCart();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const itemCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/products?search=${search}`);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-900 text-gray-300 text-sm py-2 px-4 flex justify-between">
        <span>📦 Free delivery in Kigali on orders above 50,000 RWF</span>
        <span><Phone size={14} className="inline mr-1" />+250 788 000 000</span>
      </div>

      {/* Middle bar */}
      <div className="bg-white shadow px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="bg-green-600 text-white font-bold px-2 py-1 rounded text-sm">NT</div>
          <span className="font-bold text-xl text-gray-900">NovaTech <span className="text-green-600">RW</span></span>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-2xl flex">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full border-2 border-green-600 rounded-l-lg px-4 py-2 outline-none"
          />
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-r-lg">
            <Search size={20} />
          </button>
        </form>

        <Link to="/cart" className="flex items-center gap-2 relative">
          <div className="relative">
            <ShoppingCart size={28} className="text-gray-700" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </div>
          <span className="text-gray-700 font-medium">Cart</span>
        </Link>
      </div>

      {/* Bottom green nav bar */}
      <div className="bg-green-600 text-white px-6 py-2 flex gap-6 text-sm font-medium overflow-x-auto">
        {[
          { label: 'Home', to: '/' },
          { label: 'All Products', to: '/products' },
          { label: 'Smartphones', to: '/products?category=Smartphones' },
          { label: 'Laptops', to: '/products?category=Laptops' },
          { label: 'Audio', to: '/products?category=Audio' },
          { label: 'Accessories', to: '/products?category=Accessories' },
          { label: 'About', to: '/about' },
          { label: 'Contact', to: '/contact' },
        ].map((item) => (
          <Link key={item.to} to={item.to} className="hover:text-green-200 whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;