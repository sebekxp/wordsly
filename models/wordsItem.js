const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WordsItemSchema = new Schema({

    wordName: {
        type: String,
        required: true
    },
    wordTranslate: {
        type: String,
        required: true
    },
    examples: [String],
    active: false,
    deleted: false,
    knowWord: false

});

module.exports = WordsItem = mongoose.model('words', WordsItemSchema);
