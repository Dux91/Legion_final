const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

const ownerId = [
  '682745227924340739',
  '789215824912580648'
];



module.exports = {
  name: 'validPerlesvivantes-button',
  async runInteraction(client, interaction) {

    const buttons = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('rewardPerlesvivantes-button')
        .setLabel('Accepter la récompense')
        .setStyle('SECONDARY')
        .setEmoji('854326960586883072')
        .setDisabled(false),

  );

  if (!ownerId.includes(interaction.member.user.id))return interaction.reply({ content: 'Seul un maitre de l\'ombre peut valider ou annuler une mission !', ephemeral: true});

  const embed = new MessageEmbed()
        .setColor('#2C75FF')
        .setThumbnail('https://zupimages.net/up/22/23/jrck.png')
        .setTitle('-------- Mission Récolte --------')
        .addFields(
        { name: 'Ressources', value: `50 Perles vivantes.`},
        { name: 'Etat', value: `Livraison effectuée, <:XP:854326960586883072> En attente de validation `},
        { name: 'Récompense', value: `300 <:XP:854326960586883072>*---En attente de validation---*\n1200 <:MC:935563515945705553>*---Distribués---*`}
        )
        .setTimestamp()
        .setFooter({ 
          text: (`Validé par: ${interaction.member.user.tag}`),
          iconURL: interaction.member.user.displayAvatarURL(),
        });



      await interaction.update({ content: ' ', embeds: [embed], components: [buttons], fetchReply: true, deferred : true });
  },
};
