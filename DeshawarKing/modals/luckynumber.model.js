const mongoose = require('mongoose');
const SattaKing = mongoose.connection.useDb('SattaKing');

const LuckySchema = mongoose.Schema({
    luckyTitle:{
        type:String,
        require:false
    },
    luckyBody:{
        type:String,
        require:false
    },
    isLinkButton:{
        type:Boolean,
        require:false
    },
    buttonLink:{
        type:String,
        require:false
    },
    buttonTxt:{
        type:String,
        require:false
    }

}, {collection: 'LuckyNumber'});

const LuckyNumber = SattaKing.model('LuckyNumber', LuckySchema);

module.exports = LuckyNumber;