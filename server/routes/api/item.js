const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get all items
// @access public
router.get('/', (req, res) => {
	Item.find().sort({ date: -1 }).then((items) => console.log(res.json(items)));
});

// @route POST api/items
// @desc Create an item
// @access public
router.post('/', (req, res) => {
	const newItem = new Item({
		name: req.body.name
	});

	newItem.save().then((item) => console.log(res.json(item)));
});
// @route DELETE api/items
// @desc Delete an item
// @access public
router.delete('/:id', (req, res) => {
	Item.findByIdAndDelete(req.params.id)
		.then((item) => console.log(res.json({ item, success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
