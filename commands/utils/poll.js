const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'poll',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: true,
  usage: 'poll [question]',
  examples: ['poll', 'poll Comment on fait des Nanites?'],
  description: 'Postes ton propre sondage!',
  async run(client, message, args) {
    if (!args[0]) return message.reply("Entres une question pour ton sondage!");

    
    const embed = new MessageEmbed()
      .setTitle('sondage')
      .setColor('#000000')
      .setDescription(args.slice(0).join(' '))
      .setTimestamp()
      .setFooter({ text: `Nouveau sondage généré par ${message.author.tag}!` });

    const poll = await message.reply({ embeds: [embed] })
    poll.react('<:valid_BS:831196656434937856>');
    poll.react('<:unvalid_BS:831197387153211462>');
  },
  options: [
    {
      name: 'title',
      description: 'Tapes le titre de ton sondage.',
      type: 'STRING',
      required: true,
    },
    {
      name: 'content',
      description: 'Tapes la question de ton sondage.',
      type: 'STRING',
      required: true,
    },
  ],
  async runInteraction(client, interaction) {
      const pollTitle = interaction.options.getString('title');
      const pollContent = interaction.options.getString('content');
      
      const embed = new MessageEmbed()
        .setTitle(pollTitle)
        .setColor('#000000')
        .setDescription(pollContent)
        .setTimestamp()
        .setFooter({ text: `Nouveau sondage généré par ${interaction.user.tag}!` });

      const poll = await interaction.reply({ embeds: [embed], fetchReply: true });
      poll.react('<:valid_BS:831196656434937856>');
      poll.react('<:unvalid_BS:831197387153211462>');
  },
};