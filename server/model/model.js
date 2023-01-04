const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    ime : {
        type : String,
        required: true
    },
    prezime : {
        type: String,
        required: true,
        unique: true
    },
    datumR : {
        type: String
    },
    pozicija : {
        type: String,
        required: true
    },
    ugovorPocetak : {
        type: String,
        required: true
    },
    ugovorKraj : {
        type: String,
        required: true
    }
})

const Playerdb = mongoose.model('playerdb', schema);

module.exports = Playerdb;