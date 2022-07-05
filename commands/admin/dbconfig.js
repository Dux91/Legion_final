module.exports = {
  name: 'dbconfig',
  category: 'admin',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: true,
  usage: 'dbconfig [Key] <valeur>',
  examples: ['dbconfig', 'dbconfig xp ?'],
  description: 'Configurer les données de la base de données',
  async run(client, message, args, memberSettings, guildSettings) {
    if (!args[0] || !args[0].match(/^(prefix|logChannel|xp|level|xpToLvlUp)$/)) 
      return message.reply('Merci d\'entrer une clé valide (\`prefix\`/\`logChannel\`/\`xp\`/\`level\`/\`xpToLvlUp\`\`missionId\`)');
    const valeur = args[1];

    if (args[0] == 'prefix') {
      if (valeur) {
        await client.updateGuild(message.guild, {prefix: valeur});
        return message.reply({ content: `Nouvelle valeur de préfix: ${valeur}` });
        }
      message.reply({ content: `valeur de préfix: ${guildSettings.prefix}` });
    } else if (args[0] == 'logChannel') {
      if (valeur) {
        await client.updateGuild(message.guild, {logChannel: valeur});
        return message.reply({ content: `nouvelle valeur de logChannel: ${valeur}` });
        }
      message.reply({ content: `valeur de logChannel: ${guildSettings.logChannel}` });
    } else if (args[0] == 'xp') {
      if (valeur) {
        await client.updateMember(message.member, {xp: valeur});
        return message.reply({ content: `nouvelle valeur des points d\'XP: ${valeur}` });
        }
      message.reply({ content: `valeur des points d\'XP: ${memberSettings.xp}` });
    } else if (args[0] == 'level') {
      if (valeur) { 
        await client.updateMember(message.member, {level: valeur});
        return message.reply({ content: `nouvelle valeur de niveau: ${valeur}` });
      }
      message.reply({ content: `valeur de niveau: ${memberSettings.level}` });
    } else if (args[0] == 'xpToLvlUp') {
      if (valeur) { 
        await client.updateMember(message.member, {xpToLvlUp: valeur});
        return message.reply({ content: `nouvelle valeur du niveau suivant: ${valeur}` });
      }
      message.reply({ content: `valeur du niveau suivant: ${memberSettings.xpToLvlUp}` });
    }
  },
  options: [
    {
      name: 'key',
      description: 'Choisir une clé à modifier ou afficher',
      type: 'STRING',
      required: true,
      choices: [
        {
          name: 'prefix',
          value: 'prefix',
        },
        {
          name: 'logChannel',
          value: 'logChannel',
        },
        {
          name: 'xp',
          value: 'xp',
        },
        {
          name: 'level',
          value: 'level',
        },
        {
          name: 'xpToLvlUp',
          value: 'xpToLvlUp',
        },
      ]
    },
    {
      name: 'valeur',
      description: 'Choisir la nouvelle valeur pour la clé',
      type: 'STRING',
    },
  ],
  async runInteraction(client, interaction, memberSettings, guildSettings) {
    const key = interaction.options.getString('key');
    const valeur = interaction.options.getString('valeur');
      
    if (key == 'prefix') {
      if (valeur) {
        await client.updateGuild(interaction.guild, {prefix: valeur});
        return interaction.reply({ content: `Nouvelle valeur de préfix: ${valeur}` });
        }
      interaction.reply({ content: `valeur de préfix: ${guildSettings.prefix}` });
    } else if (key == 'logChannel') {
      if (valeur) {
        await client.updateGuild(interaction.guild, {logChannel: valeur});
        return interaction.reply({ content: `nouvelle valeur de logChannel: ${valeur}` });
        }
      interaction.reply({ content: `valeur de logChannel: ${guildSettings.logChannel}` });
    } else if (key == 'xp') {
      if (valeur) {
        await client.updateMember(interaction.member, {xp: valeur});
        return interaction.reply({ content: `nouvelle valeur des points d\'XP: ${valeur}` });
        }
      interaction.reply({ content: `valeur des points d\'XP: ${memberSettings.xp}` });
    } else if (key == 'level') {
      if (valeur) { 
        await client.updateMember(interaction.member, {level: valeur});
        return interaction.reply({ content: `nouvelle valeur de niveau: ${valeur}` });
      }
      interaction.reply({ content: `valeur de niveau: ${memberSettings.level}` });
    } else if (key == 'xpToLvlUp') {
      if (valeur) { 
        await client.updateMember(interaction.member, {xpToLvlUp: valeur});
        return interaction.reply({ content: `nouvelle valeur de niveau: ${valeur}` });
      }
      interaction.reply({ content: `valeur du niveau suivant: ${memberSettings.xpToLvlUp}` });
    }
  }
};