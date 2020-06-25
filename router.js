
const assert = require('assert');
const express = require("express");
const router = express.Router();
// Middleware to parse json requests
router.use(express.json())


// Get process.env properities from config file
const config = require('./util/config')


// Check to see if config is not falsy value
assert(!!config === true);

const DB = `${config.MONGO_URI}/${config.DB_NAME}`

const mongoose = require('mongoose');
// Connect to MongoDB Atlast
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	}) 
	.then(() => console.log('Database connected succesfully...'))
	.catch(err => console.log(err));

// Check that mongoose was connected
assert(!!mongoose === true);

// Models
const Registree = require('./models/Registree');


router.get('/api/registrees', async (req, res) => {
	try{
		const registrees = await Registree.find().sort({date: -1});
		// Check that the database returned an array
		assert(Array.isArray(registrees));
		res.status(201).json(registrees);
	}catch(error){
		res.status(400).send(error);
	}
});

router.post('/api/registrees', async (req, res) => {
	try{
		const newRegisteree = new Registree(req.body);
		newRegisteree.save()
			.then( (registree) => res.status(200).send({error:false}) )
			.catch(error => {
				// Database duplicate error code
				if(error.code === 11000){
					res.status(409).send({
						error:true,
						message:"This email is taken. Please try another one."
					});
				}
				// Should be a validation error
				else{
					res.status(400).send({
							error:true,
							message:error.message
					});
				}
			});
	}catch(error){
		res.status(400).send({message:"Unexpected error. Couldn't save to database."});
	};
});

module.exports = router;