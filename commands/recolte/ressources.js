const { MessageActionRow, MessageSelectMenu} = require('discord.js');

const selectMenu = new MessageActionRow()
  .addComponents(
    new MessageSelectMenu()
      .setCustomId('ressources-menu')
      .setPlaceholder('Choisis le type de ressource que tu veux récolter!')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: 'Or',
          description: 'Récolte 50k unités d\'Or.',
          value: '01'
        },
        {
          label: 'Argent',
          description: 'Récolte 50k unités d\'Argent.',
          value: '02'
        },
        {
          label: 'Oxygène',
          description: 'Récolte 50k unités d\'Oxygène.',
          value: '03'
        },
        {
          label: 'Poussière de ferrite',
          description: 'Récolte 100k unités de Poussière de ferrite.',
          value: '04'
        },
        {
          label: 'Sodium',
          description: 'Récolte 50k unités de Sodium.',
          value: '05'
        },
        {
          label: 'Cobalt',
          description: 'Récolte 50k unités de Cobalt.',
          value: '06'
        },
        {
          label: 'Perles vivantes',
          description: 'Récolte 50 Perles vivantes.',
          value: '07'
        },
        {
          label: 'Cristal gelé',
          description: 'Récolte 50 Cristaux gelés.',
          value: '08'
        },
        {
          label: 'Cristal de sulfure',
          description: 'Récolte 50 Cristaux de sulfure.',
          value: '09'
        }
      ])
  );

module.exports = {
  name: 'ressources',
  category: 'recolte',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'ressources',
  examples: ['ressources'],
  description: 'Choix de la ressource à récolter pour le **BRD**',
  async runInteraction(client, interaction) {
    const Ressources = ('827967976636153867')
   
    let memberSettings = await client.getMember(interaction.member);

    if (!memberSettings) {
      await client.createMember(interaction.member);
      memberSettings = await client.getMember(interaction.member);
    };

    if (interaction.channelId !== Ressources)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#827967976636153867>,\n**si tu vois pas le salon, c\'est que tu as pas le niveau!**', ephemeral: true });

    await interaction.reply({ content: 'Mission Récolte :', components: [selectMenu] });
  }
  
};