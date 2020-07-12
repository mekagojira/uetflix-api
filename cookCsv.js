// mongoimport -d uetflix -c movies --type CSV --file m.csv --headerline

const csv = require('csv-parser')
const fs = require('fs')
const md5 = require('md5')
const createCsvWriter = require('csv-writer').createObjectCsvWriter

const sources = [
    'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
]
const banner = 'https://marketplace.canva.com/EADan0hML-k/1/0/283w/canva-monochromatic-yellow-dark-movie-poster-NWdQdKRW660.jpg'
const data = []
const b = [
    'Liam',
    'Noah',
    'William',
    'James',
    'Oliver',
    'Benjamin',
    'Elijah',
    'Lucas',
    'Mason',
    'Logan',
    'Alexander',
    'Ethan',
    'Jacob',
    'Michael',
    'Daniel',
    'Henry',
    'Jackson',
    'Sebastian',
    'Aiden',
    'Matthew',
    'Samuel',
    'David',
    'Joseph',
    'Carter',
    'Owen',
    'Wyatt',
    'John',
    'Jack',
    'Luke',
    'Jayden',
    'Dylan',
    'Grayson',
    'Levi',
    'Isaac',
    'Gabriel',
    'Julian',
    'Mateo',
    'Anthony',
    'Jaxon',
    'Lincoln',
    'Joshua',
    'Christopher',
    'Andrew',
    'Theodore',
    'Caleb',
    'Ryan',
    'Asher',
    'Nathan',
    'Thomas',
    'Leo',
]
const g = [
    'Emma',
    'Olivia',
    'Ava',
    'Isabella',
    'Sophia',
    'Charlotte',
    'Mia',
    'Amelia',
    'Harper',
    'Evelyn',
    'Abigail',
    'Emily',
    'Elizabeth',
    'Mila',
    'Ella',
    'Avery',
    'Sofia',
    'Camila',
    'Aria',
    'Scarlett',
    'Victoria',
    'Madison',
    'Luna',
    'Grace',
    'Chloe',
    'Penelope',
    'Layla',
    'Riley',
    'Zoey',
    'Nora',
    'Lily',
    'Eleanor',
    'Hannah',
    'Lillian',
    'Addison',
    'Aubrey',
    'Ellie',
    'Stella',
    'Natalie',
    'Zoe',
    'Leah',
    'Hazel',
    'Violet',
    'Aurora',
    'Savannah',
    'Audrey',
    'Brooklyn',
    'Bella',
    'Claire',
    'Skylar',
]

fs.createReadStream('/Users/hihu/Downloads/ml-1m/u.csv')
    .pipe(csv())
    .on('data', row => {
        const {
            userId, gender, age, occupation, zip_code,
        } = row
        const name = gender === 'M' ? b[Math.floor(Math.random() * b.length)] : g[Math.floor(Math.random() * g.length)]
        const n = {
            userId, gender, age, occupation, zip_code, username: userId.toString(), password: md5(userId), name,
        }
        console.log(n)
        data.push(n)

    })
    .on('end', () => {
        const csvWriter = createCsvWriter({
            path: '/Users/hihu/Downloads/ml-1m/us.csv',
            header: [
                {id: 'userId', title: 'userId'},
                {id: 'gender', title: 'gender'},
                {id: 'age', title: 'age'},
                {id: 'occupation', title: 'occupation'},
                {id: 'zip_code', title: 'zip_code'},
                {id: 'username', title: 'username'},
                {id: 'password', title: 'password'},
                {id: 'name', title: 'name'},
            ],
        })

        csvWriter
            .writeRecords(data)
            .then(() => console.log('The CSV file was written successfully'))
    })
