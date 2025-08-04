-- name: GetAllItems :many
SELECT * FROM inventory
ORDER BY created_at DESC;