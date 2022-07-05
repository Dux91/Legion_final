const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

  const buttonsClasseS = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setCustomId('validclasss-button')
    .setLabel('Valider la mission')
    .setStyle('SECONDARY')
    .setEmoji('831196656434937856'),
  );

module.exports = {
  name: 'classes',
  category: 'cargo-abandonne',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'classes [galaxie] <valeur> [Type] <valeur> [Classe] <valeur> [Métal corrompu] <valeur>',
  examples: 'classes',
  description: 'Lancer une mission cargo abandonné.',
  options: [
    {
      name: 'galaxie',
      description: 'Entrer le nom de la galaxie',
      type: 'STRING',
      required: true,
    },
    {
      name: 'type',
      description: 'Choisir le type de cargo abandonné rencontré',
      type: 'STRING',
      required: true,
      choices: [
        {
          name: 'Parasites',
          value: 'Parasites',
        },
        {
          name: 'Sentinelles',
          value: 'Sentinelles',
        },
        {
          name: 'All',
          value: 'All',
        },
      ]
    },
    {
      name: 'metal-corrompu',
      description: 'Entrer la quantité de Métal Corrompu',
      type: 'STRING',
      required: true,
    },
  ],
  async runInteraction(client, interaction, memberSettings, guildSettings) {
    const CargoClasseS = ('833396732564865086');
    const Galaxie = interaction.options.getString('galaxie');
    const Type = interaction.options.getString('type');
    const MetalCorrompu = interaction.options.getString('metal-corrompu');

    const embedClassS = new MessageEmbed()
    .setColor('#000000')
    .setThumbnail('https://zupimages.net/up/22/24/id8w.png')
    .setTitle('-------- Mission Cargo abandonné --------')
    .addFields(
    { name: 'Galaxie', value: `${Galaxie}`},
    { name: 'Type', value: `${Type}`},
    { name: 'Class', value: '<:classes:987768313474068550>'},
    { name: 'Métal-Corrompu', value: `${MetalCorrompu} <:MC:935563515945705553> *--Récoltés--*`},
    { name: 'Récompense', value: `350 <:XP:854326960586883072>\n3500 <:MC:935563515945705553> *--distribués--*`}
    )
    .setTimestamp()
    .setFooter({ 
    text: interaction.user.username,
    iconURL: interaction.user.displayAvatarURL(),
    });

    if (interaction.channelId !== CargoClasseS)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#833396732564865086>,\n**si tu vois pas le salon, c\'est que tu as pas le niveau!**', ephemeral: true });
    
    await interaction.reply({ content: `Merci de poster les infos de ce cargo dans <#828305469600825374>`, embeds: [embedClassS], components: [buttonsClasseS], fetchReply: true });
  }
};
