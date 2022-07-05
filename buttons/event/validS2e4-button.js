const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const ownerId = [
  '682745227924340739',
  '789215824912580648'
];



module.exports = {
  name: 'validS2e4-button',
  async runInteraction(client, interaction) {

    const buttons = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('rewardS2e4-button')
        .setLabel('Accepter la récompense')
        .setStyle('SECONDARY')
        .setEmoji('854326960586883072')
        .setDisabled(false),

  );

  if (!ownerId.includes(interaction.member.user.id))return interaction.reply({ content: 'Seul un maitre de l\'ombre peut valider ou annuler une mission !', ephemeral: true});

  const embed = new MessageEmbed()
        .setTitle('Saison 2 - épisode 4')
        .setThumbnail('https://zupimages.net/up/22/27/r0e4.png')
        .addFields(
        { name: 'Récompense', value: `1600 <:XP:854326960586883072>*---En attente de validation---*\n30000 <:MC:935563515945705553>*---Distribués---*`}
        )
        .setTimestamp()
        .setFooter({ 
          text: (`Validé par: ${interaction.member.user.tag}`),
          iconURL: interaction.member.user.displayAvatarURL(),
        });



      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true, deferred : true });
  },
};