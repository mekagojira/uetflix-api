const Movies = require('../../models/movies')

module.exports = async movieId => {
    const query = {movieId: +movieId}
    const movie = await Movies.findOne(query).lean()

    if (!movie) throw new Error('Can not find movie')
    return movie
}
