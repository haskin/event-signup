
const assert = require('assert');
const express = require("express");
const router = express.Router();
// Middleware to parse json requests
router.use(express.json())

const database = require("./database");
const Registree = require('./models/Registree');

router.get('/api/registrees', async (req, res) => {
	try{
        await database.connect();
        const registrees = await Registree.find();
        // const registrees = await Registree.find().sort({date: -1});
        await database.disconnect();
        // console.log((await Registree.find({firsName:'Bob'})).length);
		// Check that the database returned an array
        assert(Array.isArray(registrees));
        if(registrees.length === 0)
            res.status(204).json([]);
        else
		    res.status(200).json(registrees);
	}catch(error){
        await database.disconnect()
		res.status(400).send(error);
	}
});

router.post('/api/registrees', async (req, res) => {
	try{
        await database.connect();
        const newRegisteree = new Registree(req.body);
		newRegisteree.save()
			.then(async (registree) => {
                await database.disconnect();
                res.status(201).send({error:false}) 
			})
			.catch(async (error) => {
				await database.disconnect();
				// Database duplicate error code
				if(error.code === 11000){
					res.status(409).send({
						error:true,
						message:"This email is taken. Please try another one."
					});
				}
				// Should be a validation error
				else {
					res.status(400).send({
							error:true,
							message:error.message
					});
				}
			})
	}catch(error){
		res.status(400).send({message:"Unexpected error. Couldn't save to database."});
	}
});

module.exports = router;