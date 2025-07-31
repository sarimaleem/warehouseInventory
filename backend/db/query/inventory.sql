-- name: GetInventory :one
SELECT * FROM inventory
WHERE id = $1 LIMIT 1;

-- name: GetInventoryByName :one
SELECT * FROM inventory
WHERE name = $1 LIMIT 1;

-- name: ListInventory :many
SELECT * FROM inventory
ORDER BY created_at DESC;

-- name: GetInventoryQuantity :many
SELECT quantity FROM inventory;

-- name: CreateInventory :one
INSERT INTO inventory (
    name, quantity
) VALUES (
    $1, $2
)
RETURNING *;

-- name: UpdateInventory :one
UPDATE inventory
SET name = $2, quantity = $3, updated_at = CURRENT_TIMESTAMP
WHERE id = $1
RETURNING *;

-- name: UpdateInventoryQuantity :one
UPDATE inventory
SET quantity = $2, updated_at = CURRENT_TIMESTAMP
WHERE id = $1
RETURNING *;

-- name: DeleteInventory :exec
DELETE FROM inventory
WHERE id = $1; 