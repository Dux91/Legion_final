const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

  const buttonsParasites = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setCustomId('validParasites-button')
    .setLabel('Valider la mission')
    .setStyle('SECONDARY')
    .setEmoji('831196656434937856'),
  );

  const buttonsSentinelles = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setCustomId('validSentinelles-button')
    .setLabel('Valider la mission')
    .setStyle('SECONDARY')
    .setEmoji('831196656434937856'),
  );

  const buttonsAll = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setCustomId('validAll-button')
    .setLabel('Valider la mission')
    .setStyle('SECONDARY')
    .setEmoji('831196656434937856'),
  );

module.exports = {
  name: 'cargo-abandonne',
  category: 'cargo-abandonne',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'cargo-abandonne [galaxie] <valeur> [classe] [type] [Metal corrompu] <valeur> ',
  examples: ['cargo-abandonne [Euclide] [B] [Parasites] [640]'],
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
      name: 'classe',
      description: 'Choisir la classe du cargo abandonné rencontré',
      type: 'STRING',
      required: true,
      choices: [
        {
          name: 'C',
          value: 'C',
        },
        {
          name: 'B',
          value: 'B',
        },
        {
          name: 'A',
          value: 'A',
        },
        {
          name: 'S',
          value: 'S',
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
    const CargoAbandonne = ('832612419318054982');

    const Galaxie = interaction.options.getString('galaxie');
    const Type = interaction.options.getString('type');
    const Class = interaction.options.getString('classe');
    const MetalCorrompu = interaction.options.getString('metal-corrompu');

    const embedParasites = new MessageEmbed()
    .setColor('#000000')
    .setThumbnail('https://zupimages.net/up/22/24/id8w.png')
    .setTitle('-------- Mission Cargo abandonné --------')
    .addFields(
    { name: 'Galaxie', value: `${Galaxie}`},
    { name: 'Type', value: `${Type}`},
    { name: 'Class', value: `${Class}`},
    { name: 'Métal-Corrompu', value: `${MetalCorrompu} <:MC:935563515945705553> *--Récoltés--*`},
    { name: 'Récompense', value: `250 <:XP:854326960586883072>\n2 <:dispdestase:855003969193639946>*---Distribués---*`}
    )
    .setTimestamp()
    .setFooter({ 
    text: interaction.user.username,
    iconURL: interaction.user.displayAvatarURL(),
    });

    const embedSentinelles = new MessageEmbed()
    .setColor('#000000')
    .setThumbnail('https://zupimages.net/up/22/24/rqds.png')
    .setTitle('-------- Mission Cargo abandonné --------')
    .addFields(
    { name: 'Galaxie', value: `${Galaxie}`},
    { name: 'Type', value: `${Type}`},
    { name: 'Class', value: `${Class}`},
    { name: 'Métal-Corrompu', value: `${MetalCorrompu} <:MC:935563515945705553> *--Récoltés--*`},
    { name: 'Récompense', value: `200 <:XP:854326960586883072>\n2 <:dispdestase:855003969193639946>*---Distribués---*`}
    )
    .setTimestamp()
    .setFooter({ 
    text: interaction.user.username,
    iconURL: interaction.user.displayAvatarURL(),
    });

    const embedAll = new MessageEmbed()
    .setColor('#000000')
    .setThumbnail('https://zupimages.net/up/22/24/alxo.png')
    .setTitle('-------- Mission Cargo abandonné --------')
    .addFields(
    { name: 'Galaxie', value: `${Galaxie}`},
    { name: 'Type', value: `${Type}`},
    { name: 'Class', value: `${Class}`},
    { name: 'Métal-Corrompu', value: `${MetalCorrompu} <:MC:935563515945705553> *--Récoltés--*`},
    { name: 'Récompense', value: `300 <:XP:854326960586883072>\n2 <:dispdestase:855003969193639946>*---Distribués---*`}
    )
    .setTimestamp()
    .setFooter({ 
    text: interaction.user.username,
    iconURL: interaction.user.displayAvatarURL(),
    });

    if (interaction.channelId !== CargoAbandonne)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#832612419318054982>,\n**si tu vois pas le salon, c\'est que tu as pas le niveau!**', ephemeral: true });

    if (!Type)return interaction.reply('Entrer le type de défense du cargo abandonné!');

    if (Type == 'Parasites'){
      await interaction.reply({ content: `Merci de poster les infos de ce cargo dans <#828197645880262726>`, embeds: [embedParasites], components: [buttonsParasites], fetchReply: true });
    };
    if (Type == 'Sentinelles'){
      await interaction.reply({ content: `Merci de poster les infos de ce cargo dans <#828304669200613466>`, embeds: [embedSentinelles], components: [buttonsSentinelles], fetchReply: true });
    };
    if (Type == 'All'){
      await interaction.reply({ content: `Merci de poster les infos de ce cargo dans <#828307962589741086>`, embeds: [embedAll], components: [buttonsAll], fetchReply: true });
    };
  }
};
