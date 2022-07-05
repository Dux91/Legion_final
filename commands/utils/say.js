module.exports = {
  name: 'say',
  category: 'utils',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: true,
  usage: 'say [texte pour faire parler LEGION]',
  examples: ['say [Nous sommes LEGION!]' ],
  description: 'Faire parler LEGION',
  options: [
    {
      name: 'text',
      description: 'Entrer un texte',
      type: 'STRING',
      required: true,
    },
    
  ],

  async runInteraction(client, interaction) {
    const text = interaction.options.getString('text');

    await interaction.reply({ content: `${text}`}); 
  }
};