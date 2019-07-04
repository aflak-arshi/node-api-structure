const {
    Router
} = require('express');
const ApiBase = require('../../base');
const CustomerController = require('./customer.controller');
const CustomerValidator = require('./customer.validator');

/**
 * Api router
 */
class CustomerApi extends ApiBase {
    /**
     * @param {Express} app
     * @return {Router}
     */
    constructor(app) {
        super(app);

        const {
            createCustomer: createCustomerValidator
        } = new CustomerValidator();
        const {
            createCustomer
        } = new CustomerController(app);

        this.router.use('/customers', new Router().post('/', createCustomerValidator, createCustomer));

        return this.router;
    }

    /**
     * API version
     */
    get VERSION() {
        return '1';
    }
}

module.exports = CustomerApi;