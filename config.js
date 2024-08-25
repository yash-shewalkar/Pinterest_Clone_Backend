const dotenv = require('dotenv')

dotenv.config()

const configure ={
    db_uri: process.env.MONGO_URI
}

module.exports = configure