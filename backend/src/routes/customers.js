const express = require('express');
const router = express.Router();
const { createCustomer } = require('../controllers/customerController');

// POST create a new customer
router.post('/', createCustomer);

module.exports = router;
