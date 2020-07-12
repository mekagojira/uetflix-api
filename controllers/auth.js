const {sendSuccess, sendError} = require('../helpers/response')
const {verify} = require('../helpers/jwt')

const authActns = require('../actions/auth')

exports.authMiddleware = async (req, res, next) => {
    const {authorization} = req.headers
    const token = (authorization + '').replace('Bearer ', '')

    try {
        const a = verify(token)
        if (!a._id)
            return res
                .status(403)
                .json({success: false, message: 'Unauthorized'})

        req.user = a
        next()
    } catch (e) {
        res.status(403).json({success: false, message: 'Unauthorized'})
    }
}

exports.postInformation = async (req, res) => {
    const _sendSuccess = sendSuccess(req, res)
    const _sendError = sendError(req, res)

    try {
        const args = {...req.body}
        const {_id} = req.user
        const data = await authActns.postInformation(_id, args)
        return _sendSuccess(data)
    } catch (e) {
        return _sendError(e)
    }
}

exports.testAuth = (req, res) => {
    sendSuccess(req, res)(req.user)
}

exports.register = async (req, res) => {
    const _sendSuccess = sendSuccess(req, res)
    const _sendError = sendError(req, res)
    const args = {...req.body}

    try {
        const data = await authActns.register(args)
        return _sendSuccess(data)
    } catch (e) {
        return _sendError(e)
    }
}

exports.login = async (req, res) => {
    const _sendSuccess = sendSuccess(req, res)
    const _sendError = sendError(req, res)
    const args = {...req.body}

    try {
        const data = await authActns.login(args)
        return _sendSuccess(data)
    } catch (e) {
        return _sendError(e)
    }
}
