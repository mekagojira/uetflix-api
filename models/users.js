const {Schema, model} = require('mongoose')

const name = 'users'

const User = new Schema({
    username: {
        type: String,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['M', 'F'],
    },
    age: {
        type: Number,
        required: true,
    },
    occupation: {
        type: String,
    },
    zip_code: {type: String},
})

User.index({username: 1, userId: 1}, {unique: true})

module.exports = model(name, User, name)
