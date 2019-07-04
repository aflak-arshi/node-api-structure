const {
    Response,
    HttpCodes
} = require('../../../helpers/response');
const Logger = require('../../../utils/logger');

class CustomerController {
    /**
     * Customer API middleware
     */
    constructor() {
        this.logger = new Logger();
        this.createCustomer = this.createCustomer.bind(this);
    }

    /**
     * Create a new customer
     * @param {Object} req
     * @param {Object} res
     */
    createCustomer(req, res) {
        let {
            info
        } = this.logger;
        let response = new Response(req, res);

        info('New user created: %s', req.body.email);
        
		response.status(HttpCodes.CREATED).data(req.body).send();
    }
}

module.exports = CustomerController;