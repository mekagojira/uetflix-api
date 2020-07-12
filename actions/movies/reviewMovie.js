const Reviews = require('../../models/ratings')

const getExistedReview = async ({movieId, userId}) => {
    const query = {movieId, userId}
    return Reviews.findOne(query).lean()
}

const reRating = async ({rating, comment, movieId, userId}) => {
    const query = {movieId, userId}
    const timestamp = (new Date()).getTime()
    const update = {rating, comment, timestamp}
    await Reviews.findOneAndUpdate(query, update)
    return true
}

const createRating = async ({rating, comment, movieId, userId}) => {
    const timestamp = (new Date()).getTime()
    const newQuery = new Reviews({rating, comment, movieId, userId, timestamp})
    await newQuery.save()
    return true
}

module.exports = async ({rating, comment, movieId, userId}) => {
    const existedRating = await getExistedReview({movieId, userId})

    if (existedRating) return reRating({rating, comment, movieId, userId})
    return createRating({rating, comment, movieId, userId})
}
