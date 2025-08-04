-- Create inventory table
CREATE TABLE IF NOT EXISTS inventory (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    product_code VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    categories VARCHAR(255) NOT NULL,
    binlocation VARCHAR(255) NOT NULL,
    stock INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_inventory_name ON inventory(name);
CREATE INDEX IF NOT EXISTS idx_inventory_created_at ON inventory(created_at); 