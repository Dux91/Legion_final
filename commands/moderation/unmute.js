module.exports = {
  name: 'unmute',
  category: 'moderation',
  permissions: ['MODERATE_MEMBERS'],
  ownerOnly: false,
  usage: 'unmute [@member]',
  examples: ['unmute @Dux'],
  description: 'Démute un utilisateur!',
  async run(client, message, args) { 
    if (!args[0]) return message.reply('Spécifie un membre à démuter!');

    const target = message.mentions.members.find(m => m.id);

    if (!target.isCommunicationDisabled()) return message.reply('Je ne peu pas démute ce membre car il n\'est pas mute, CQFD!');

    target.timeout(null);
    message.channel.send(`Le membre ${target} a bien été démute!`);

   },
  options: [
    {
      name: 'target',
      description: 'L\'utilisateur à mute',
      type: 'USER',
      required: true,
    },
  ],
  async runInteraction(client, interaction) { 
    const target = interaction.options.getMember('target');

    if (!target.isCommunicationDisabled()) return interaction.reply('Je ne peu pas démute ce membre car il n\'est pas mute, CQFD!');

    target.timeout(null);
    interaction.reply(`Le membre ${target} a bien été démute!`);

  }
};