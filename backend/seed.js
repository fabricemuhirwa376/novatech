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
        price: 1299000,
        stock: 50,
        category: 'Laptops',
        imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80'
      },
      {
        name: 'MacBook Air',
        description: 'Ultra-thin and powerful MacBook Air M2',
        price: 1599000,
        stock: 35,
        category: 'Laptops',
        imageUrl: 'https://images.unsplash.com/photo-1611186871525-9eeadb3e0e0e?w=400&q=80'
      },
      {
        name: 'Gaming Laptop',
        description: 'High-performance gaming laptop with RTX 4060',
        price: 1899000,
        stock: 25,
        category: 'Laptops',
        imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80'
      },
      {
        name: 'iPhone 15',
        description: 'Latest iPhone with A17 Pro chip',
        price: 899000,
        stock: 60,
        category: 'Smartphones',
        imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80'
      },
      {
        name: 'Samsung Galaxy S24',
        description: 'Premium Android smartphone with AI features',
        price: 799000,
        stock: 55,
        category: 'Smartphones',
        imageUrl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80'
      },
      {
        name: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse with precision tracking',
        price: 49000,
        stock: 150,
        category: 'Peripherals',
        imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80'
      },
      {
        name: 'Mechanical Keyboard',
        description: 'RGB Mechanical Gaming Keyboard with Cherry MX switches',
        price: 129000,
        stock: 80,
        category: 'Peripherals',
        imageUrl: 'https://images.unsplash.com/photo-1595044426077-d36d9236d44d?w=400&q=80'
      },
      {
        name: 'Monitor 4K',
        description: '27-inch 4K Ultra HD monitor with 144Hz refresh rate',
        price: 399000,
        stock: 30,
        category: 'Monitors',
        imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80'
      },
      {
        name: 'Sony Headphones',
        description: 'Premium noise-cancelling wireless headphones',
        price: 249000,
        stock: 45,
        category: 'Audio',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80'
      },
      {
        name: 'USB-C Hub',
        description: 'Multi-port USB-C hub with HDMI and SD card reader',
        price: 79000,
        stock: 120,
        category: 'Accessories',
        imageUrl: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&q=80'
      },
      {
        name: 'iPad Pro',
        description: '12.9-inch iPad Pro with M2 chip and Apple Pencil support',
        price: 699000,
        stock: 40,
        category: 'Tablets',
        imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80'
      },
      {
        name: 'Smart Watch',
        description: 'Advanced fitness tracking and health monitoring smartwatch',
        price: 199000,
        stock: 65,
        category: 'Accessories',
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80'
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
