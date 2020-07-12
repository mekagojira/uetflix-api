const Ratings = require('../../models/ratings')

module.exports = async ({userId, movieId}) => {
    const review = await Ratings.findOne({userId, movieId})
    return review || {}
}
