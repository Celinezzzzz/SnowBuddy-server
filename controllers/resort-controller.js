const knex = require("knex")(require("../knexfile"));

const getAllResortItems = async (_req, res) => {
	try {
		const data = await knex("resorts");
		res.status(200).json(data);
	} catch (error) {
		res.status(400).send(`Error retrieving resorts: ${error}`);
	}
};


//GET single warehouse
const getResortItemById = async (req, res) => {
	try {
		const foundId = await knex("resorts")
			.where({ id: req.params.id})
			.first();
		if (!foundId) {
			return res.status(404).json({message: `Could not find resort with: ${req.params.id}`})
		}

		res.json(foundId);

	} catch (error) {
		console.error(error);
		res.status(400).send(`Error retrieving resort: ${error}`);
	}
};

module.exports = {
	getAllResortItems, 
    getResortItemById
};