const express = require('express');
const Words = require('../../models/WordsSchema');

const router = express.Router();


router.get('/', (req, res) => {
    Words.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

router.post('/', (req, res) => {
    // const wordsItem = new Words({
    //     words: req.body
    // });
    Words.insertMany(req.body).then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    Words.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

router.put('/updateKnowWord', async (req, res) => {
    console.log(req.body);
    const word = req.body;
    const id = word.wordName;
    const update = { knowWord: true };

    await Words.find({ 'words': { $elemMatch: { wordName: id } } });
    //     // await Words.find({"words.wordName": "a"});

    // Words.find({'words': {$elemMatch: {wordName: id}}}, 'words.wordName words.wordTranslate', function (err, docs) {
    //     if (!err) {
    //         console.log(docs);
    //     }
    // });

});

module.exports = router;