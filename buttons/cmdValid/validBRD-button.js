const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const ownerId = [
  '682745227924340739',
  '789215824912580648'
];



module.exports = {
  name: 'validBRD-button',
  async runInteraction(client, interaction) {

    const buttons = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('rewardBRD-button')
        .setLabel('Accepter la récompense')
        .setStyle('SECONDARY')
        .setEmoji('854326960586883072')
        .setDisabled(false),

  );

  if (!ownerId.includes(interaction.member.user.id))return interaction.reply({ content: 'Seul un maitre de l\'ombre peut valider ou annuler une mission !', ephemeral: true});

  const embedMember = new MessageEmbed()
    .setColor('9B00FF')
    .setThumbnail('https://zupimages.net/up/22/25/oxih.png')
    .setTitle('-- Black Rocket Delivery --')
    .addFields(
    { name: 'Etat', value: `Livraion effectué`},
    { name: 'Récompense', value: `50 <:XP:854326960586883072>*---En attente de validation---*\n500 <:MC:935563515945705553>*---Distribués---*`},
    )
    .setTimestamp()
    .setFooter({ 
      text: interaction.user.username,
      iconURL: interaction.user.displayAvatarURL(),
    });

    await interaction.update({ content: ' ', embeds: [embedMember], components: [buttons], fetchReply: true, deferred : true });
  },
};