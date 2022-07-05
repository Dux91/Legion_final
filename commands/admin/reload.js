const { Guild } = require('../../models/index');

module.exports = {
  name: 'reload',
  category: 'admin',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: true,
  usage: 'reload',
  examples: ['reload'],
  description: 'Relancer LEGION!',
  async runInteraction( client, interaction ) {
    const devGuild = await client.guilds.cache.get('821889905633394688');
    devGuild.commands.set([]);
    await interaction.reply('LEGION relancé!');
    return process.exit();
  },
};