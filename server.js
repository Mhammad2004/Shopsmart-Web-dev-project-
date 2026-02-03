const express = require("express");
const cors = require("cors");
const products = require("./data/products.json");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("ShopSmart Backend is running 🚀");
});

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Get product by ID
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('server started...');
});
