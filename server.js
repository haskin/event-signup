const express = require('express');
const dotenv = require('dotenv');
const router = require('./router');
const app = express();
app.use("/", router);
// Middleware to parse json requests
app.use(express.json());

const config = require('./util/config')

// Server static assets
const path = require('path');
if(process.env.NODE_ENV === 'production'){
	// Static folder
	app.use(express.static('client/build'));
	// Any path that isn't API
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
});