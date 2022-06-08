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

app.get("/:id", (req, res) => {
    let {params:{id}} = req;

    let product = service.getProduct(id);

    res.status(200).json({
        message:"Producto",
        body:product
    });
});

app.post("/", (req, res) => {
    let {body:dataProduct} = req;
    let newProduct = service.createProduct(dataProduct);

    res.status(201).json({
        message:"Producto creado",
        body:newProduct
    });
});

app.put("/:id", (req, res) => {
    let {params:{id}} = req;
    let {body:dataProduct} = req;

    let productUpdate = service.updateProduct(id, dataProduct);

    res.status(200).json({
        message:"Producto actualizado",
        body:productUpdate
    });
});

app.delete("/:id", (req, res) => {
    let {params:{id}} = req;
    service.deleteProduct(id);

    res.status(200).json({
        message:"Producto eliminado"
    });
});

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto : ${PORT}`));