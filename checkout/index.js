
const Client = require('client')


//class contains functions for querying products from Shopify Store
module.exports = class Checkout extends Client{
    constructor() {
        super()
        this.checkoutId = ""
        this.create()
    }

    //returns an array of all collections with their products
    create() {
        this.client.checkout.create().then((checkout) => {
            // Do something with the checkout
            this.checkoutId = checkout.checkoutId
           return checkout
        });
    }

    updateAttr(attrs) {
        this.client.checkout.updateAttributes( this.checkoutId, attrs)
    }

    addItems( lineItemsToAdd){
        this.client.checkout.addLineItems( this.checkoutId, lineItemsToAdd)
    }

    updateItems( lineItemsToUpdate) {
        this.client.checkout.updateLineItems( this.checkoutId, lineItemsToUpdate)
    }

    removeItems( lineItemIdsToRemove) {
        this.client.checkout.removeLineItems( this.checkoutId, lineItemIdsToRemove).then((checkout) => {
            // Do something with the updated checkout
            console.log(checkout.lineItems); // Checkout with line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' removed
        });
    }

    getCheckout(id) {
        this.client.checkout.fetch( this.checkoutId).then((checkout) => {
            // Do something with the checkout
           return checkout
        });
    }

    discount( discountCode) {
        this.client.checkout.addDiscount( this.checkoutId, discountCode).then(checkout => {
            // Do something with the updated checkout
            console.log(checkout);
        });
    }

    updateShipping(shippingAddress) {
        this.client.checkout.updateShippingAddress(this.checkoutId, shippingAddress).then(checkout => {
            // Do something with the updated checkout
        });
    }

}