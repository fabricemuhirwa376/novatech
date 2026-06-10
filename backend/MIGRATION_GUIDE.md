# PostgreSQL to MongoDB Migration Guide

## Summary of Changes

The NovaTech RW backend has been successfully migrated from PostgreSQL to MongoDB with Mongoose.

## 🔄 What Changed

### 1. Database Connection
- **Before**: Used `pg` library with connection pool
- **After**: Uses MongoDB with Mongoose ODM

**Before** (`src/db/pool.js`):
```javascript
const { Pool } = require('pg');
const pool = new Pool({ /* config */ });
```

**After** (`src/db/connect.js`):
```javascript
const mongoose = require('mongoose');
const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
};
```

### 2. Data Models
- **Before**: SQL tables with foreign keys and relationships
- **After**: Mongoose schemas with references

**Customer Model Changes:**
```
Before: first_name, last_name, email, phone, address, city, postal_code, country
After:  fullName, email, phone, address
```

**Product Model Changes:**
```
Before: category_id (FK to categories table)
After:  category (string field)
```

**Order Model Changes:**
```
Before: customer_id (FK), separate order_items table with price, quantity, product_id
After:  customer (ObjectId ref), items array with embedded product ref, quantity, unitPrice
```

### 3. API Request/Response Format

**Creating a Customer:**

Before (PostgreSQL):
```json
POST /api/customers
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "123",
  "address": "123 St",
  "city": "City",
  "postal_code": "12345",
  "country": "Country"
}
```

After (MongoDB):
```json
POST /api/customers
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "123",
  "address": "123 St"
}
```

**Creating an Order:**

Before (PostgreSQL):
```json
POST /api/orders
{
  "customer": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    ...
  },
  "items": [
    {
      "product_id": 1,
      "quantity": 2,
      "price": 99.99
    }
  ]
}
```

After (MongoDB):
```json
POST /api/orders
{
  "customer": {
    "fullName": "John Doe",
    "email": "john@example.com",
    ...
  },
  "items": [
    {
      "product": "507f1f77bcf86cd799439011",
      "quantity": 2,
      "unitPrice": 99.99
    }
  ]
}
```

## 📦 Dependency Changes

### Removed
- `pg` - PostgreSQL driver

### Added
- `mongoose` - MongoDB ODM

## 🗄️ Schema Changes

### Products
- No `category_id` foreign key needed
- Direct `category` string field
- `imageUrl` field added for image storage

### Customers
- Combined `first_name` and `last_name` into `fullName`
- Removed: `city`, `postal_code`, `country`
- Added unique index on `email`

### Orders
- `customer_id` becomes `customer` (ObjectId reference)
- `order_items` table merged into `items` array within Order document
- Status values: `pending`, `processing`, `shipped`, `delivered`, `cancelled`

## ⚠️ Breaking Changes

1. **ID Format**: 
   - PostgreSQL: Integer IDs (1, 2, 3...)
   - MongoDB: ObjectId strings (507f1f77bcf86cd799439011...)

2. **Field Names**:
   - Use `fullName` instead of `first_name` + `last_name`
   - Use `unitPrice` instead of `price` in order items
   - Use `product` (ObjectId) instead of `product_id`

3. **Categories Endpoint**:
   - Before: Returned category objects with ID and name
   - After: Returns array of category strings
   ```json
   // Before
   [{"id": 1, "name": "Laptops"}, ...]
   
   // After
   ["Laptops", "Accessories", ...]
   ```

## 🔧 Environment Configuration

**Update `.env`:**
```env
# Remove these PostgreSQL variables:
# DB_USER=...
# DB_PASSWORD=...
# DB_HOST=...
# DB_PORT=...
# DB_NAME=...

# Add MongoDB variable:
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

## 📈 Benefits of MongoDB

- ✅ **Flexible Schema**: Easier to add/remove fields
- ✅ **Embedded Documents**: No need for multiple table joins
- ✅ **Horizontal Scalability**: Better for distributed systems
- ✅ **Rapid Development**: Schema-less design speeds up prototyping
- ✅ **JSON-like Format**: Seamless integration with JavaScript/Node.js

## 🚀 Migration Steps for Frontend

1. Update API calls to use ObjectIds for products/customers
2. Update request payloads to use new field names
3. Update response handling to expect new data structure
4. Test all CRUD operations with new API format

## 📝 Example Migration Checklist

- [ ] Install mongoose dependency
- [ ] Update environment variables
- [ ] Create Mongoose models
- [ ] Update database connection
- [ ] Update controllers with Mongoose queries
- [ ] Update API request/response formats
- [ ] Run database seed script
- [ ] Test all API endpoints
- [ ] Update frontend API client
- [ ] Test full end-to-end flow

## 🆘 Troubleshooting

### MongoDB Connection Issues
```javascript
// Ensure MONGODB_URI is set correctly in .env
MONGODB_URI=mongodb+srv://user:pass@host/dbname
```

### Duplicate Email Error
- MongoDB enforces unique indexes
- Use email addresses that haven't been used before when testing

### Stock Validation Issues
- Check that product IDs in order requests are valid ObjectIds
- Verify products exist in database before creating orders

---

For detailed API documentation, see [MONGODB_README.md](./MONGODB_README.md)
