const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	result: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	}
}); 

module.exports = Item = mongoose.model('item', ItemSchema);