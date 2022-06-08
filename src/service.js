var data = require("../src/data.json");

module.exports = {
    getProducts:() => {
        return data;
    },

    getProduct:(idProduct) => {
        let id = parseInt(idProduct);

        let productFilter = data.filter((product) => product.id === id);

        return productFilter;
    },

    createProduct: (dataProduct) => {
        let newProduct = {
            id:data.length + 1,
            ...dataProduct
        };

        data.push(newProduct);
        return newProduct;
    },

    updateProduct:(idProduct, dataProduct) => {
        let id = parseInt(idProduct);
        let productUpdate = {};
        let productFind = data.find((product) => product.id === id);

        if (productFind != undefined) {
            data = data.map((product) => {
                if (product.id === id) {
                    productUpdate = {
                        id:product.id,
                        ...dataProduct
                    };

                    return productUpdate;
                } else {
                    return product;
                }
            });

            return productUpdate;
        }
    }
}