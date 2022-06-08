const service = require('../src/service');

const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    let products = service.getProducts();

    res.status(200).json({
        message:"Lista de productos",
        body:products
    });
});

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto : ${PORT}`));