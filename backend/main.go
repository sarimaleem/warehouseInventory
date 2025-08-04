package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"warehouse-inventory-backend/db"
	"warehouse-inventory-backend/handlers"
	"warehouse-inventory-backend/services"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func connectToDatabase() (*sql.DB, error) {
	username := os.Getenv("DB_USERNAME")
	password := os.Getenv("DB_PASSWORD")
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	connectionString := fmt.Sprintf("postgres://%s:%s@%s:%s/inventorydb?sslmode=disable", username, password, host, port)

	database, err := sql.Open("postgres", connectionString)
	if err != nil {
		return nil, err
	}

	return database, nil
}
func main() {
	// Connect to database
	godotenv.Load()
	database, err := connectToDatabase()
	if err != nil {
		log.Fatal("failed to connect to database", err)
	}
	defer database.Close()

	if err := database.Ping(); err != nil {
		log.Fatal("Failed to ping database:", err)
	}
	// Initialize database queries
	queries := db.New(database)

	// Initialize services
	inventoryService := services.NewInventoryService(queries)

	// Initialize handlers
	helloHandler := handlers.NewHelloHandler()
	healthHandler := handlers.NewHealthHandler()
	inventoryHandler := handlers.NewInventoryHandler(inventoryService)

	// Create a new Gin router
	r := gin.Default()

	// Add CORS middleware
	r.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "http://localhost:5173")
		c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Header("Access-Control-Allow-Headers", "Origin, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		c.Header("Access-Control-Allow-Credentials", "true")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	// Hello world endpoint
	r.GET("/", helloHandler.GetHello)

	// Health check endpoint
	r.GET("/health", healthHandler.GetHealth)

	// Inventory endpoints
	inventory := r.Group("/inventory")
	{
		fmt.Println("Inventory endpoint")
		inventory.GET("", inventoryHandler.GetAllItems) // GET /inventory
		// inventory.GET("/:id", inventoryHandler.GetItemByID)             // GET /inventory/:id
		// inventory.POST("", inventoryHandler.CreateItem)                 // POST /inventory
		// inventory.PUT("/:id", inventoryHandler.UpdateItem)              // PUT /inventory/:id
		// inventory.DELETE("/:id", inventoryHandler.DeleteItem)           // DELETE /inventory/:id
		// inventory.GET("/quantities", inventoryHandler.GetAllQuantities) // GET /inventory/quantities
	}

	// Run the server on port 8080
	log.Println("🚀 Starting server on http://localhost:8080")
	log.Println("📋 Available endpoints:")
	log.Println("   - GET / (Hello World)")
	log.Println("   - GET /health (Health Check)")
	log.Println("   - GET /inventory (Get All Items)")
	// log.Println("   - GET /inventory/:id (Get Item by ID)")
	// log.Println("   - POST /inventory (Create Item)")
	// log.Println("   - PUT /inventory/:id (Update Item)")
	// log.Println("   - DELETE /inventory/:id (Delete Item)")
	// log.Println("   - GET /inventory/quantities (Get All Quantities)")

	r.Run(":8080")
}
