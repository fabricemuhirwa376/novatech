#!/bin/bash

# NovaTech RW - Complete Setup Script
# This script sets up both backend and frontend

echo "🚀 NovaTech RW - Complete Setup"
echo "================================"

# Backend Setup
echo ""
echo "📦 Setting up Backend..."
cd backend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
else
    echo "Backend dependencies already installed"
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "Creating .env file..."
    cat > .env << EOF
PORT=5000
MONGODB_URI=mongodb+srv://novatech_admin:2wnotDX96bOviNoL@novatech.vith7ur.mongodb.net/novatech?retryWrites=true&w=majority&appName=novatech
NODE_ENV=development
EOF
    echo "✅ Backend .env created"
else
    echo "Backend .env already exists"
fi

cd ..

# Frontend Setup
echo ""
echo "⚛️  Setting up Frontend..."
cd frontend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
else
    echo "Frontend dependencies already installed"
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "Creating .env file..."
    cat > .env << EOF
VITE_API_URL=http://localhost:5000/api
EOF
    echo "✅ Frontend .env created"
else
    echo "Frontend .env already exists"
fi

cd ..

echo ""
echo "✅ Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Start Backend:  cd backend && npm run dev"
echo "2. Start Frontend: cd frontend && npm run dev"
echo "3. Open browser:  http://localhost:5173"
echo ""
echo "Optional:"
echo "- Seed database: cd backend && npm run seed"
echo ""
