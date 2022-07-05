const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

  const buttonsDrunkShadows = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setCustomId('initDrunkShadows-button')
    .setLabel('Initialiser la mission')
    .setStyle('SECONDARY')
    .setEmoji('831196656434937856'),
  );

module.exports = {
  name: 'drunkshadows',
  category: 'recolte',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: true,
  usage: 'drunkshadows [resource] <valeur> [quantité] <valeur> [xp] <valeur> [metal-corrompu] <valeur> ',
  examples: ['drunkshadows [baie de feu] [100] [200] [1000]'],
  description: 'Créer une mission recolte Drunk Shadows.',
  options: [
    {
      name: 'ressource',
      description: 'Entrer le nom de la ressource',
      type: 'STRING',
      required: true,
    },
    {
      name: 'quantité',
      description: 'Choisir la quantité à récolter',
      type: 'STRING',
      required: true,
    },
  ],
  async runInteraction(client, interaction, memberSettings, guildSettings) {
    const DrunkShadows = ('892771913359851560');

    const Ressource = interaction.options.getString('ressource');
    const Quantité = interaction.options.getString('quantité');

    const embedDrunkShadows = new MessageEmbed()
    .setColor('#008000')
    .setThumbnail('https://zupimages.net/up/22/24/3snn.png')
    .setTitle('-- Mission Recolte Drunk Shadows--')
    .addFields(
    { name: 'Ressource demandée', value: `${Quantité} ${Ressource}`},
    { name: 'Etat', value: `En attente d'initialisation par un membre des <@&848555681987428373>`},
    { name: 'Récompense', value: `100 <:XP:854326960586883072>\n1000 <:MC:935563515945705553>`},
    )
    .setTimestamp()
    .setFooter({ 
    text: interaction.user.username,
    iconURL: interaction.user.displayAvatarURL(),
    });

    if (interaction.channelId !== DrunkShadows)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#892771913359851560>,\n**si tu vois pas le salon, c\'est que tu as pas le niveau!**', ephemeral: true });
    
    await interaction.reply({ content: ' ', embeds: [embedDrunkShadows], components: [buttonsDrunkShadows], fetchReply: true });
  }
};
