const Client = require('shopify-buy')

module.exports = class Client {

    constructor(domain, storefrontAccessToken) {
        this.client = Client.buildClient({
            domain: domain,
            storefrontAccessToken: storefrontAccessToken
        });

        this.init()
    }

    init() {
        return this.client
    }
}