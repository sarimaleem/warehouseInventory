package services

import (
	"context"
	"warehouse-inventory-backend/db"
)

// InventoryService handles inventory business logic
type InventoryService struct {
	queries *db.Queries
}

// NewInventoryService creates a new inventory service
func NewInventoryService(queries *db.Queries) *InventoryService {
	return &InventoryService{
		queries: queries,
	}
}

// GetAllItems retrieves all inventory items
func (s *InventoryService) GetAllItems(ctx context.Context) ([]db.Inventory, error) {
	return s.queries.ListInventory(ctx)
}

// GetItemByID retrieves a single inventory item by ID
func (s *InventoryService) GetItemByID(ctx context.Context, id int32) (db.Inventory, error) {
	return s.queries.GetInventory(ctx, id)
}

// GetItemByName retrieves a single inventory item by name
func (s *InventoryService) GetItemByName(ctx context.Context, name string) (db.Inventory, error) {
	return s.queries.GetInventoryByName(ctx, name)
}

// CreateItem creates a new inventory item
func (s *InventoryService) CreateItem(ctx context.Context, name string, quantity int32) (db.Inventory, error) {
	arg := db.CreateInventoryParams{
		Name:     name,
		Quantity: quantity,
	}
	return s.queries.CreateInventory(ctx, arg)
}

// UpdateItem updates an existing inventory item
func (s *InventoryService) UpdateItem(ctx context.Context, id int32, name string, quantity int32) (db.Inventory, error) {
	arg := db.UpdateInventoryParams{
		ID:       id,
		Name:     name,
		Quantity: quantity,
	}
	return s.queries.UpdateInventory(ctx, arg)
}

// UpdateItemQuantity updates only the quantity of an inventory item
func (s *InventoryService) UpdateItemQuantity(ctx context.Context, id int32, quantity int32) (db.Inventory, error) {
	arg := db.UpdateInventoryQuantityParams{
		ID:       id,
		Quantity: quantity,
	}
	return s.queries.UpdateInventoryQuantity(ctx, arg)
}

// DeleteItem deletes an inventory item
func (s *InventoryService) DeleteItem(ctx context.Context, id int32) error {
	return s.queries.DeleteInventory(ctx, id)
}

// GetAllQuantities retrieves all quantities from inventory
func (s *InventoryService) GetAllQuantities(ctx context.Context) ([]int32, error) {
	return s.queries.GetInventoryQuantity(ctx)
}
