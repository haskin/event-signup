const mongoose = require('mongoose');

// Get process.env properities from config file
const config = require('./util/config');
const DB = `${config.MONGO_URI}/${config.DB_NAME}`;

module.exports.connect = async () => {
    mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	}) 
	.then(() => console.log('Database connected successfully...'))
	.catch(err => console.log(err));
};

module.exports.disconnect = async () => {
    mongoose.connection.close()
        .then(() => console.log('Database closed successfully...'))
        .catch((err) => console.log(err));
};