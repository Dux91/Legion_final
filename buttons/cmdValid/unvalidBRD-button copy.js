const { MessageEmbed, MessageActionRow, MessageButton, MessageComponentInteraction } = require('discord.js');

const ownerId = [
  '682745227924340739',
  '789215824912580648'
];

module.exports = {
  name: 'unvalidBRD-button',
  async runInteraction(client, interaction) {
    const ressourceNumber = interaction.values;

    const buttons = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('rewardBRD-button')
        .setLabel('Accepter la récompense')
        .setStyle('SECONDARY')
        .setEmoji('854326960586883072')
        .setDisabled(true),

      );

      if (!ownerId.includes(interaction.member.user.id))return interaction.reply({ content: 'Seul un maitre de l\'ombre peut valider ou annuler une mission !', ephemeral: true});

    const embed = new MessageEmbed()
      .setColor('#FF0000')
      .setThumbnail('https://zupimages.net/up/22/25/oxih.png')
      .setTitle('-- Recolte Drunk Shadows--')
      .addFields(
      { name: 'Etat', value: `Mission annulée`},
      { name: 'Récompense', value: `0 <:XP:854326960586883072> *--crédités--*.\n0 <:MC:935563515945705553> *--distribués--*`}
      )
      .setTimestamp()
      .setFooter({ 
        text: interaction.user.username,
        iconURL: interaction.user.displayAvatarURL(),
      });
        

      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true, deferred : true });
  },
};