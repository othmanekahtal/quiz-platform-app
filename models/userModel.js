const mongoose = require('mongoose')
const {Schema} = mongoose;
const userSchema = new Schema({
        username: {
            type: String,
            required: [true, 'A username is required'],
            unique: true,
            trim: true,
            maxlength: [40, 'A username must have less or equal then 40 characters'],
            minlength: [10, 'A username must have more or equal then 10 characters']
        },
        password: {
            type: String,
            required: [true, 'A password is required'],
            unique: true,
            trim: true,
            maxlength: [40, 'A username must have less or equal then 40 characters'],
            minlength: [10, 'A username must have more or equal then 10 characters']
        },
    },
)
module.exports = mongoose.model('user', userSchema);