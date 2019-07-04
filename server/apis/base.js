const { Router } = require('express');

/**
 * Api router
 */
class ApiBase {
    /**
     * @param {Express} app
     */
    constructor() {
        this.router = new Router();
        this.router.use((req, res, next) => {
            req.apiVersion = this.VERSION;
            next();
        });
    }
}

module.exports = ApiBase;