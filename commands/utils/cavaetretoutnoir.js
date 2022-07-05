module.exports = {
  name: 'cavaetretoutnoir',
  category: 'utils',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: true,
  usage: 'cavaetretoutnoir',
  examples: ['cavaetretoutnoir' ],
  description: 'Bonjour version Dux',

  async runInteraction(client, interaction) {
    const text = interaction.options.getString('text');

    await interaction.reply({ content: 'https://tenor.com/view/rrrrrr-cavaetretoutnoir-rrrr-cavaetretoutnoir-robins-des-bois-gif-14740954'}); 
  }
};