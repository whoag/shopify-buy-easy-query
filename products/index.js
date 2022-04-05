const Client = require('client')


//class contains functions for querying products from Shopify Store
module.exports = class Products extends Client{
    constructor() {
        super()
    }

    //returns an orray of all products
    all() {
        this.client.product.fetchAll().then((products) => {
            // Do something with the products
            return products
        });
    }

    //finds single product with matching id
    findById(id) {
        this.client.product.fetch(id).then((product) => {
            // Do something with the product
            return product
        });
    }

    //returns single product with matching handle
    findByHandle(handle) {
        this.client.product.fetchByHandle(handle).then((product) => {
            // Do something with the product
            return product
        });
    }

}