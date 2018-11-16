
const express = require('express')
const router = express.Router();

const ItemModel = require('../../models/Item');

// @route GET api/
// @desc Get all items
// @acces Public
router.get('/', (req, res) => {
	ItemModel.find()
		.then(items => res.json(items))
})

//@route PUT api/update
//@desc Updates old data
//@acces Public
router.put('/update', (req, res)=>{
	ItemModel.deleteMany({})
		.then(()=>{
			ItemModel.insertMany(req.body)
		}).then(()=>{
			res.status(200).json({"success":"true"})
		})
})

module.exports = router;


