const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongooseParams = {
    useUnifiedTopology : true,
    useNewUrlParser: true,
    useCreateIndex: true
}

//mongoose.connect('mongodb://mongo/apinodeipssi', mongooseParams); // docker (mongo = nom du container)
mongoose.connect('mongodb://localhost:27017/apinodeipssi', mongooseParams); // windows

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

const userModel = require('./api/models/userModel');
const groupModel = require('./api/models/groupModel');

const userRoute = require('./api/routes/userRoute');
userRoute(app);

const groupRoute = require('./api/routes/groupRoute');
groupRoute(app);

app.listen(port, hostname);
