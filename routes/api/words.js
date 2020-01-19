const express = require('express');
const WordsItem = require('../../models/wordsItem');

const router = express.Router();


router.get('/', (req, res) => {
    WordsItem.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

router.post('/', (req, res) => {
    console.log("Post: ", req.body);
    const wordsItem = new WordsItem({
        words: req.body
    });
    wordsItem.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    WordsItem.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

router.put('/updateKnowWord', (req, res) => {
    console.log("Elo");
});

module.exports = router;