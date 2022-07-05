const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'initDrunkShadows-button',
  async runInteraction(client, interaction) {

    const buttonsDrunkShadows = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId('initDrunkShadows-button')
      .setLabel('Initialiser la mission')
      .setStyle('SECONDARY')
      .setEmoji('831196656434937856')
      .setDisabled(true),
    );

    const buttonsInitDrunkShadows = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId('validDrunkShadows-button')
      .setLabel('Valider la mission')
      .setStyle('SECONDARY')
      .setEmoji('831196656434937856'),
        
      new MessageButton()
      .setCustomId('unvalidDrunkShadows-button')
      .setLabel('Annuler la mission')
      .setStyle('SECONDARY')
      .setEmoji('831197387153211462'),  
    );

  const embedMember = new MessageEmbed()
    .setColor('#008000')
    .setThumbnail('https://zupimages.net/up/22/24/3snn.png')
    .setTitle('-- Recolte Drunk Shadows--')
    .addFields(
    { name: 'Etat', value: `En attente de livraison`},
    )
    .setTimestamp()
    .setFooter({ 
      text: interaction.user.username,
      iconURL: interaction.user.displayAvatarURL(),
    });

    await interaction.update({content: ' ', components: [buttonsDrunkShadows],fetchReply: true, deferred : true});
    
    await interaction.followUp({ content: ' ', embeds: [embedMember], components: [buttonsInitDrunkShadows], fetchReply: true, deferred : true });
  },
};