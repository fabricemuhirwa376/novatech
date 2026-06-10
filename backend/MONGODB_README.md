# NovaTech RW - Electronics Shop API

A modern Node.js Express REST API for an electronics shop built with MongoDB and Mongoose.

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas cloud)
- npm or yarn

## 🚀 Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Update `.env` file with your MongoDB connection string:

```env
PORT=5000
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/novatech?retryWrites=true&w=majority
NODE_ENV=development
```

### 3. Seed the Database (Optional)

Populate the database with sample data:

```bash
npm run seed
```

### 4. Start the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The API will be available at `http://localhost:5000`

## 📚 Database Models

### Product
```javascript
{
  name: String (required),
  description: String,
  price: Number (required),
  stock: Number (default: 0),
  imageUrl: String,
  category: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Customer
```javascript
{
  fullName: String (required),
  email: String (required, unique),
  phone: String,
  address: String,
  createdAt: Date
}
```

### Order
```javascript
{
  customer: ObjectId (ref Customer, required),
  items: [
    {
      product: ObjectId (ref Product, required),
      quantity: Number (required),
      unitPrice: Number (required)
    }
  ],
  totalAmount: Number (required),
  status: String (enum: 'pending', 'processing', 'shipped', 'delivered', 'cancelled', default: 'pending'),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔌 API Endpoints

### Products

**GET /api/products**
Get all products with optional filtering
- Query Parameters:
  - `category` (optional): Filter by category name
  - `search` (optional): Search in product name or description (case-insensitive)

```bash
curl "http://localhost:5000/api/products?category=Laptops&search=Pro"
```

**GET /api/products/:id**
Get a specific product by ID

```bash
curl "http://localhost:5000/api/products/507f1f77bcf86cd799439011"
```

**GET /api/products/categories**
Get all available product categories

```bash
curl "http://localhost:5000/api/products/categories"
```

### Customers

**POST /api/customers**
Create a new customer

```bash
curl -X POST http://localhost:5000/api/customers \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "+1-555-0101",
    "address": "123 Tech Street"
  }'
```

Request Body:
```json
{
  "fullName": "John Doe",      // required
  "email": "john@example.com", // required
  "phone": "+1-555-0101",      // optional
  "address": "123 Tech Street" // optional
}
```

### Orders

**POST /api/orders**
Create a new order with customer and items

```bash
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customer": {
      "fullName": "Jane Smith",
      "email": "jane@example.com",
      "phone": "+1-555-0102",
      "address": "456 Innovation Ave"
    },
    "items": [
      {
        "product": "507f1f77bcf86cd799439011",
        "quantity": 2,
        "unitPrice": 1299.99
      },
      {
        "product": "507f1f77bcf86cd799439012",
        "quantity": 1,
        "unitPrice": 49.99
      }
    ]
  }'
```

Request Body:
```json
{
  "customer": {
    "fullName": "string",    // required
    "email": "string",       // required
    "phone": "string",       // optional
    "address": "string"      // optional
  },
  "items": [
    {
      "product": "MongoDB ObjectId",  // required - Product ID
      "quantity": "number",           // required - must be > 0
      "unitPrice": "number"           // required - price per unit
    }
  ]
}
```

**Features:**
- Automatically creates customer if email doesn't exist
- Validates product availability and stock
- Updates product stock after order is placed
- Returns populated order with customer and product details

## ✅ Health Check

**GET /api/health**
Check if the API is running

```bash
curl "http://localhost:5000/api/health"
```

Response:
```json
{
  "status": "OK",
  "message": "NovaTech RW API is running"
}
```

## 🔍 Error Responses

All error responses follow this format:

```json
{
  "error": "Error message description"
}
```

### Common Status Codes
- `201`: Created successfully
- `400`: Bad request (validation error)
- `404`: Not found (product or customer not found)
- `409`: Conflict (duplicate email)
- `500`: Internal server error

## 📝 Example Workflows

### 1. Create a Customer
```bash
curl -X POST http://localhost:5000/api/customers \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Alice Johnson",
    "email": "alice@example.com",
    "phone": "+1-555-0103",
    "address": "789 Digital Lane"
  }'
```

### 2. Get Products by Category
```bash
curl "http://localhost:5000/api/products?category=Peripherals"
```

### 3. Search Products
```bash
curl "http://localhost:5000/api/products?search=Keyboard"
```

### 4. Create an Order
```bash
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customer": {
      "fullName": "Alice Johnson",
      "email": "alice@example.com"
    },
    "items": [
      {
        "product": "507f1f77bcf86cd799439011",
        "quantity": 1,
        "unitPrice": 129.99
      }
    ]
  }'
```

## 📂 Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   ├── productController.js
│   │   ├── customerController.js
│   │   └── orderController.js
│   ├── models/
│   │   ├── Product.js
│   │   ├── Customer.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── customers.js
│   │   └── orders.js
│   └── db/
│       └── connect.js
├── server.js
├── seed.js
├── .env
└── package.json
```

## 🛠️ Technologies Used

- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM (Object Data Modeling)
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📖 Notes

- All timestamps are stored in UTC
- Email addresses are stored in lowercase
- Product stock is automatically decremented when orders are placed
- Stock validation prevents overselling
- Customers are reused if email already exists when creating orders

## 🤝 Contributing

Feel free to submit pull requests for improvements and bug fixes.

## 📄 License

MIT
