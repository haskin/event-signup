const dotenv = require('dotenv');

// Load .env file into process.env
dotenv.config();

module.exports = config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    DB_NAME: process.env.DB_NAME
};