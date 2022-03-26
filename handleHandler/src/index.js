const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongoUri = "mongodb://botterca:7Epa4RVj2AYsBwauqVV6o2mFZrkPTyYkvlcwsC3PVwlqs8nroLTZVyfmJ941b0TbKPvpKUJMR9a5EjetExvc1w==@botterca.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@botterca@"


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const routes = require('./routes');

const root = './';
const port = process.env.PORT || '3000';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'dist')));
//app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile('dist/index.html', {root: root});
});

app.listen(port, () => console.log(`API running on localhost:${port}`));