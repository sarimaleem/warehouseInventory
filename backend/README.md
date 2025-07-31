# Warehouse Inventory Backend

A simple Gin-based REST API backend for the warehouse inventory system.

## Prerequisites

- Go 1.21 or higher

## Quick Start

1. **Generate SQL code (required after schema changes):**
   ```bash
   sqlc generate
   ```

2. **Run the backend using the script:**
   ```bash
   ./scripts.sh
   ```

3. **Or run manually:**
   ```bash
   go mod tidy
   go run main.go
   ```

## Available Endpoints

- `GET /` - Hello World endpoint
- `GET /health` - Health check endpoint

## Server Details

- **Port:** 8080
- **URL:** http://localhost:8080

## Testing the API

You can test the endpoints using curl:

```bash
# Hello World endpoint
curl http://localhost:8080/

# Health check endpoint
curl http://localhost:8080/health
```

## Project Structure

```
backend/
├── main.go          # Main application file
├── go.mod           # Go module file
├── scripts.sh       # Run script
└── README.md        # This file
``` 