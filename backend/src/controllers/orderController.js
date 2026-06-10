const Order = require('../models/Order');
const Customer = require('../models/Customer');
const Product = require('../models/Product');

// Create a new order with customer and order items
const createOrder = async (req, res) => {
  try {
    const { customer, items } = req.body;

    // Validate required fields
    if (!customer || !items || items.length === 0) {
      return res.status(400).json({ error: 'customer and items are required' });
    }

    if (!customer.fullName || !customer.email) {
      return res.status(400).json({ error: 'Customer must have fullName and email' });
    }

    // Check if customer email already exists
    let existingCustomer = await Customer.findOne({ email: customer.email });

    if (!existingCustomer) {
      // Create new customer
      const newCustomer = new Customer({
        fullName: customer.fullName,
        email: customer.email,
        phone: customer.phone || '',
        address: customer.address || ''
      });
      existingCustomer = await newCustomer.save();
    }

    // Validate items and calculate total
    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
      if (!item.product || !item.quantity || !item.unitPrice) {
        return res.status(400).json({ error: 'Each item must have product, quantity, and unitPrice' });
      }

      // Validate product exists
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ error: `Product with ID ${item.product} not found` });
      }

      // Check stock availability
      if (product.stock < item.quantity) {
        return res.status(400).json({ error: `Insufficient stock for product ${product.name}` });
      }

      totalAmount += item.unitPrice * item.quantity;
      orderItems.push({
        product: item.product,
        quantity: item.quantity,
        unitPrice: item.unitPrice
      });
    }

    // Create order
    const order = new Order({
      customer: existingCustomer._id,
      items: orderItems,
      totalAmount,
      status: 'pending'
    });

    const savedOrder = await order.save();

    // Update product stocks
    for (const item of items) {
      await Product.findByIdAndUpdate(
        item.product,
        { $inc: { stock: -item.quantity } }
      );
    }

    // Populate customer and product references for response
    const populatedOrder = await Order.findById(savedOrder._id)
      .populate('customer')
      .populate('items.product');

    res.status(201).json(populatedOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: error.message || 'Failed to create order' });
  }
};

module.exports = {
  createOrder
};
