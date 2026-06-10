require('dotenv').config();
const connectDB = require('./src/db/connect');
const Product = require('./src/models/Product');
const Customer = require('./src/models/Customer');
const Order = require('./src/models/Order');

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Product.deleteMany({});
    await Customer.deleteMany({});
    await Order.deleteMany({});

    console.log('Cleared existing data');

    // Seed products
    const products = await Product.insertMany([
      {
        name: 'Laptop Pro',
        description: 'High-performance laptop for professionals',
        price: 1299.99,
        stock: 50,
        category: 'Laptops',
        imageUrl: 'https://via.placeholder.com/300?text=Laptop+Pro'
      },
      {
        name: 'USB-C Cable',
        description: 'Premium 2m USB-C charging cable',
        price: 19.99,
        stock: 200,
        category: 'Accessories',
        imageUrl: 'https://via.placeholder.com/300?text=USB-C+Cable'
      },
      {
        name: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse with precision tracking',
        price: 49.99,
        stock: 150,
        category: 'Peripherals',
        imageUrl: 'https://via.placeholder.com/300?text=Wireless+Mouse'
      },
      {
        name: 'Monitor 4K',
        description: '27-inch 4K Ultra HD monitor',
        price: 399.99,
        stock: 30,
        category: 'Monitors',
        imageUrl: 'https://via.placeholder.com/300?text=Monitor+4K'
      },
      {
        name: 'Mechanical Keyboard',
        description: 'RGB Mechanical Gaming Keyboard',
        price: 129.99,
        stock: 80,
        category: 'Peripherals',
        imageUrl: 'https://via.placeholder.com/300?text=Mechanical+Keyboard'
      }
    ]);

    console.log(`✓ Seeded ${products.length} products`);

    // Seed customers
    const customers = await Customer.insertMany([
      {
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '+1-555-0101',
        address: '123 Tech Street'
      },
      {
        fullName: 'Jane Smith',
        email: 'jane@example.com',
        phone: '+1-555-0102',
        address: '456 Innovation Ave'
      }
    ]);

    console.log(`✓ Seeded ${customers.length} customers`);

    // Seed orders
    const orders = await Order.insertMany([
      {
        customer: customers[0]._id,
        items: [
          {
            product: products[0]._id,
            quantity: 1,
            unitPrice: products[0].price
          },
          {
            product: products[1]._id,
            quantity: 2,
            unitPrice: products[1].price
          }
        ],
        totalAmount: products[0].price + products[1].price * 2,
        status: 'pending'
      }
    ]);

    console.log(`✓ Seeded ${orders.length} orders`);

    console.log('\n✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
