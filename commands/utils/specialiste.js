const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const buttons = new MessageActionRow()
  .addComponents(
    new MessageButton()
      .setCustomId('ingenieur-button')
      .setLabel('Ingénieur')
      .setStyle('PRIMARY')
      .setEmoji('987127230339633194')
      .setDisabled(false),

      new MessageButton()
      .setCustomId('eclaireur-button')
      .setLabel('Eclaireur')
      .setStyle('SECONDARY')
      .setEmoji('987127120222371850')
      .setDisabled(false),

      new MessageButton()
      .setCustomId('soutien-button')
      .setLabel('Soutien')
      .setStyle('SUCCESS')
      .setEmoji('987127356252631080')
      .setDisabled(false),

      new MessageButton()
      .setCustomId('artilleur-button')
      .setLabel('Artilleur')
      .setStyle('DANGER')
      .setEmoji('987127053079949442')
      .setDisabled(false),
  )

const specialistEmbed = new MessageEmbed()
  .setColor('#000000')
  .setThumbnail('https://zupimages.net/up/22/24/dg3k.png')
  .setTitle('**------------------- SPECIALISTE -------------------**')
  .setDescription('Choisis une spécialité!')
  .setTimestamp();


module.exports = {
  name: 'specialiste',
  category: 'utils',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: true,
  usage: 'specialiste',
  examples: ['specialiste'],
  description: 'La commande specialiste permet de proposer le choix d\'une spécialité!',
  async run(client, message, args) {
    await message.channel.send({ embeds: [specialistEmbed], components: [buttons] });
  },
  async runInteraction(client, interaction) {
    await interaction.reply({ embeds: [specialistEmbed], components: [buttons] });
  },
};