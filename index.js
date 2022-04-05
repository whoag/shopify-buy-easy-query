const Client = require('client')
const Products = require("products");
const ProductsQuery = require("./products/query");
const Collections = require("collections");
const CollectionsQuery = require("./collections/query");
const Checkout = require("checkout");


module.exports = {
    Client,
    Products,
    ProductsQuery,
    Collections,
    CollectionsQuery,
    Checkout
}