const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordItemSchema = new Schema({
    wordName: {
        type: String,
        required: true
    },
    wordTranslate: {
        type: String,
        required: true,
    },
    examples: [String],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = WordItem = mongoose.model('word', WordItemSchema);
