const { MessageActionRow, MessageSelectMenu} = require('discord.js');

const selectMenu = new MessageActionRow()
  .addComponents(
    new MessageSelectMenu()
      .setCustomId('modules-menu')
      .setPlaceholder('Choisis le type de module S que tu veux récolter!')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: 'Exocombinaison',
          description: 'Récolte 6X modules S identiques pour l\'exocombinaison.',
          value: '01'
        },
        {
          label: 'Multi-outils',
          description: 'Récolte 6X modules S identiques pour le multi-outils.',
          value: '02'
        },
        {
          label: 'Exonef',
          description: 'Récolte 6X modules S identiques pour l\'exonef.',
          value: '03'
        },
        {
          label: 'Vaisseau',
          description: 'Récolte 6X modules S identiques pour le vaisseau.',
          value: '04'
        },
        {
          label: 'Frégates',
          description: 'Récolte 6X modules S identiques pour les frégates.',
          value: '05'
        },
        {
          label: 'Cerveau de marcheur',
          description: 'Récolte 20 Cerveaux de marcheur.',
          value: '06'
        }
      ])
  );

module.exports = {
  name: 'modules',
  category: 'recolte',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'modules',
  examples: ['modules'],
  description: 'Choix du type de module à récolter pour le **BRD**',
  async runInteraction(client, interaction) {
    const Fournisseur = ('832611774439751720')
   
    let memberSettings = await client.getMember(interaction.member);

    if (!memberSettings) {
      await client.createMember(interaction.member);
      memberSettings = await client.getMember(interaction.member);
    };

    if (interaction.channelId !== Fournisseur)return interaction.reply({ content:'Cette commande doit être initialisée dans le salon <#832611774439751720>,\n**si tu vois pas le salon, c\'est que tu as pas le niveau!**', ephemeral: true });

    await interaction.reply({ content: 'Mission Récolte :', components: [selectMenu] });
  }
  
};