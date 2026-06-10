# NovaTech RW Frontend - React E-Commerce Application

A modern, responsive React e-commerce frontend for NovaTech RW electronics shop built with:
- React 19
- React Router 7
- Tailwind CSS
- Axios
- Vite

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   
   Create a `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📚 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar with cart icon
│   │   └── ProductCard.jsx      # Reusable product card component
│   ├── context/
│   │   └── CartContext.jsx      # Cart state management
│   ├── pages/
│   │   ├── Home.jsx             # Home page with hero and featured products
│   │   ├── Products.jsx         # Products listing with filters
│   │   ├── ProductDetail.jsx    # Single product detail page
│   │   ├── Cart.jsx             # Shopping cart page
│   │   ├── Checkout.jsx         # Checkout form page
│   │   └── OrderConfirmation.jsx# Order success page
│   ├── App.jsx                  # Main app with routes
│   ├── main.jsx                 # Entry point with CartProvider
│   └── index.css                # Tailwind styles
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
├── package.json                 # Dependencies
└── index.html                   # HTML template
```

## 🎨 Features

### Pages

#### Home (`/`)
- Hero banner with call-to-action
- Featured products grid
- Category browsing
- Feature highlights section

#### Products (`/products`)
- Full product listing
- Search functionality (case-insensitive)
- Category filtering
- Product cards with images, prices, and stock info
- Add to Cart buttons

#### Product Detail (`/products/:id`)
- Large product image
- Detailed description
- Price and stock information
- Quantity selector
- Add to Cart functionality
- Product features and details

#### Shopping Cart (`/cart`)
- All items currently in cart
- Quantity controls (increase/decrease)
- Remove item functionality
- Item subtotals
- Order summary with total
- Proceed to Checkout button
- Continue Shopping button
- Empty cart state

#### Checkout (`/checkout`)
- Customer information form
  - Full Name (required)
  - Email (required)
  - Phone (required)
  - Address (required)
- Order summary with all items
- Automatic customer creation or reuse
- Place Order button
- Real-time error handling

#### Order Confirmation (`/order-confirmation/:orderId`)
- Success message
- Order ID display
- Order date and status
- Total amount
- Order items with quantities
- Customer delivery information
- What's next information
- Links back to home and products

### Components

#### Navbar
- Logo "NovaTech RW"
- Navigation links (Home, Products)
- Cart icon with item count badge
- Responsive mobile menu
- Sticky navigation

#### ProductCard
- Product image with placeholder fallback
- Product name and category
- Price display
- Stock information
- Add to Cart button with out-of-stock handling

### Context & State Management

#### CartContext
- `cartItems` - Array of products in cart
- `addToCart(product)` - Add product to cart
- `removeFromCart(productId)` - Remove product from cart
- `updateQuantity(productId, quantity)` - Update item quantity
- `clearCart()` - Clear entire cart
- `cartTotal` - Calculate total price
- `cartItemsCount` - Get total items count

**Features:**
- Persists cart to localStorage
- Automatic quantity increment when adding duplicate items
- Prevents quantity from going below 1

## 🎨 Design & Styling

### Color Scheme
- **Primary Green**: `#22c55e` (emerald for actions)
- **Dark**: `#1f2937` to `#111827` (dark backgrounds)
- **Accent Red**: `#ef4444` (for alerts, badges)

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Fully responsive across all screen sizes

### Components
- Cards with hover effects
- Buttons with transitions
- Input fields with focus states
- Loading spinners
- Error messages with icons

## 🔌 API Integration

Base URL: `http://localhost:5000/api`

### Endpoints Used

**GET /products**
- Fetch all products
- Query params: `category`, `search`

**GET /products/:id**
- Fetch single product details

**GET /products/categories**
- Fetch all available categories

**POST /customers**
- Create new customer

**POST /orders**
- Create order with customer and items

## 💾 Local Storage

### Cart Persistence
- Cart items are automatically saved to localStorage
- Key: `cart`
- Restored on page reload

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚙️ Configuration Files

### tailwind.config.js
- Extends theme with custom colors
- Configures primary green and dark color palettes
- Includes form plugin for styling

### postcss.config.js
- Includes Tailwind CSS and Autoprefixer

### vite.config.js
- React plugin for JSX transformation
- Configured for development and production

## 🚀 Deployment

### Build Optimization
```bash
npm run build
```
Creates optimized production build in `dist/` folder

### Deployment Steps
1. Run `npm run build`
2. Deploy `dist/` folder to your hosting service
3. Configure environment variables on server
4. Ensure backend API is accessible

### Environment Variables for Production
- `VITE_API_URL` - Backend API base URL (default: http://localhost:5000/api)

## 🛠️ Development Commands

```bash
# Start development server with HMR
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## 📦 Dependencies

- **react** (^19.2.6) - UI library
- **react-dom** (^19.2.6) - React DOM rendering
- **react-router-dom** (^7.17.0) - Routing library
- **axios** (^1.17.0) - HTTP client
- **tailwindcss** (^3.4.1) - Utility-first CSS
- **lucide-react** (^0.344.0) - Icon library

## 🔒 Security

- Sensitive data (cart) stored in localStorage only
- No hardcoded API credentials
- Environment variables for API configuration
- Input validation on forms
- CORS handled by backend

## 🐛 Troubleshooting

### API Connection Issues
```
Error: Failed to fetch products
→ Ensure backend API is running on http://localhost:5000
→ Check VITE_API_URL in .env file
```

### Cart Not Persisting
```
→ Check browser localStorage is enabled
→ Clear localStorage and refresh
→ localStorage key: 'cart'
```

### Images Not Loading
```
→ Check imageUrl field in product data
→ Placeholder images are used as fallback
```

### Vite Dev Server Not Starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📖 Usage Examples

### Adding Item to Cart
```javascript
import { useCart } from './context/CartContext';

function MyComponent() {
  const { addToCart } = useCart();
  
  const handleAddToCart = (product) => {
    addToCart(product);
  };
}
```

### Using Cart Total
```javascript
const { cartTotal } = useCart();
const totalPrice = cartTotal.toFixed(2);
```

### Updating Quantity
```javascript
const { updateQuantity } = useCart();
updateQuantity(productId, 5); // Set quantity to 5
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

MIT

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review API responses in browser console
3. Ensure backend API is running and accessible
4. Check environment variables configuration

---

**Happy Shopping! 🛍️**
