#!/bin/bash

# Warehouse Inventory Backend Test Runner
# Simple test runner like the Python script

echo "🧪 Running Warehouse Inventory Backend Tests..."

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

# Run tests with simple output
echo "🔬 Running tests..."
go test ./...

# Check if tests passed
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ All tests passed!"
else
    echo ""
    echo "❌ Some tests failed!"
    exit 1
fi

echo ""
echo "🎉 Test run completed!" 