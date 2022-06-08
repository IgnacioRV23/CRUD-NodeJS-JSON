var data = require("../src/data.json");

module.exports = {
    getProducts:() => {
        return data;
    },

    getProduct:(idProduct) => {
        let id = parseInt(idProduct);

        let productFilter = data.filter((product) => product.id === id);

        return productFilter;
    }
}