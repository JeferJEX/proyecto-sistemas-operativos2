const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const menuItems = [
    {
        name: "Pizza Margherita",
        price: 8.5,
        description: "Tomate, mozzarella, albahaca"
    },
    {
        name: "Ensalada César",
        price: 7.0,
        description: "Lechuga, pollo, parmesano, crutones"
    },
    {
        name: "Burguer clásica",
        price: 9.5,
        description: "Carne de res, queso, lechuga, tomate"
    }
];

app.get('/api/items', (req, res) => {
    res.json(menuItems);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
