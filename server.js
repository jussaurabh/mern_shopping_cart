const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Import Routes
const item = require('./server/routes/api/item');

const app = express();

app.use(bodyParser.json());

// DB Config
const db = require('./server/config/keys').mongodbURI;

// Connect to Database
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDb Connected!!!'))
	.catch((err) => console.log('Connection ERROR!!! ', err));

// Routes
app.use('/api/items', item);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
