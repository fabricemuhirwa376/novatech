import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Shipping from './pages/Shipping';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/shipping" element={<Shipping />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg text-accent-500 mb-4">NovaTech RW</h3>
                <p className="text-gray-400 text-sm">
                  Premium electronics for modern life
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link to="/" className="hover:text-accent-500 transition">Home</Link></li>
                  <li><Link to="/products" className="hover:text-accent-500 transition">Products</Link></li>
                  <li><Link to="/cart" className="hover:text-accent-500 transition">Cart</Link></li>
                  <li><Link to="/about" className="hover:text-accent-500 transition">About Us</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Support</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link to="/contact" className="hover:text-accent-500 transition">Contact Us</Link></li>
                  <li><Link to="/faq" className="hover:text-accent-500 transition">FAQ</Link></li>
                  <li><Link to="/shipping" className="hover:text-accent-500 transition">Shipping Info</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link to="/privacy" className="hover:text-accent-500 transition">Privacy</Link></li>
                  <li><Link to="/terms" className="hover:text-accent-500 transition">Terms</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
              <p>&copy; 2024 NovaTech RW. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
