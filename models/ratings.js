const name = 'ratings'
const {Schema, model} = require('mongoose')

const Ratings = new Schema({
    userId: {
        type: Number,
        required: true,
    },
    movieId: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
    },
    timestamp: {
        type: Number,
    },
})

Ratings.index({userId: 1, movieId: 1})

module.exports = model(name, Ratings, name)
