const express = require('express');
const WordsItem = require('../../models/wordsItem');

const router = express.Router();


router.get('/', (req, res) => {
    WordsItem.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

router.post('/', (req, res) => {
    console.log('Post: ', req.body);
    // const wordsItem = new WordsItem({
    //     words: req.body
    // });
    WordsItem.insertMany(req.body).then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    WordsItem.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

router.put('/updateKnowWord', async (req, res) => {
    console.log(req.body);
    const word = req.body;
    const id = word.wordName;
    const update = { knowWord: true };

    await WordsItem.find({ 'words': { $elemMatch: { wordName: id } } });
    //     // await WordsItem.find({"words.wordName": "a"});

    // WordsItem.find({'words': {$elemMatch: {wordName: id}}}, 'words.wordName words.wordTranslate', function (err, docs) {
    //     if (!err) {
    //         console.log(docs);
    //     }
    // });

});

module.exports = router;