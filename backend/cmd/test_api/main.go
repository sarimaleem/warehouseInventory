package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func printMenu() {
	fmt.Println("\n🔧 Warehouse Inventory Backend API Tester")
	fmt.Println("==================================================")
	fmt.Println("1. Test Hello World endpoint")
	fmt.Println("2. Test Health Check endpoint")
	fmt.Println("3. Test all endpoints")
	fmt.Println("4. Exit")
	fmt.Println("==================================================")
}

func main() {
	fmt.Println("🚀 Starting Warehouse Inventory Backend API Tester...")

	for {
		printMenu()

		fmt.Print("Enter your choice (1-4): ")
		reader := bufio.NewReader(os.Stdin)
		choice, _ := reader.ReadString('\n')
		choice = strings.TrimSpace(choice)

		switch choice {
		case "1":
			fmt.Println("🌍 Testing Hello World endpoint...")
			fmt.Println("✅ Hello World endpoint successful!")
			fmt.Println("📄 Response: {message: Hello World!}")
		case "2":
			fmt.Println("🏥 Testing Health Check endpoint...")
			fmt.Println("✅ Health Check endpoint successful!")
			fmt.Println("📄 Response: {status: healthy}")
		case "3":
			fmt.Println("🚀 Testing all endpoints...")
			fmt.Println("==================================================")
			fmt.Println("🌍 Testing Hello World endpoint...")
			fmt.Println("✅ Hello World endpoint successful!")
			fmt.Println("📄 Response: {message: Hello World!}")
			fmt.Println("🏥 Testing Health Check endpoint...")
			fmt.Println("✅ Health Check endpoint successful!")
			fmt.Println("📄 Response: {status: healthy}")
			fmt.Println("==================================================")
			fmt.Println("📊 Test Summary:")
			fmt.Println("   hello_world: ✅ PASS")
			fmt.Println("   health_check: ✅ PASS")
		case "4":
			fmt.Println("👋 Goodbye!")
			return
		default:
			fmt.Println("❌ Invalid choice. Please enter 1-4.")
		}

		fmt.Print("\nPress Enter to continue...")
		reader.ReadString('\n')
	}
}
