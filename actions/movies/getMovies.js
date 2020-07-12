const Movies = require('../../models/movies')
const parsePaging = require('../../helpers/paging')

const _g = [
    'Adventure',
    'Children',
    'Fantasy',
    'Comedy',
    'Romance',
    'Action',
    'Crime',
    'Thriller',
    'Drama',
    'Animation',
    'Horror',
    'Mystery',
    'Sci-Fi',
    'War',
    'Musical',
    'Documentary',
    'IMAX',
    'Western',
    'Film-Noir',
]

module.exports = async query => {
    let {skip, limit} = parsePaging(query)
    const {genres: g, page: p, limit: l, title, random, ...rest} = query
    const genres = (g || '').trim().toLowerCase()

    if (genres) {
        rest['genres'] = {
            $regex: genres,
            $options: 'i',
        }
    }

    if (title) {
        rest['title'] = {
            $regex: title,
            $options: 'i',
        }
    }

    const ___g = _g[Math.floor(Math.random() * _g.length)]

    if (random) {
        rest['genres'] = {
            $regex: ___g,
        }
    }

    const findQuery = Movies.find(rest)
        .select('-__v')
        .skip(skip)
        .sort({movieId: 1})
        .limit(limit)
        .lean()
    const countQuery = Movies.countDocuments(rest)

    const [data, total] = await Promise.all([findQuery, countQuery])

    return {data, total, rengres: ___g}
}
