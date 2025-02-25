// Product Class
class Product {
    constructor(name, productId, price) {
        this.name = name;
        this.productId = productId;
        this.price = price;
        this.stock = 0;
    }

    // Method to add stock to the product
    addStock(quantity) {
        if (quantity > 0) {
            this.stock += quantity;
            console.log(`Added ${quantity} units of ${this.name}. Total stock: ${this.stock}`);
        } else {
            console.log('Quantity to add must be greater than zero.');
        }
    }

    // Method to sell the product
    sell(quantity) {
        if (quantity <= this.stock) {
            this.stock -= quantity;
            console.log(`Sold ${quantity} units of ${this.name}. Remaining stock: ${this.stock}`);
        } else {
            console.log(`Insufficient stock to sell ${quantity} units of ${this.name}. Available stock: ${this.stock}`);
        }
    }
}

// Inventory Class
class Inventory {
    constructor() {
        this.products = [];
    }

    // Method to add a product to the inventory
    addProduct(product) {
        this.products.push(product);
        console.log(`Product ${product.name} added to inventory.`);
    }

    // Method to sell a product by updating its stock
    sellProduct(productId, quantity) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            product.sell(quantity);
        } else {
            console.log('Product not found in inventory.');
        }
    }

    // Method to check stock for a product
    checkStock(productId) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            console.log(`Stock for ${product.name}: ${product.stock}`);
        } else {
            console.log('Product not found in inventory.');
        }
    }
}

// Test the Inventory Management System
function testInventorySystem() {
    // Create Product instances
    const product1 = new Product('Laptop', 101, 1000);
    const product2 = new Product('Smartphone', 102, 500);
    const product3 = new Product('Tablet', 103, 300);

    // Create an Inventory instance
    const inventory = new Inventory();

    // Add products to inventory
    inventory.addProduct(product1);
    inventory.addProduct(product2);
    inventory.addProduct(product3);

    // Add stock to products
    product1.addStock(50); 
    product2.addStock(100); 
    product3.addStock(200); 

    // Check stock levels
    inventory.checkStock(101); 
    inventory.checkStock(102); 

    // Sell products
    inventory.sellProduct(101, 20); 
    inventory.sellProduct(102, 50); 
    inventory.sellProduct(103, 300); 

    // Check stock levels again after selling
    inventory.checkStock(101);
    inventory.checkStock(102);
    inventory.checkStock(103);
}

testInventorySystem();
