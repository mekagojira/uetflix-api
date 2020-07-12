const parseNumber = v => {
    return isNaN(v) ? 0 : +v
}

module.exports = ({page = 1, limit = 20}) => {
    const _page = parseNumber(page)
    const _limit = parseNumber(limit)

    const l = _limit > 50 || _limit < 0 ? 20 : _limit
    let skip = (_page - 1) * _limit
    if (skip < 0) skip = 0

    return {
        skip,
        limit: l,
    }
}
