const Joi = require('joi');
const JoiValidate = require('../../../helpers/joiValidate');

class CustomerValidator {
    /**
     * Request Validators
     */
    constructor() {
        this.createCustomer = new JoiValidate({
            'body': {
                'schema': Joi.object().keys({
                    name: Joi.string().trim().min(3).max(50).required(),
					email: Joi.string().email().required(),
					bio: Joi.string().trim().max(500),
                }).unknown(),
            },
        });
    }
}

module.exports = CustomerValidator;