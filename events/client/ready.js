const Logger = require('../../utils/Logger');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    Logger.client('- Nous sommes LEGION!');

    // const devGuild = await client.guilds.cache.get('821889905633394688');
    // devGuild.commands.set(client.commands.map(cmd => cmd));
    client.application.commands.set(client.commands.map(cmd => cmd));
  },
};