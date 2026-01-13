const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Data
const sweets = [
    { id: 1, name: "Premium Gulab Jamun", price: 250, unit: "500g" },
    { id: 2, name: "Kaju Katli Royale", price: 600, unit: "500g" },
    { id: 3, name: "Saffron Rasmalai", price: 180, unit: "2 pcs" },
];

// Routes
app.get('/api/sweets', (req, res) => {
    res.json(sweets);
});

app.post('/api/orders', (req, res) => {
    const { cart, customer } = req.body;
    console.log('Order received:', { cart, customer });
    res.status(201).json({ message: 'Order placed successfully!', orderId: Math.floor(Math.random() * 1000000) });
});

app.get('/', (req, res) => {
    res.send('Seetaiah Home Foods API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
