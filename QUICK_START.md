# NovaTech RW - Developer Quick Reference

## 🚀 Quick Start (5 minutes)

```bash
# Terminal 1 - Backend
cd backend
npm install
npm run seed          # Optional: seed sample data
npm run dev          # Runs on http://localhost:5000

# Terminal 2 - Frontend  
cd frontend
npm install
npm run dev          # Runs on http://localhost:5173
```

Open **http://localhost:5173** in your browser!

---

## 📂 Key Files to Know

### Frontend
- `src/App.jsx` - Main routing setup
- `src/context/CartContext.jsx` - Cart state management
- `src/pages/Home.jsx` - Landing page with hero
- `src/pages/Products.jsx` - Product listing & search
- `src/pages/Cart.jsx` - Shopping cart
- `src/pages/Checkout.jsx` - Order form
- `src/index.css` - Tailwind styles

### Backend
- `server.js` - Express app entry
- `src/models/` - Mongoose schemas
- `src/controllers/` - Business logic
- `src/routes/` - API endpoints
- `seed.js` - Database seeding
- `.env` - Configuration

---

## 🔄 Common Tasks

### Add a New Page to Frontend

1. Create file in `src/pages/`
   ```jsx
   // src/pages/NewPage.jsx
   export default function NewPage() {
     return <div>New Page</div>;
   }
   ```

2. Add route in `src/App.jsx`
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```

3. Add link in `src/components/Navbar.jsx`
   ```jsx
   <Link to="/new-page">New Page</Link>
   ```

### Add Backend Validation

Update controller to validate input:
```javascript
if (!email || !email.includes('@')) {
  return res.status(400).json({ error: 'Invalid email' });
}
```

### Modify Product Fields

1. Update Mongoose schema in `src/models/Product.js`
2. Update controller queries in `src/controllers/productController.js`
3. Update frontend display in `src/components/ProductCard.jsx`

---

## 🎨 Color Reference

- **Primary Green**: `#22c55e` / `primary-600`
- **Dark**: `#1f2937` / `dark-800`
- **Light**: `#f3f4f6` / `dark-100`
- **Success**: `#10b981` / Green
- **Error**: `#ef4444` / Red

---

## 📦 Adding Dependencies

### Frontend
```bash
cd frontend
npm install package-name
# Update import in component
```

### Backend
```bash
cd backend
npm install package-name
# Update require in file
```

---

## 🧪 Testing Endpoints

### Using cURL

```bash
# Get all products
curl http://localhost:5000/api/products

# Get product by ID
curl http://localhost:5000/api/products/{productId}

# Get categories
curl http://localhost:5000/api/products/categories

# Create customer
curl -X POST http://localhost:5000/api/customers \
  -H "Content-Type: application/json" \
  -d '{"fullName":"John","email":"john@example.com","phone":"555-1234","address":"123 St"}'

# Create order
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -d '{"customer":{"fullName":"John","email":"john@example.com"},"items":[{"product":"{productId}","quantity":1,"unitPrice":99.99}]}'
```

### Using Postman
1. Import API endpoints
2. Set `http://localhost:5000/api` as base URL
3. Test each endpoint

---

## 🐛 Debug Mode

### Frontend
Check browser console:
- F12 or Right-click → Inspect
- Look for network requests and errors
- Check localStorage under Application tab

### Backend
```bash
# Check server logs in terminal
# Add console.log() to debug
console.log('Debug:', variable);
```

---

## 📊 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://...
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

---

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [Mongoose Docs](https://mongoosejs.com)
- [Express Docs](https://expressjs.com)

---

## 💡 Tips & Tricks

- **Hot Reload**: Changes auto-refresh during development
- **localStorage**: Cart persists across page reloads
- **Tailwind Classes**: Use class names directly (no CSS needed)
- **API Errors**: Check response in Network tab
- **MongoDB**: Use MongoDB Compass to view data

---

## ❌ Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port already in use | Kill process or change PORT in .env |
| Cannot connect to MongoDB | Check connection string in .env |
| 404 API endpoints | Ensure backend is running on :5000 |
| Cart not showing | Check localStorage in DevTools |
| Styles not applying | Clear browser cache (Ctrl+Shift+Delete) |

---

## 📈 Performance

- Images cached by browser
- Cart stored locally (no server round-trip)
- Lazy loading ready for products
- Tailwind CSS purges unused styles in build

---

## 🚀 Production Checklist

- [ ] Update MONGODB_URI to production cluster
- [ ] Set NODE_ENV=production
- [ ] Remove console.log() calls
- [ ] Test all API endpoints
- [ ] Run npm run build
- [ ] Verify images load correctly
- [ ] Test payment flow (if added)
- [ ] Add HTTPS certificate
- [ ] Set up email notifications
- [ ] Configure CORS for production domain

---

**Happy coding! 🎉**
