const {sendSuccess, sendError} = require('../helpers/response')
const movieActions = require('../actions/movies')

exports.reviewMovie = async (req, res) => {
    const _sendSuccess = sendSuccess(req, res)
    const _sendError = sendError(req, res)

    try {
        const {rating, comment} = req.body
        const {id: movieId} = req.params
        const {userId} = req.user
        const data = await movieActions.reviewMovie({rating, comment, movieId, userId})
        return _sendSuccess(data)
    } catch (e) {
        return _sendError(e)
    }
}

exports.getOwnReview = async (req, res) => {
    const _sendSuccess = sendSuccess(req, res)
    const _sendError = sendError(req, res)

    try {
        const {id: movieId} = req.params
        const {userId} = req.user
        const data = await movieActions.getOwnReview({movieId, userId})
        return _sendSuccess(data)
    } catch (e) {
        return _sendError(e)
    }
}

exports.getMovies = async (req, res, next) => {
    const _sendSuccess = sendSuccess(req, res)
    const _sendError = sendError(req, res)

    try {
        const data = await movieActions.getMovies(req.query || {})
        return _sendSuccess(data)
    } catch (e) {
        return _sendError(e)
    }
}

exports.getMovieRatings = async (req, res) => {
    const _sendSuccess = sendSuccess(req, res)
    const _sendError = sendError(req, res)

    try {
        const {id} = req.params
        const data = await movieActions.getMovieRatings(id)
        return _sendSuccess(data)
    } catch (e) {
        return _sendError(e)
    }
}

exports.getMovie = async (req, res) => {
    const _sendSuccess = sendSuccess(req, res)
    const _sendError = sendError(req, res)

    try {
        const {id} = req.params
        const data = await movieActions.getMovie(id)
        return _sendSuccess(data)
    } catch (e) {
        return _sendError(e)
    }
}
