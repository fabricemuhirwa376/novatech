# NovaTech RW - Complete E-Commerce Application

A full-stack e-commerce application for an electronics shop called NovaTech RW, built with modern technologies.

## 🏗️ Architecture Overview

```
NovaTech RW
├── Frontend (React)
│   ├── Components & Pages
│   ├── React Router Navigation
│   ├── Cart Context State Management
│   └── Tailwind CSS Styling
│
└── Backend (Node.js/Express)
    ├── MongoDB Database
    ├── Mongoose ODM
    ├── RESTful API
    └── Express Server
```

## 📋 Technology Stack

### Frontend
- **Framework**: React 19
- **Routing**: React Router 7
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Context API

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5
- **Database**: MongoDB
- **ODM**: Mongoose
- **Environment**: dotenv
- **CORS**: Enabled for frontend

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### 1. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment
# Create/update .env file with:
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/novatech
NODE_ENV=development

# Seed database with sample data (optional)
npm run seed

# Start server
npm run dev    # development with nodemon
npm start      # production
```

**Backend runs on**: `http://localhost:5000`

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Configure environment
# Create .env file with:
VITE_API_URL=http://localhost:5000/api

# Start development server
npm run dev

# Build for production
npm run build
```

**Frontend runs on**: `http://localhost:5173`

## 📁 Project Structure

### Backend
```
backend/
├── src/
│   ├── controllers/
│   │   ├── productController.js      # Product queries & filtering
│   │   ├── customerController.js     # Customer creation
│   │   └── orderController.js        # Order processing
│   ├── models/
│   │   ├── Product.js                # Product schema
│   │   ├── Customer.js               # Customer schema
│   │   └── Order.js                  # Order schema with items
│   ├── routes/
│   │   ├── products.js               # Product endpoints
│   │   ├── customers.js              # Customer endpoints
│   │   └── orders.js                 # Order endpoints
│   ├── db/
│   │   └── connect.js                # MongoDB connection
├── server.js                          # Express app & server
├── seed.js                            # Database seeding script
├── .env                               # Configuration
└── package.json                       # Dependencies
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Navigation & cart
│   │   └── ProductCard.jsx           # Product display
│   ├── context/
│   │   └── CartContext.jsx           # Cart state management
│   ├── pages/
│   │   ├── Home.jsx                  # Landing page
│   │   ├── Products.jsx              # Products listing
│   │   ├── ProductDetail.jsx         # Single product
│   │   ├── Cart.jsx                  # Shopping cart
│   │   ├── Checkout.jsx              # Order form
│   │   └── OrderConfirmation.jsx     # Success page
│   ├── App.jsx                       # Router & main layout
│   ├── main.jsx                      # Entry point
│   └── index.css                     # Tailwind styles
├── tailwind.config.js                # Tailwind config
├── vite.config.js                    # Vite config
└── package.json                      # Dependencies
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Products
- `GET /products` - Get all products (with `category`, `search` params)
- `GET /products/:id` - Get single product
- `GET /products/categories` - Get all categories

### Customers
- `POST /customers` - Create new customer

### Orders
- `POST /orders` - Create order with items

## 🎨 Features

### Frontend
✅ Responsive design | ✅ Product search | ✅ Category filtering | ✅ Shopping cart | ✅ Checkout form | ✅ Order confirmation | ✅ Modern UI

### Backend
✅ MongoDB integration | ✅ Mongoose ODM | ✅ Stock management | ✅ Customer reuse | ✅ Input validation | ✅ Error handling | ✅ RESTful API

## 🛒 Shopping Flow

1. Browse products by category or search
2. View product details
3. Add items to cart (persists in localStorage)
4. Review cart and proceed to checkout
5. Enter customer information
6. Place order
7. View order confirmation

## 📚 Documentation

- **Backend**: See [Backend Documentation](./backend/MONGODB_README.md)
- **Frontend**: See [Frontend Documentation](./frontend/FRONTEND_README.md)
- **Migration**: See [Migration Guide](./backend/MIGRATION_GUIDE.md)

## 🚀 Deployment

### Backend
Deploy on Heroku, Railway, Render, or any Node.js hosting
```bash
npm start
```

### Frontend
Build and deploy to Vercel, Netlify, or GitHub Pages
```bash
npm run build
# Deploy dist/ folder
```

## 🔒 Security

- Environment variables for all sensitive data
- Input validation on all forms
- Email uniqueness enforcement
- CORS configuration
- No hardcoded credentials

## 📈 Future Enhancements

- Authentication & authorization
- Payment gateway integration
- Order history & tracking
- Product reviews & ratings
- Admin dashboard
- Email notifications
- Search indexing

## 📞 Troubleshooting

**Backend Connection Error**
→ Ensure MongoDB connection string is correct in .env

**Frontend API Error**
→ Check backend is running on localhost:5000
→ Verify VITE_API_URL in frontend .env

**Cart Not Persisting**
→ Enable localStorage in browser
→ Check browser console for errors

## 📄 License

MIT

---

**Ready to launch your e-commerce app!** 🚀