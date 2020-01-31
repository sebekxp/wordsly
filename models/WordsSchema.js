const mongoose = require('mongoose');

const {Schema} = mongoose;

const WordsSchema = new Schema({

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

module.exports = Words = mongoose.model('words', WordsSchema);
