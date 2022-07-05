const { Guild } = require('../../models/index');

module.exports = {
  name: 'update',
  category: 'admin',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: true,
  usage: 'update',
  examples: ['update'],
  description: 'Mettre à jour les nouvelles données',
  async runInteraction( client, interaction ) {
    await Guild.updateMany({}, {"$set": { "testChannel": "85585222252" }, upsert: true});
    interaction.reply('Nouvelles données ajoutées!');
  },
};