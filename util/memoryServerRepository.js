const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Registrees = require('../models/Registree');

const mongod = new MongoMemoryServer();

module.exports.connect = async () => {
    const uri = await mongod.getConnectionString();
    // console.log('In test database');
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // reconnectTries: Number.MAX_VALUE,
        // reconnectInterval: 1000
    };

    await mongoose.connect(uri, options);
};

module.exports.disconnect = async () => {
    await Registrees.deleteMany({});
    // await mongoose.connection.collections[modelName].drop();
    // await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}


