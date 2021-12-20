const mongoose = require('mongoose');
// we need to getting schema class in mongoose:
module.exports = function () {
    const db = process.env.HOSTED_DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
    mongoose.connect(db)
        .then(() => console.log('connected successfully!'))
        .catch(() => console.log('error happens!'));
    return mongoose;
};
