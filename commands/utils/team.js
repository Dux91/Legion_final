const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const buttons = new MessageActionRow()
  .addComponents(
      new MessageButton()
      .setCustomId('joueur2-button')
      .setLabel('Joueur 2')
      .setStyle('SECONDARY')
      .setEmoji('990564657951539290')
      .setDisabled(false),

      new MessageButton()
      .setCustomId('joueur3-button')
      .setLabel('Joueur 3')
      .setStyle('SECONDARY')
      .setEmoji('990564743179808808')
      .setDisabled(false),

      new MessageButton()
      .setCustomId('joueur4-button')
      .setLabel('Joueur 4')
      .setStyle('SECONDARY')
      .setEmoji('990564819134468106')
      .setDisabled(false),
  )

module.exports = {
  name: 'team',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: true,
  usage: 'team',
  examples: ['team'],
  description: 'La commande team permet de composer une équipe de plusieurs joueurs!',
  async runInteraction(client, interaction) {
    const Team = ('990571471548067890');

    if (interaction.channelId !== Team)return interaction.reply({ content:'Cette commande doit être initialisée par un grade Capitaine ou plus dans le salon <#990571471548067890>!**', ephemeral: true });

    const teamEmbed = new MessageEmbed()
    .setColor('#000000')
    .setThumbnail('https://zupimages.net/up/22/24/dg3k.png')
    .setTitle('**------------------- EQUIPE -------------------**')
    .setDescription('Un <:teamleader:990564559616081920> Capitaine monte une équipe')
    .setTimestamp()
    .setFooter({ 
      text: interaction.user.username,
      iconURL: interaction.user.displayAvatarURL(),
    });
    await interaction.reply({ embeds: [teamEmbed], components: [buttons], deferred: true, fetchReply: true });
  },
};