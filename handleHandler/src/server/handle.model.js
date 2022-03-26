const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const handleSchema = new Schema(
    {
        uid: { type: Number, required: true, unique: true },
        handle: String,
        platform: String,
        seller: String,
        price: String,
        availability: String
    },
    {
        collection: 'Handles'
    }
);

const Handle = mongoose.model('Handle', handleSchema);

module.exports = Handle;