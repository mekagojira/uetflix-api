const name = 'movies'
const {Schema, model} = require('mongoose')

const Movie = new Schema({
    movieId: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        trim: true,
    },
    genres: {
        type: String,
        trim: true,
    },
    source: {
        type: String,
        trim: true,
    },
    banner: {
        type: String,
    },
})

Movie.index({movieId: 1})

module.exports = model(name, Movie, name)
