const CustomerApiV1 = require('./v1/customers/customer.routes');

module.exports = (app) => {
    // Load API Routes
    app.use('/v1', new CustomerApiV1(app));

    // --------
    // Load other routes
	// --------

    app.get('/health_check', (req, res) => {
        res.sendStatus(200);
    });
};
