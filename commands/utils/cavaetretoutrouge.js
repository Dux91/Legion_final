const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
  name: 'cavaetretoutrouge',
  category: 'utils',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: true,
  usage: 'cavaetretoutrouge',
  examples: ['cavaetretoutrouge' ],
  description: 'Lucky et ses vaisseaux!',

  async runInteraction(client, interaction) {
    const embed = new MessageEmbed()
    .setColor('#FF0000')
    .setThumbnail('https://zupimages.net/up/22/25/qmtc.jpg')
    .setTitle('Comme les vaisseaux de joh bard "lucky" qui sont trop BADASS!');

    await interaction.reply({ content: ' ', embeds: [embed]}); 
  }
};
