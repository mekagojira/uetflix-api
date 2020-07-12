const Movies = require('../../models/movies')
const Ratings = require('../../models/ratings')
const Users = require('../../models/users')

const findUser = async ratings => {
    const {userId} = ratings
    const user = await Users.findOne({userId}).lean()

    return {
        ...ratings,
        user,
    }
}

module.exports = async movieId => {
    const query = {movieId: +movieId}
    const movie = await Movies.findOne(query).lean()

    if (!movie) throw new Error('Can not find movie')
    const ratings = await Ratings.find({movieId: +movieId}).sort({timestamp: -1}).lean()

    const avg = ratings.reduce((result, {rating}) => result + rating, 0)
    const total = ratings.length

    const fewRatings = ratings.slice(0, 20)
    const m = await Promise.all(fewRatings.map(findUser))
    return {avg: avg / total, total, ratings: m}
}
