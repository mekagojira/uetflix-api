const User = require('../../models/users')

module.exports = async (_id, update) => {
    const query = {_id}

    return User.findOneAndUpdate(query, update)
}
