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
});

module.exports = Words = mongoose.model('words', WordsSchema);
