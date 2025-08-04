#!/bin/bash

# Warehouse Inventory Backend Script
# This script runs the Gin backend server

echo "🚀 Starting Warehouse Inventory Backend..."

# Check if Go is installed
if ! command -v go &> /dev/null; then
    echo "❌ Error: Go is not installed. Please install Go first."
    exit 1
fi

# Navigate to backend directory
cd "$(dirname "$0")"

# Download dependencies
echo "📦 Downloading dependencies..."
go mod tidy

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Starting server on http://localhost:8080"
    echo "Press Ctrl+C to stop the server"
    echo ""
    
    # Run the server
    go run main.go
else
    echo "❌ Build failed!"
    exit 1
fi 