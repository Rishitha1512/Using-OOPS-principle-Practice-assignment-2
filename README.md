# Using-OOPS-principle-Practice-assignment-2
# Inventory Management System

## Project Description

This project is an Inventory Management System built in JavaScript. It involves two main classes: `Product` and `Inventory`.

### 1. Product Class
- `name`: Name of the product (string).
- `productId`: Unique identifier for the product (number).
- `price`: Price of the product (number).
- `stock`: The current stock of the product (default: 0).
- Methods:
  - `addStock(quantity)`: Adds a certain quantity of the product to stock.
  - `sell(quantity)`: Sells a certain quantity of the product and updates stock.

### 2. Inventory Class
- `products`: An array of `Product` objects.
- Methods:
  - `addProduct(product)`: Adds a product to the inventory.
  - `sellProduct(productId, quantity)`: Sells a product by updating its stock.
  - `checkStock(productId)`: Displays the available stock of a product.

### Demo

1. Products are added to the inventory with an initial stock of 0.
2. Stock for each product is increased using `addStock()`.
3. Products are sold using `sell()`, and stock is updated accordingly.
4. Stock levels are checked with `checkStock()`.

