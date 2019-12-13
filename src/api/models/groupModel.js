const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let groupSchema = new Schema({
    nom: {
        type: String,
        required: "Le nom est requis"
    },
});

module.exports = mongoose.model('Group', groupSchema);