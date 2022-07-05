const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setCustomId('joueur2-button')
    .setLabel('Joueur 2')
    .setStyle('SECONDARY')
    .setEmoji('990564657951539290')
    .setDisabled(true),

    new MessageButton()
    .setCustomId('joueur3-button')
    .setLabel('Joueur 3')
    .setStyle('SECONDARY')
    .setEmoji('990564743179808808'),

    new MessageButton()
    .setCustomId('joueur4-button')
    .setLabel('Joueur 4')
    .setStyle('SECONDARY')
    .setEmoji('990564819134468106'),
  )

module.exports = {
  name: 'joueur2-button',
  async runInteraction(client, interaction) {
    await interaction.update({components: [buttons]});
    await interaction.followUp({content: `joueur 2 = ${interaction.member.user.tag}` });
  },
};