const mongoose = require('mongoose');

mongoose.connect(process.env.db.url)
    .then(() => {
        console.log(`Connected to mongoDB databasse`)
    })
    .catch(err => {
        console.log(err);
    });


module.exports = mongoose;