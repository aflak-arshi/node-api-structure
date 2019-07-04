// Library imports
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

// Custom imports
const config = require('./config/index');
const Logger = require('./utils/logger');
const { debug } = new Logger();
const routes = require('../server/apis');

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log(`Connected to mongoDB databasse`)
    })
    .catch(err => {
        console.log(err);
    });

debug(`Starting app with NODE_ENV=%s`, config.env);

const app = express();
 
if (config.env === 'development') {
    app.use(morgan('dev'));
}

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));


// Custom Routes
routes(app);

module.exports = app;