const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(cors());

//DB config
const db = require('./config/keys').mongoURI;

//Connect db to server

mongoose.connect(db, {useNewUrlParser: true})
	.then(() => console.log (`MongoDB is connected`))
	.catch((err) => console.log(err));

const port = process.env.PORT || 1234;

app.use('/api/', items);

app.listen(port, () => console.log(`Server is running on port ${port}`));