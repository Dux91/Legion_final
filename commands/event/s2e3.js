const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 's2e3',
  category: 'event',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 's2e3',
  examples: ['s2e3'],
  description: 'Récompense saison 2 épisode 3!',
  async runInteraction(client, interaction) {
    const EventLogistic = ('832612595462176828');

    const embed = new MessageEmbed()
      .setTitle('Saison 2 - épisode 3')
      .setThumbnail('https://zupimages.net/up/22/27/r0e4.png')
      .addFields(
        { name: 'Récompenses', value: `800 <:XP:854326960586883072>\n20000 <:MC:935563515945705553>` },
        { name: 'Lore supplémentaire', value: `Tapes la commande /asura` },
        )
      .setTimestamp()
      .setFooter({ 
        text: interaction.user.username, 
        iconURL: interaction.user.displayAvatarURL(),
      });
      const buttons = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setCustomId('validS2e3-button')
          .setLabel('Valider la mission')
          .setStyle('SECONDARY')
          .setEmoji('831196656434937856'),
              
          new MessageButton()
          .setCustomId('unvalidS2e3-button')
          .setLabel('Annuler la mission')
          .setStyle('SECONDARY')
          .setEmoji('831197387153211462'),
      
        );

    if (interaction.channelId !== EventLogistic)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#832612595462176828>!', ephemeral: true });    
    
    interaction.reply({ content: ' ', embeds: [embed], components: [buttons],  fetchReply: true  })  
  }
};