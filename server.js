const express = require('express');
const app = express();
// Middleware 
app.use(express.json());
const mongoose = require('mongoose');
require('dotenv').config();



// Models
const Registree = require('./models/Registree');


const DB = `${process.env.MONGO_URI}/${process.env.DB_NAME}`
// Connect to MongoDB Atlast
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	}) // Adding new mongo url parser
	.then(() => console.log('Database connected succesfully...'))
	.catch(err => console.log(err));

app.get('/api/registrees', async (req, res) => {
	console.log('in get ');
	const registrees = await Registree.find().sort({date: -1});
	res.json(registrees);
	
});

app.post('/api/registrees', async (req, res) => {
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
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
});