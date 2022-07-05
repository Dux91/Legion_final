const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'initBRD-button',
  async runInteraction(client, interaction) {

    const buttonsBRD = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId('initBRD-button')
      .setLabel('Initialiser la mission')
      .setStyle('SECONDARY')
      .setEmoji('831196656434937856')
      .setDisabled(true),
    );

    const buttonsInitBRD = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId('validBRD-button')
      .setLabel('Valider la mission')
      .setStyle('SECONDARY')
      .setEmoji('831196656434937856'),
        
      new MessageButton()
      .setCustomId('unvalidBRD-button')
      .setLabel('Annuler la mission')
      .setStyle('SECONDARY')
      .setEmoji('831197387153211462'),  
    );

  const embedMember = new MessageEmbed()
    .setColor('#9B00FF')
    .setThumbnail('https://zupimages.net/up/22/25/oxih.png')
    .setTitle('-- Black Rocket Delivery--')
    .addFields(
    { name: 'Etat', value: `En attente de livraison`},
    )
    .setTimestamp()
    .setFooter({ 
      text: interaction.user.username,
      iconURL: interaction.user.displayAvatarURL(),
    });

    await interaction.update({content: ' ', components: [buttonsBRD],fetchReply: true, deferred : true});
    
    await interaction.followUp({ content: ' ', embeds: [embedMember], components: [buttonsInitBRD], fetchReply: true, deferred : true });
  },
};