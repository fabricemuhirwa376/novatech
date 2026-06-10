require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/db/connect');

// Import routes
const productsRoute = require('./src/routes/products');
const customersRoute = require('./src/routes/customers');
const ordersRoute = require('./src/routes/orders');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/products', productsRoute);
app.use('/api/customers', customersRoute);
app.use('/api/orders', ordersRoute);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'NovaTech RW API is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`NovaTech RW API server running on port ${PORT}`);
});
