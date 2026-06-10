const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, getCategories } = require('../controllers/productController');

// GET all products with optional filters
router.get('/', getAllProducts);

// GET all categories (must come before /:id route)
router.get('/categories', getCategories);

// GET product by ID
router.get('/:id', getProductById);

module.exports = router;
