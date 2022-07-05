const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    userId: String,
    xp: { 'type': Number, 'default': '1'},
    level: { 'type': Number, 'default': '1'},
    xpToLvlUp: { 'type': Number, 'default': '600'}
});

const Member = mongoose.model('member', memberSchema);

module.exports = Member