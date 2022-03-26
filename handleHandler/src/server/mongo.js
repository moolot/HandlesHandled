const mongoose = require('mongoose');
/**
* Set to Node.js native promises
* Per https://mongoosejs.com/docs/promises.html
*/
mongoose.Promise = global.Promise;

// eslint-disable-next-line max-len
const mongoUri = "mongodb://botterca:7Epa4RVj2AYsBwauqVV6o2mFZrkPTyYkvlcwsC3PVwlqs8nroLTZVyfmJ941b0TbKPvpKUJMR9a5EjetExvc1w==@botterca.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@botterca@"

function connect() {
mongoose.set('debug', true);
return mongoose.connect(mongoUri);
}

module.exports = {
connect,
mongoose
};