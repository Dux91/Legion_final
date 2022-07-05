const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

  const buttonsBRD = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setCustomId('initBRD-button')
    .setLabel('Initialiser la mission')
    .setStyle('SECONDARY')
    .setEmoji('831196656434937856'),
  );

module.exports = {
  name: 'brd',
  category: 'livraison',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: true,
  usage: 'brd [resource] <valeur> [quantité] <valeur> [nom du joueur] <valeur> [code ami nms] <valeur>',
  examples: ['brd [baie de feu] [100]'],
  description: 'Créer une mission Black Rocket Delivery.',
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
    {
      name: 'nom-du-joueur',
      description: 'Entrer le nom du joueur',
      type: 'STRING',
      required: true,
    },
    {
      name: 'code-ami-nms',
      description: 'entrer le code ami du joueur',
      type: 'STRING',
      required: true,
    },
  ],
  async runInteraction(client, interaction, memberSettings, guildSettings) {
    const BRD = ('989594489859502221');

    const Ressource = interaction.options.getString('ressource');
    const Quantité = interaction.options.getString('quantité');
    const Name = interaction.options.getString('nom-du-joueur');
    const CodAmi = interaction.options.getString('code-ami-nms');

    const embedBRD = new MessageEmbed()
    .setColor('#9B00FF')
    .setThumbnail('https://zupimages.net/up/22/25/oxih.png')
    .setTitle('-- Black Rocket Delivery --')
    .addFields(
    { name: 'Ressource demandée', value: `${Quantité} ${Ressource}`},
    { name: 'Joueur', value: `${Name}`},
    { name: 'Code ami', value: `${CodAmi}`},
    { name: 'Etat', value: `En attente d'initialisation par un membre des <@&848555681987428373>`},
    { name: 'Récompense', value: `50 <:XP:854326960586883072>\n500 <:MC:935563515945705553>`},
    )
    .setTimestamp()
    .setFooter({ 
    text: interaction.user.username,
    iconURL: interaction.user.displayAvatarURL(),
    });

    if (interaction.channelId !== BRD)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#892771913359851560>,\n**si tu vois pas le salon, c\'est que tu as pas le niveau!**', ephemeral: true });
    
    await interaction.reply({ content: ' ', embeds: [embedBRD], components: [buttonsBRD], fetchReply: true });
  }
};
