const Collections = require("collections");

module.exports = class query extends Collections{

    //constructs custom gql query with shopify-buy
    //type is what will be queried
    //args is gql args object
    //fields is an array of what fields to query
    constructor( args, fields ){
        super();
        this.buildQuery( args, fields)
    }


    buildQuery( args, fields) {
        const collectionsQuery = this.client.graphQLClient.query((root) => {
            root.addConnection('collections', {args: args}, (collection) => {
                for (const field in fields) {
                    collection.add(field);
                }
            });
        });

        this.client.graphQLClient.send(collectionsQuery).then(({model, data}) => {
            return model
        });
    }
}