const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WordsItemSchema = new Schema({
    words:
        [{
            wordName: {
                type: String,
                required: true
            },
            wordTranslate: {
                type: String,
                required: true,
            },
            examples: [String],
            active: false,
            deleted: false,
            knowWord: false,
        }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = WordsItem = mongoose.model('words', WordsItemSchema);
