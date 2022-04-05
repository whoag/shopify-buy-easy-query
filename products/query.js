const Products = require('products')

module.exports = class query extends Products{

    //constructs custom gql query with shopify-buy
    //type is what will be queried
    //args is gql args objct
    //fields is an array of what fields to query
    constructor( args, fields ){
        super();
        this.buildQuery( args, fields)
    }


    buildQuery( args, fields) {
        const productsQuery = this.client.graphQLClient.query((root) => {
            root.addConnection('products', {args: args}, (product) => {
                for (const field in fields) {
                    product.add(field);
                }
            });
        });

        this.client.graphQLClient.send(productsQuery).then(({model, data}) => {
            return model
        });
    }
}