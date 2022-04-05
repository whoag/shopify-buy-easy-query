
const Client = require('client')


//class contains functions for querying products from Shopify Store
module.exports = class Collections extends Client{
    constructor() {
        super()
    }

    //returns an array of all collections with their products
    allProducts() {
        this.client.collection.fetchAllWithProducts().then((collections) => {
            // Do something with the collections
            return collections
        });

    }

    //returns array of all collection products
    productsById(id, amount) {
        this.client.collection.fetchWithProducts(id, {productsFirst: amount}).then((collection) => {
            // Do something with the collection
            return collection
        });
    }

}