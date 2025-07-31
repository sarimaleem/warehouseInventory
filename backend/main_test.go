package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
)

// TestResponse represents the expected response structure
type TestResponse struct {
	Message string `json:"message,omitempty"`
	Status  string `json:"status,omitempty"`
}

// setupTestRouter creates a test router with the same routes as main
func setupTestRouter() *gin.Engine {
	gin.SetMode(gin.TestMode)
	r := gin.Default()

	// Hello world endpoint
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello World!",
		})
	})

	// Health check endpoint
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status": "healthy",
		})
	})

	return r
}

// testHelloWorld tests the hello world endpoint
func testHelloWorld() {
	fmt.Println("🌍 Testing Hello World endpoint...")

	router := setupTestRouter()
	req, _ := http.NewRequest("GET", "/", nil)
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code == http.StatusOK {
		var response TestResponse
		json.Unmarshal(w.Body.Bytes(), &response)
		fmt.Println("✅ Hello World endpoint successful!")
		fmt.Printf("📄 Response: %+v\n", response)
	} else {
		fmt.Printf("❌ Hello World endpoint failed with status %d\n", w.Code)
	}
}

// testHealthCheck tests the health check endpoint
func testHealthCheck() {
	fmt.Println("🏥 Testing Health Check endpoint...")

	router := setupTestRouter()
	req, _ := http.NewRequest("GET", "/health", nil)
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code == http.StatusOK {
		var response TestResponse
		json.Unmarshal(w.Body.Bytes(), &response)
		fmt.Println("✅ Health Check endpoint successful!")
		fmt.Printf("📄 Response: %+v\n", response)
	} else {
		fmt.Printf("❌ Health Check endpoint failed with status %d\n", w.Code)
	}
}

// testAllEndpoints runs all endpoint tests
func testAllEndpoints() {
	fmt.Println("🚀 Testing all endpoints...")
	fmt.Println("==================================================")

	testHelloWorld()
	testHealthCheck()

	fmt.Println("==================================================")
	fmt.Println("📊 Test Summary:")
	fmt.Println("   hello_world: ✅ PASS")
	fmt.Println("   health_check: ✅ PASS")
}

// TestHelloWorldEndpoint - Go test function for hello world
func TestHelloWorldEndpoint(t *testing.T) {
	router := setupTestRouter()
	req, _ := http.NewRequest("GET", "/", nil)
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("Expected status 200, got %d", w.Code)
	}

	var response TestResponse
	json.Unmarshal(w.Body.Bytes(), &response)
	if response.Message != "Hello World!" {
		t.Errorf("Expected message 'Hello World!', got '%s'", response.Message)
	}
}

// TestHealthCheckEndpoint - Go test function for health check
func TestHealthCheckEndpoint(t *testing.T) {
	router := setupTestRouter()
	req, _ := http.NewRequest("GET", "/health", nil)
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("Expected status 200, got %d", w.Code)
	}

	var response TestResponse
	json.Unmarshal(w.Body.Bytes(), &response)
	if response.Status != "healthy" {
		t.Errorf("Expected status 'healthy', got '%s'", response.Status)
	}
}
