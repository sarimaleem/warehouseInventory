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
	return s.queries.GetAllItems(ctx)
}
