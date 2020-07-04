const {sendSuccess, sendError} = require('../helpers/response')

exports.ping = (req, res) => {
    sendSuccess(req, res)('UET-FLIX')
}
