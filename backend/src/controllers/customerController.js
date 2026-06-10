const Customer = require('../models/Customer');

// Create a new customer
const createCustomer = async (req, res) => {
  try {
    const { fullName, email, phone, address } = req.body;

    // Validate required fields
    if (!fullName || !email) {
      return res.status(400).json({ error: 'fullName and email are required' });
    }

    const customer = new Customer({
      fullName,
      email,
      phone: phone || '',
      address: address || ''
    });

    const savedCustomer = await customer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error('Error creating customer:', error);
    if (error.code === 11000) {
      return res.status(409).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: error.message || 'Failed to create customer' });
  }
};

module.exports = {
  createCustomer
};
