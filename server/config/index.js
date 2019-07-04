module.exports = {
    env: process.env.NODE_ENV || 'development',
    server: {
        port: process.env.PORT || 5000
    },
    logging: {
        level: process.env.LOG_LEVEL || 'debug'
    },
    db: {
        url: process.env.MONGO_URL || "mongodb://localhost:27017/nodejs-api-demo"
    }
};