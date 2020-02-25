const express = require('express');
const Words = require('../../Models/WordsSchema');

const router = express.Router();

// @route GET api/users/login
// @desc Get collection of words
// @access Public
// noinspection JSUnresolvedFunction
router.get('/', (req, res) => {
    Words.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// @route POST api/users/login
// @desc Create collections of words
// @access Public
// noinspection JSUnresolvedFunction
router.post('/', (req, res) => {
    Words.insertMany(req.body).then(item => res.json(item));
});

// @route DELETE api/users/login
// @desc Delete single word form collection
// @access Public
// noinspection JSUnresolvedFunction
router.delete('/:id', (req, res) => {
    Words.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        // TODO I'm not mistaken here?
        .catch(err => res.status(404).json({ success: false })); // eslint-disable-line no-unused-vars
});

// noinspection JSUndefinedPropertyAssignment
module.exports = router;