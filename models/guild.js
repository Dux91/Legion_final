const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    guildId: String,
    prefix: { 'type': String, 'default': '!'},
    logChannel: { 'type': String, 'default': '821889905633394691'}
});

module.exports = mongoose.model('guild', guildSchema);