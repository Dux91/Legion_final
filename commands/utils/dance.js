module.exports = {
  name: 'dance',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'dance',
  examples: ['dance' ],
  description: 'Monkey dance',

  async runInteraction(client, interaction) {
    const text = interaction.options.getString('text');

    await interaction.reply({ content: 'https://tenor.com/view/excited-dance-funny-monkey-gif-12662007'}); 
  }
};
