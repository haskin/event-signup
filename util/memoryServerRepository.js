const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

module.exports.connect = async () => {
    const uri = await mongod.getConnectionString();

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // reconnectTries: Number.MAX_VALUE,
        // reconnectInterval: 1000
    };

    await mongoose.connect(uri, options);
};

module.exports.disconnect = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}


