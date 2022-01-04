const mongoose = require("mongoose");
const {Schema} = mongoose;
const {isEmail} = require('validator');
const {hashingPassword,getFullName,correctPassword} =  require('../middlewares/models/userMiddleware')
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"],
            unique: true,
            trim: true,
            maxlength: [26, "A username must have less or equal then 26 characters"],
            minlength: [6, "A username must have more or equal then 6 characters"],
        },
        first_name: {
            type: String,
            required: [true, "first name is required"],
            trim: true,
            maxlength: [26, "A first name must have less or equal then 26 characters"],
        },
        last_name: {
            type: String,
            required: [true, "last name is required"],
            trim: true,
            maxlength: [26, "A last name must have less or equal then 26 characters"],
        },
        email: {
            type: String,
            required: [true, "email is required 1"],
            unique: true,
            trim: true,
            validate: {
                message: 'An email is not valid !',
                validator: isEmail
            }
        },
        password: {
            type: String,
            required: [true, "A password is required"],
            maxlength: [40, "A username must have less or equal then 40 characters"],
            minlength: [10, "A username must have more or equal then 10 characters"],
            select: false,
        },
        confirm_password: {
            type: String,
            required: [true, "Please confirm your password"],
            validate: {
                message: "passwords will be the same",
                validator: function (currentField) {
                    return this.password === currentField
                }
            }
        },
        //:fire:
        image_cover: {
            type: String,
            // required: [true, 'An user must have a cover image'],
            default:'https://www.pngkey.com/png/full/65-658471_happy-man-png.png'
        },
        created_at: {
            type: Date,
            default: Date.now(),
        }
    },
    {
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        },
    }
);
userSchema.virtual('full_name').get(getFullName);
userSchema.pre('save', hashingPassword);
userSchema.methods.correctPassword = correctPassword;
module.exports = mongoose.model("user", userSchema);
