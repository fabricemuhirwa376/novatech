@echo off
REM NovaTech RW - Complete Setup Script for Windows
REM This script sets up both backend and frontend

echo.
echo 🚀 NovaTech RW - Complete Setup
echo ================================
echo.

REM Backend Setup
echo 📦 Setting up Backend...
cd backend

if not exist "node_modules" (
    echo Installing backend dependencies...
    call npm install
) else (
    echo Backend dependencies already installed
)

if not exist ".env" (
    echo Creating .env file...
    (
        echo PORT=5000
        echo MONGODB_URI=mongodb+srv://novatech_admin:2wnotDX96bOviNoL@novatech.vith7ur.mongodb.net/novatech?retryWrites=true^&w=majority^&appName=novatech
        echo NODE_ENV=development
    ) > .env
    echo ✅ Backend .env created
) else (
    echo Backend .env already exists
)

cd ..

REM Frontend Setup
echo.
echo ⚛️  Setting up Frontend...
cd frontend

if not exist "node_modules" (
    echo Installing frontend dependencies...
    call npm install
) else (
    echo Frontend dependencies already installed
)

if not exist ".env" (
    echo Creating .env file...
    (
        echo VITE_API_URL=http://localhost:5000/api
    ) > .env
    echo ✅ Frontend .env created
) else (
    echo Frontend .env already exists
)

cd ..

echo.
echo ✅ Setup Complete!
echo.
echo Next steps:
echo 1. Start Backend:  cd backend ^&^& npm run dev
echo 2. Start Frontend: cd frontend ^&^& npm run dev
echo 3. Open browser:  http://localhost:5173
echo.
echo Optional:
echo - Seed database: cd backend ^&^& npm run seed
echo.
pause
