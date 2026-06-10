const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/orderController');

// POST create a new order with customer and order items
router.post('/', createOrder);

module.exports = router;
